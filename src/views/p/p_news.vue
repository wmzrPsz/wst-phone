<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"  onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">消息中心</i>
    </div>
    <div class="xijiu background-a color font-16 refundxin_c_z_dian">
      <ul>
        <li @click="datstyle(1)" :class="[type==1?'border_bai refundxin_c_z':'']">
          系统消息
          <i :class="[type==1? 'refundxin_c':'']"></i>
        </li>
        <li @click="datstyle(2)" :class="[type==2?'border_bai refundxin_c_z':'']">
          评论消息
          <i :class="[type==2? 'refundxin_c':'']"></i>
        </li>
      </ul>
    </div>
    <!--系统消息-->
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
      <div class="refundxin_d_a" v-if="type==1">
        <div class="refundxin_d_a_a" v-for="(list,index) in styser" :key="index">
          <ul>
            <li class="font-14">{{list.title}}</li>
            <li class="font-12 color-b">{{list.content}}</li>
            <span class="float_right color-b font-12">{{list.createDate}}</span>
          </ul>
        </div>
      </div>
      <!--评论消息-->
      <div class="refundxin_d_a" v-if="type==2" style="margin-top:0.5rem;">
        <div class="border_e evaluate_wanjia_z" v-for="(list,index) in styser" :key="index">
          <div class="evaluate_wanjia_z_a">
            <div class="evaluate_wanjia_c beijingtu float_left">
              <img v-lazy="list.memberPhoto">
            </div>
            <div class="evaluate_wanjia_d float_left">
              <div class="font-16" style="text-align: left;">{{list.memberName}}</div>
              <div class="font-14 evaluate_wanjia_e color-b">{{list.content}}</div>
              <div class="refundxin_e font-12">
              {{list.fatherComment}}
              </div>
              <div class="font-12 color-b" style="text-align: left;margin-top:0.5rem;">{{list.createDate}}</div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>
  </div>
</template>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  top: 4.5rem;
  bottom: 0;
  height: auto;
}
.refundxin_c_z_dian {
  position: fixed;
  top: 2.5rem;
 z-index: 99;
}
</style>
<script>
import { xiaoxi,pinglun} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      type: 1, //1消息2评论
      styser: [], //消息列表
	  mescroll: null, // mescroll实例对象
	  xipintypl:xiaoxi,//一开始默认消息
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.xiaoxityle, //回调
        page: {
          size: this.$store.state.pageSize //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "./src/assets/img/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 10000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  created() {
   
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  //计算属性
  computed: {
    beforeRouteEnter(to, from, next) {
      // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      next(vm => {
        // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
        vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter(); // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      });
    },
    beforeRouteLeave(to, from, next) {
      // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
      this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave(); // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
      next();
    }
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //消息数据
    async xiaoxityle(page, mescroll) {
      let data = await this.xipintypl(page.num);
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
	},
	//点击切换
	datstyle(index){
		this.type=index;
		if(this.type==1){
         this.xipintypl=xiaoxi
		}
		if(this.type==2){
         this.xipintypl=pinglun
		}
		 this.mescroll.resetUpScroll();
	}
  }
};
</script>

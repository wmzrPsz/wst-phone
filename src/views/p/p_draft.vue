<template>
  <div>
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">我的草稿</i>
      <i class="float_right color her_a_zong_a font-14">编辑</i>
    </div>
    <div class="dingjia_jia">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div v-for="(list,index) in styser" :key="index">
          <div class="draft_z">
            <div class="float_left draft_a beijingtu">
              <img :src="list.cityImg">
            </div>
            <div class="float_right draft_b">
              <span class="font-14 draft_b_a">{{list.title}}</span>
              <span class="font-12 color-b float_right" style="margin-top: 0.3rem;">{{list.createDate}}</span>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
    <!--取消-->
    <button class="background-d color font-16 refundxin_f_b" style="background-color: #EE6363;">删除草稿</button>
  </div>
</template>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  z-index: 9;
  top: 2.5rem;
  bottom: 2rem;
  height: auto;
}
</style>
<script>
import { caogao } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      styser: [], //常规列表
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.shouchang, //回调
        page: {
          size: this.$store.state.pageSize //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "http://www.mescroll.com/img/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
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
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    async shouchang(page, mescroll) {
      let data = await caogao(page.num);
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
    }
  }
};
</script>

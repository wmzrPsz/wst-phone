<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">景点</i>
      <i class="float_right color her_a_zong_a font-14" @click="biajiflag()">编辑</i>
    </div>
    <div class="dingjia_jia">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
          <div class="ze_x"  v-for="(list,index) in styser" :key="index"  @click="selis(index)">
             <div class="ze_jiaxun" v-if="thist==1">
            <!--未选中-->
             <i v-if="list.flag==false"><img src="../../assets/img/A/home_choice_unche@2x.png"></i>
            <!--选中-->
            <i  v-if="list.flag==true"><img src="../../assets/img/A/home_choice_check@2x.png"></i>
          </div>
          <div class="ze_x_a">
            <div style="overflow:hidden; margin-bottom:0.3rem;">
              <div class="float_left ze_x_le">
                <img v-lazy="list.img">
              </div>
              <div class="float_left ze_x_ril">
                <div class="font-14 ze_x_le_a">{{list.name}}</div>
                <ul class="font-12 ze_x_ril_a color-d ze_x_ril_a_jia" v-if="list.tagContent">
                  <li v-for="(list,index) in list.tagContent.split(',')" :key="index">{{list}}</li>
                </ul>
              </div>
            </div>
            <p class="font-12 color-b ze_x_ril_c">{{list.content}}</p>
            <div>
              <div class="float_left font-12 group_d color-h">{{list.cityName}}</div>
              <ul class="ze_x_ril_d float_right">
                <li class="font-14">
                  <i class="color-h">￥{{list.price}}</i>
                  <i>/元起</i>
                </li>
                <li class="font-12 color-b">{{list.commentNum}}条评论</li>
              </ul>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
    <!--取消-->
     <button class="background-d color font-16 refundxin_f_b" v-if="thist==1" @click="quxiaosty">取消收藏</button>
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
import { changui,quxiao } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      thist:0,//未弹出选择按钮——取消收藏
      collectionids:[],//取消收藏的id
      collectionType: 5, //景点
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
      //编辑
    biajiflag(){
      if(this.thist==0){
        this.thist=1;
        return ;
      }
      if(this.thist==1){
        this.thist=0;
        return ;
      }
    },
    //点击选中
    selis(index){
     this.styser[index].flag =!this.styser[index].flag;
    },
    //点击取消收藏
    quxiaosty(){
     for(const list of this.styser){
       if(list.flag){
          this.collectionids.push(list.id)
       }
     }
     this.quxiaos();
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    async shouchang(page, mescroll) {
      let data = await changui(this.collectionType, page.num);
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
         for(const list of this.styser){
          this.$set(list,"flag",false);
          if(list.img){
            this.$set(list,"img",list.img.split(",")[0])
          }
        }
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
    },
    //取消收藏接口
    async quxiaos(){
      let data = await quxiao(this.collectionids.toString());
      if(data){
        this.$toast("取消成功")
         this.mescroll.resetUpScroll();
      }
    },
  }
};
</script>

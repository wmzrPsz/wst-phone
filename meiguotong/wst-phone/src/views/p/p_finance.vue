<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">财务管理</i>
    </div>
    <div class="dingjia">
      <div class="balance">
        <span class="font-16">余额</span>
        <span class="font-22 color-h">
          <i class="font-14">￥</i>569.25
        </span>
        <button class="font-14 color balance_a background-d">申请提现</button>
      </div>
	   <div class="beu_he"></div>
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div>
          <div class="balance_b">
            <span class="font-16">定制行程</span>
            <span class="font-14 color-b">出发城市+时间长短+出发时间+时间长短+出发时间+时间长短+出发时间</span>
            <span>
              <i class="font-16 color-h float_left">-￥589</i>
              <i class="float_right font-14 color-b">2018-02-02</i>
            </span>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  z-index: 9;
  top: 12.5rem;
  bottom: 2rem;
  height: auto;
}
.beu_he{
	margin-top: 12rem;
}
</style>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
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
  }
};
</script>

<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">我的订单</i>
    </div>
    <div class="refundxin_e_a background-a">
      <ul class="sou_her_q color font-12">
        <li @click="dingdanclick(0)">
          <i :class="[status==0? 'color-g':'']">全部订单</i>
          <i   :class="[status==0? 'sou_her_q_a':'']"></i>
        </li>
        <li @click="dingdanclick(1)">
        <i :class="[status==1? 'color-g':'']">待付款</i>
          <i   :class="[status==1? 'sou_her_q_a':'']"></i>
        </li>
        <li @click="dingdanclick(2)">
         <i :class="[status==2? 'color-g':'']">待确认</i>
          <i   :class="[status==2? 'sou_her_q_a':'']"></i>
        </li>
        <li @click="dingdanclick(3)">
         <i :class="[status==3? 'color-g':'']">待出行</i>
          <i   :class="[status==3? 'sou_her_q_a':'']"></i>
        </li>
        <li @click="dingdanclick(4)">
          <i :class="[status==4? 'color-g':'']">待评价</i>
          <i   :class="[status==4? 'sou_her_q_a':'']"></i>
        </li>
      </ul>
    </div>
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit" style="background-color:#F5F5F5" >
    <div v-for="(slist,index) in styser" :key="index">
      <div class="pic_route refundxin_e_b">
        <div class="pic_route_aa refundxin_e_c">
          <div class="pic_route_c">
            <i class="font-12 color-d pic_route_b">{{slist.type | orderTypeVc}}</i>
            <i class="float_right color-d font-12">{{slist.status | orderStatusVc}}</i>
          </div>
          <!--内容-->
          <div class="pic_route_aa_dianj_a pic_route_aa_dianj">
            <div class="pic_route_aa">
              <div class="float_left pic_route_aa_a beijingtu">
                <img :src="slist.orderSysList[0].image">
              </div>
              <div class="float_right pic_route_aa_b">
                <div class="font-14 pic_route_aa_c texe_left">{{slist.orderSysList[0].title}}</div>
                <div class="font-16 color-h texe_left" style="margin-top: 0.1rem">
                  <i class="font-12">￥</i>{{slist.price}}
                </div>
              </div>
              <div class="refundxin_e_d_a">
                <i class="font-12 color-b texe_left float_left">{{slist.orderSysList[0].createDate}}</i>
                <i class="font-12 texe_right float_right">成年{{slist.orderSysList[0].adultNum}};儿童{{slist.orderSysList[0].childNum}}</i>
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div class="float_right refundxin_e_d_z">
          <button class="font-12 refundxin_e_d refundxin_e_d_jia">删除订单</button>
          <button class="font-12 refundxin_e_d">查看详细</button>
        </div>
      </div>
    </div>
    </mescroll-vue>
  </div>
</template>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  z-index: 9;
  top: 4.5rem;
  bottom: 2rem;
  height: auto;
}
.texe_left{
  text-align: left;
}
.texe_right{
  text-align: right;
}
</style>
<script>
import {myOrderUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
import { orderTypeVc,orderStatusVc} from "@/filters/custom";
export default {
  name:'index',
  data(){
   return{
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
      },
      styser:[],//列表数据
      status:0,//订单状态 0标识全部 1.待付款2.待确定，3.待出行，4.待评价
   }
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
  created(){
   
  },
  methods:{
      // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    async shouchang(page, mescroll) {
      let data = await myOrderUrl(this.status,page.num);
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
         for(const list of this.styser){
          this.$set(list,"flag",false);
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
    //点击切换
    dingdanclick:function(index){
    this.status=index;
    this.mescroll.resetUpScroll();
    }
  }
}
</script>
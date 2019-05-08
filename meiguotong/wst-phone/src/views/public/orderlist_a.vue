<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">确认订单</i>
    </div>
    <div class="dingjia">
      <div class="Order">
        <div class="gou font-12">
          <div class="gou_a float_left">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
            </i>
            <i class="gou_c">确认订单</i>
          </div>

          <div class="gou_aa">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
            </i>
            <i class="gou_c">确认付款</i>
          </div>

          <div class="gou_a float_right">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng__gray_icon@2x.png">
            </i>
            <i class="gou_c color-b">完成订单</i>
          </div>
          <p class="gou_xian"></p>
        </div>
      </div>
      <div class="Success">
        <div class="beijingtu Success_a">
          <img src="../../assets/img/A/zccg_succes_icon@2x.png">
        </div>
        <div class="font-16 color-d">预订行程成功</div>
        <div class="font-14 color-b">我们将安排好你的行程后已短信通知你</div>
      </div>
      <div class="Success_b">
        <button class="font-14 float_left background-d" @click="cakclick()">查看订单</button>
        <button class="font-14 float_right Success_c">打印订单</button>
      </div>

      <div class="Success_d">
        <div class="Success_d_a">
          <div class="border_e font-14 Success_d_jia" style="line-height: 2.5rem;">
            <span>应付金额:</span>
            <span class="color-h font-16 ">
              <i>￥</i>{{this.$route.params.zonmni}}
            </span>
          </div>
          <ul class="font-14 Success_dian">
            <li :class="[typlist==1? 'Success_dian_b Success_dian_a':'Success_dian_b']" @click="dinclick(1)">
              <i class="Success_d_b beijingtu">
                <img src="../../assets/img/B/order_zhifub_icon@2x.png">
              </i>
              <span class="Success_d_d border_e">
                支付宝
                <i class="Success_d_c beijingtu">
                  <img src="../../assets/img/B/order_check_icon@2x.png">
                </i>
              </span>
            </li>

            <li :class="[typlist==2? 'Success_dian_b Success_dian_a':'Success_dian_b']" @click="dinclick(2)">
              <i class="Success_d_b beijingtu">
                <img src="../../assets/img/B/order_weichat_icon@2x.png">
              </i>
              <span class="Success_d_d border_e">
                微信支付
                <i class="Success_d_c beijingtu">
                  <img src="../../assets/img/B/order_check_icon@2x.png">
                </i>
              </span>
            </li>

            <li :class="[typlist==3? 'Success_dian_b Success_dian_a':'Success_dian_b']" @click="dinclick(3)">
              <i class="Success_d_b beijingtu">
                <img src="../../assets/img/B/order_yinlian_icon@2x.png">
              </i>
              <span class="Success_d_d border_e">
                银联支付
                <i class="Success_d_c beijingtu">
                  <img src="../../assets/img/B/order_check_icon@2x.png">
                </i>
              </span>
            </li>
            <li :class="[typlist==4? 'Success_dian_b Success_dian_a':'Success_dian_b']" @click="dinclick(4)">
              <i class="Success_d_b beijingtu">
                <img src="../../assets/img/B/order_pay_icon@2x.png">
              </i>
              <span class="Success_d_d border_e">
                PayPAI
                <i class="Success_d_c beijingtu">
                  <img src="../../assets/img/B/order_check_icon@2x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <button class="Success_dian_xia font-14 background-d" @click="xiaclick()">下一步</button>
    </div>
  </div>
</template>
<style lang="less">
.Success_d_a span {
  text-align: left;
}
.Success_d_jia span {
  float: left;
}
.Success_dian {
  overflow: hidden;
  clear: both;
}
</style>
<script>
import {mapMutations} from "vuex";
export default {
	name:'index',
	data(){
		return{
    typlist:1,//默认1支付宝
    tyslit:this.$route.params.tyslit,
		}
	},
	methods:{
		 ...mapMutations("route", ["Selection"]),
		//查看详情
		cakclick:function(){
			this.$router.push({
				path:"/orderlist_b/"+this.$route.params.routeid+"/"+this.tyslit,
			})
		},
		//选择哪种支付方式
		dinclick:function(index){
			this.typlist=index;
		},
	   //完成支付
	   xiaclick:function(){
		let Selection="";//清空vuex选择出游人的信息
		 this.Selection(Selection);
		this.$toast("支付成功")
       this.$router.push({
		   path:"/orderlist_c/"+this.$route.params.routeid+"/"+this.$route.params.tyslit,
	   })
	   }
	}
}
</script>


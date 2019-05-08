<template>
  <div style="background-color: #F5F5F5" class="index">
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
              <img src="../../assets/img/A/sjzc_wancheng__gray_icon@2x.png">
            </i>
            <i class="gou_c color-b">确认付款</i>
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
      <div class="Order_a">
        <div class="sanxing_b">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <span class="font-16 float_left">订单详细</span>
        </div>

        <div class="Order_b">
          <div class="Order_b_zz">
            <div class="beijingtu Order_c font-14" :style="backgroundDiv">联系人信息</div>
            <div class="Order_d color-b">
              <ul>
                <li class="font-14">
                  <i>联系人</i>
                  <input
                    v-model="contactsName"
                    class="font-14 float_right Order_d_a color-b"
                    type="text"
                    placeholder="请输入联系人"
                    name
                  >
                </li>
                <li class="font-14">
                  <i>联系电话</i>
                  <input
                   v-model="contactsMobile"
                    class="font-14 float_right Order_d_a color-b"
                    type="text"
                    placeholder="请输入联系电话"
                    name
                  >
                </li>
                <li class="font-14">
                  <i>备注信息</i>
                  <input
                   v-model="remark"
                    class="font-14 float_right Order_d_a color-b"
                    type="text"
                    placeholder="请输入备注信息"
                    name
                  >
                </li>
              </ul>
            </div>
            <div
              class="beijingtu Order_c font-14"
              style="margin-top: 1rem;"
              :style="backgroundDiv"
            >出行信息</div>

            <div class="Order_d_aa">
              <ul class="Order_d_z">
                <li class="font-14">
                  <i class="float_left">出发地</i>
                  <i class="float_right whi_ez">{{Routineroute.endCityContent}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">时间</i>
                  <i class="float_right whi_ez">{{date}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">人数</i>
                  <i class="float_right whi_ez">{{adult}}成人{{child}}小孩</i>
                </li>
              </ul>
            </div>

            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b" >当地玩家</div>
              <div class="font-14" style="text-align: left;">{{Routineroute.title}}</div>
              <div
                class="font-14 color-d"
                style="margin-top: 0.5rem;text-align: left;"
              >{{Routineroute.subtitle}}</div>
              <div
                class="font-12 color-b"
                style="margin-top: 0.5rem;text-align: left;"
              >{{Routineroute.infor}}</div>
            </div>
            <!--保险选择-->

            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b">保险</div>
              <dl class="font-14" v-for="(listte,index) in baixianlist " :key="index">
                <dd
                  style="text-align: left;"
                  class="Short_distance_relay_e float_left Trip_b Short_distance_relay_b"
                  @click="xunclick(index)"
                >
                  <i class="Short_distance_relay_c" v-if="listte.flag==false"><img src="../../assets/img/A/home_choice_unche@2x.png"></i>
                  <i class="Short_distance_relay_c" v-if="listte.flag==true"><img src="../../assets/img/A/home_choice_check@2x.png"></i>
                  {{listte.name}}￥{{listte.price}}/人
                </dd>
                <dd class="float_right color-h" style="text-align: left;" @click="baiclick(listte.content)">(保险说明)</dd>
              </dl>
            </div>
          </div>
        </div>
        
        <div class="xinx font-14" @click="quclick()">
          <div class="float_left" style="margin-left:0.5rem;">出游人信息</div>
          <div class="float_right">
            <i>已选择{{choiceperson}}人</i>
            <i class="beijingtu xinx_a">
              <img src="../../assets/img/A/more_icon@2x.png">
            </i>
          </div>
        </div>

        <div class="Order_a">
          <div class="sanxing_b">
            <i>
              <img src="../../assets/img/B/clsp_3_icon@2x.png">
            </i>
            <span class="font-16 float_left">订单价格</span>
          </div>
          <div class="Trip">
            <div class="font-16 Order_d_b">当地玩家</div>
            <div class="font-14 color-b" style="text-align: left!important;">
              <i class="color-b float_left Order_d_e beijingtu">
                <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
              </i>
              {{date}} 至 {{endtime}} ({{Routineroute.dayNum}}天)
            </div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">行程</dd>
                <dd class="float_right color-b whi_ez_jia">{{Routineroute.title}}</dd>
                <dd class="float_left Trip_b">路线价格</dd>
                <dd class="float_right color-b whi_ez">￥{{Routineroute.price}}*{{zonchoiceperson}}</dd>
              </dl>
            </div>

            <text class="font-16 Order_d_b">人数</text>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">人数</dd>
                <dd class="float_right">{{adult}}成人{{child}}小孩</dd>
              </dl>
            </div>
            <text class="font-16 Order_d_b">保险</text>
            <div class="Trip_a border_e" >
              <dl class="font-14" v-for="(listte,index) in baixianlist " :key="index">
                <dd 
                  v-if="listte.flag==true"
                  class="float_left Trip_b Short_distance_relay_b"
                  style="text-align: left;"
                >{{listte.name}}</dd>
                <dd class="float_right" v-if="listte.flag==true">￥{{listte.price}}*{{zonchoiceperson}}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="Choose_a_room_dibu">
        <div class="Choose_a_room_dibu_c font-16 float_left">
          总计:
          <span class="color-h font-12">
            ￥
            <i class="font-20">{{Number(pricetyps)+Number(baomang)}}</i>
          </span>
        </div>
        <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g" @click="quclicck()">确定订单</button>
      </div>
    </div>
    <!---->
     <van-popup v-model="show" class="refund_jia">
      <div>
        <p>保险说明</p>
        <p>
         {{baocontent}}
        </p>
      </div>
    </van-popup>
  </div>
</template>
<style lang="less">
 .refund_jia {
  width: 80% !important;
  overflow: hidden;
  border-radius: 8px;
  border: 1px slategray solid;
}
.refund_jia p {
  font-size: 13px !important;
  text-align: left;
  width: 90%;
  margin: 0.3rem auto;
}
.Short_distance_relay_c img{
  width: 100%;
  height: 100%;
}
.whi_ez_jia{
	word-break:break-all;
	width:85%;
	text-align: right;
}
</style>

<script>
import {getInsuranceUrl,saveRouteOrderUrl} from "@/utils/getData";
import { mapState} from "vuex";
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/B/qrdd_biaoq_bg@2x.png") + ")"
      },
      show:false,
      choiceperson:0,//选中人数
      zonchoiceperson:Number(this.$route.params.adult)+Number(this.$route.params.child),//总人数
      date: this.$route.params.date, //出发时间
      date_a:[],
      endtime: "", //结束时间
      adult: this.$route.params.adult, //大人
      child: this.$route.params.child, //小孩
      pricetyps: this.$route.params.pricetyps, //总价格
      dayNum: this.$route.params.dayNum, //形成天数
      endCityContent: this.$route.params.endCityContent ,//出发城市
      productType:5,//1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.旅游定制',
      baixianlist:[],//保险列表
      baocontent:'',
      baomang:'',//保险价格
      contactsName:'',//联系人名称
      remark:'',//备注
      contactsMobile:'',//联系人电话
      insuranceid:'',//保险id
      orderidlist:'',//生成订单的id
    };
  },
  mounted() {
    this.Insurance();
    this.expire();
    this.choiceperson=this.Selection.length;
    console.log(this.Routineroute);
    this.date_a=this.date.split("-");
    if(this.date_a[1]<10){
      this.date_a[1]='0'+ this.date_a[1];
    }
    if(this.date_a[2]<10){
      this.date_a[2]='0'+ this.date_a[2];
    }
     console.log(this.date_a);
     this.date=this.date_a[0]+'-'+this.date_a[1]+"-"+this.date_a[2];
  },

  computed: {
    ...mapState({
      Routineroute: state => state.route.Routineroute,
      Price: state => state.route.Price,
      Selection:state=>state.route.Selection,
    })
  },
  methods: {
    //到期时间
    expire: function() {
      let endtime_z =
        new Date(this.date).getTime() +
        this.Routineroute.dayNum * 24 * 60 * 60 * 1000;
      let endtime_y = new Date(endtime_z).getFullYear(); //年
      let endtime_m = new Date(endtime_z).getMonth() + 1; //月
      let endtime_x = new Date(endtime_z).getDate(); //日
      this.endtime = endtime_y + "-" + endtime_m + "-" + endtime_x;
    },
    //选择人数
    quclick: function(){
     this.$router.push({
        path: "/tourist/"+this.zonchoiceperson
      });
    },
    //保险说明
    async Insurance(){
      let data = await getInsuranceUrl(this.productType);
     if(data){
       this.baixianlist=data;
     }
     for(const test of this.baixianlist){
       this.$set(test,'flag',false);
     }
    },
    //点击保险说明
    baiclick :function(list){
      this.show=true;
      this.baocontent=list;
    },
    //选择保险
    xunclick :function(index){
      this.baixianlist[index].flag =! this.baixianlist[index].flag;
       for(const test of this.baixianlist){
       if(test.flag==true){
         this.insuranceid=test.id;
         this.baomang=this.baomang+test.price*this.zonchoiceperson;
       }else{
          this.baomang=0;
       }
     }
    },
  //确定订单
  async quclicck(){
    if(this.choiceperson!=this.zonchoiceperson){
      this.$toast("完善出游人信息");
      return;
    }
    if(this.contactsName==0){
       this.$toast("填写联系人");
      return;
    }
    if(this.contactsMobile==0){
       this.$toast("填写联系人电话");
      return;
    }
    // for(const test of this.Selection){
    //   this.$set(test,"type",false);
    // }
    let data = await saveRouteOrderUrl(
      this.$route.params.routeid,
      this.contactsName,
      this.contactsMobile,
      this.remark,
      this.date,
      this.adult,
      this.child,
      this.insuranceid,
      JSON.stringify(this.Selection),
     );
     if(data){
       let zonmni = Number(this.pricetyps)+Number(this.baomang)
        this.orderidlist=data;
       this.$router.push({
        path: "/orderlist_a/" +this.orderidlist+"/"+zonmni+"/"+this.$route.params.tyslit,
      });
     }
  }
  }
};
</script>

     
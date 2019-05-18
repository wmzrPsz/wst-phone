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
                  <i class="float_right whi_ez">{{spotlist.cityName}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">时间</i>
                  <i class="float_right whi_ez">{{startDate}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">人数</i>
                  <i class="float_right whi_ez">{{adult}}成人{{child}}小孩</i>
                </li>
              </ul>
            </div>

            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b">景点门票</div>
              <div class="font-14" style="text-align: left;">{{spotlist.name}}</div>
              <div
                class="font-12 color-b"
                style="margin-top: 0.5rem;text-align: left;"
              >地址:{{spotlist.address}}</div>
               <div
                class="font-12 color-b"
                style="margin-top: 0.5rem;text-align: left;"
              >特色:{{spotlist.content}}</div>
            </div>
            <div class="Trip_a border_e Orderjia">
              <dl class="font-14">
                <dd class="float_left Trip_b">景点</dd>
                <dd class="float_right color-b whi_ez_jia">{{spotlist.name}}</dd>
                 <dd class="float_left Trip_b">数量</dd>
                <dd class="float_right color-b whi_ez_jia">{{zonchoiceperson}}</dd>
              </dl>
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
            <div class="font-16 Order_d_b" >景点</div>
            <div class="font-14 color-b" style="text-align: left!important;">
              <i class="color-b float_left Order_d_e beijingtu">
                <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
              </i>
             {{startDate}}
            </div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">行程</dd>
                <dd class="float_right color-b whi_ez_jia">{{spotlist.address}}</dd>
              </dl>
            </div>
             <div class="Trip_a border_e ">
              <dl class="font-14">
                <dd class="float_left Trip_b">门票</dd>
                <dd class="float_right color-b whi_ez_jia">{{spotlist.name}}</dd>
                 <dd class="float_left Trip_b">门票价格</dd>
                <dd class="float_right color-b whi_ez_jia" style="width:7rem!important">￥{{price}}*{{zonchoiceperson}}张</dd>
              </dl>
            </div>
            <div class="font-16 Order_d_b">人数</div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">人数</dd>
                <dd class="float_right">{{adult}}成人{{child}}小孩</dd>
              </dl>
            </div>
            <div class="font-16 Order_d_b">保险</div>
            <div class="Trip_a border_e" v-for="(listte,index) in baixianlist " :key="index">
              <dl class="font-14" v-if="listte.flag==true">
                <dd
                  class="float_left Trip_b Short_distance_relay_b"
                  style="text-align: left;"
                >{{listte.name}}</dd>
                <dd class="float_right">￥{{listte.price}}*{{zonchoiceperson}}</dd>
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
            <i class="font-20">{{Number(pricetyps)+baomang*zonchoiceperson}}</i>
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
import {getInsuranceUrl,saveScenicOrderUrl} from "@/utils/getData";
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
      adult:this.$route.params.adult,//大人
      child:this.$route.params.child,//小孩
      price:this.$route.params.price,//景点价格
      pricetyps:( this.$route.params.price*this.$route.params.adult)+( this.$route.params.price*this.$route.params.child), //总价格
      productType:4,//1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.旅游定制',
      baixianlist:[],//保险列表
      baocontent:'',
      contactsName:'',//联系人名称
      remark:'',//备注
      contactsMobile:'',//联系人电话
      insuranceid:"",
      orderidlist:'',//生成订单的id
      startDate:this.$route.params.startDate,//出发时间
      tyslit:5,//景点
    };
  },
  mounted() {
    console.log(this.Selection);
    this.Insurance();
    this.choiceperson=this.Selection.length;
  },

  computed: {
    baomang() {
      let baomang = "";
      for (const teme of this.baixianlist) {
        if (teme.flag) {
          baomang = teme.price;
          this.insuranceid=teme.id;
        }
      }
      return baomang;
    },
    ...mapState({
      spotlist:state=>state.route.spotlist,
      Selection:state=>state.route.Selection,
    })
  },
  methods: {
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
    //选择保险
    xunclick: function(index) {
      if (this.baixianlist[index].flag == false) {
        this.baixianlist.map(elem => {
          elem.flag = false;
        });
      }
      this.baixianlist[index].flag = !this.baixianlist[index].flag;
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
    let data = await saveScenicOrderUrl(
      this.$route.params.scenicSpotTicketId,//门票id
      this.contactsName,
      this.contactsMobile,
      this.remark,
      this.startDate,
      this.adult,
      this.child,
      this.insuranceid,
      JSON.stringify(this.Selection),
      this.spotlist.id,//景点id
      this.zonchoiceperson,
     );
     if(data){
       let zonmni = Number(this.pricetyps)+this.baomang*this.zonchoiceperson
        this.orderidlist=data;
       this.$router.push({
        path: "/orderlist_a/" +this.orderidlist+"/"+zonmni+"/"+this.tyslit,
      });
     }
  }
  }
};
</script>

     
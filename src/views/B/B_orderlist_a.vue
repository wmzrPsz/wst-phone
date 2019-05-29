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
                  <i class="float_right whi_ez">{{pathlist.quecity}}{{pathlist.startAddress}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">时间</i>
                  <i class="float_right whi_ez">{{pathlist.certValidDate}}</i>
                </li>
                <li class="font-14">
                  <i class="float_left">人数</i>
                  <i class="float_right whi_ez">{{pathlist.master}}</i>
                </li>
              </ul>
            </div>
            <div class="Orderjia border_e Order_dme">
              <div class="font-16 Order_d_b">包车租车</div>
              <div>
                <ul class="Order_d_z">
                  <li class="font-14" style="text-align: left!important;">
                    <i class="Order_d_e beijingtu">
                      <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
                    </i>
                    {{pathlist.certValidDate}} - {{pathlist.birthday}} ({{pathlist.datet}}天)
                  </li>
                  <li v-for="(list,index) in piaylist" :key="index">
                    <div class="float_left font-16">
                      <i class="Order_d_f font-12">{{list.day}}</i>
                      第{{list.day}}天
                    </div>
                    <div class="float_right font-14 color-b whi_ez">{{list.serviceTitle}}</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="Orderjia border_e Order_dme">
              <div class="font-16 Order_d_b">酒店信息</div>
              <div>
                <ul class="Order_d_z">
                  <li v-for="(list,index) in roomlist" :key="index">
                    <div class="float_left font-16">
                      <i class="ez-video_dian">
                        <img src="../../assets/img/B/clsp_3_icon@2x.png">
                      </i>
                      {{list.date}}
                    </div>
                    <div class="float_right font-14 whi_ez">
                      {{list.hotelname}}
                      <i class="video_dian_a color-b">
                        房间
                        <i
                          v-for="(test,index) in list.room"
                          :key="index"
                        >{{test.Number}}*{{test.roomName}}</i>
                      </i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--汽车信息-->
            <div class="Orderjia border_e">
              <div class="font-16 Order_d_b">汽车信息</div>
              <dl class="font-14 video_dian_c" v-for="(list,index) in vehicledata" :key="index">
                <div class="float_left font-16">
                  <i class="ez-video_dian">
                    <img src="../../assets/img/B/clsp_3_icon@2x.png">
                  </i>
                  {{list.carName}}
                </div>
                <dd class="float_right video_dian_b">
                  <span>{{list.seatNum}}座</span>
                  <span>1-{{list.bagNum}}容量</span>
                  <span>{{list.comfort | carLevelVc}}</span>
                </dd>
                <dd class="video_dian_a color-b">{{list.carTrait}}</dd>
              </dl>
            </div>
            <!--导游信息-->
            <div class="Orderjia border_e"  v-if="guidetyplistyp!=0">
              <div class="font-16 Order_d_b">导游信息</div>
              <dl class="font-14 video_dian_c">
                <dd>{{guidetyplistyp.realName}}</dd>
                <dd class="video_dian_d">
                  <span>性别:{{guidetyplistyp.sex |sexVc}}</span>
                  <span>年龄:{{guidetyplistyp.age}}</span>
                  <span>所在地区:{{guidetyplistyp.cityName}}</span>
                </dd>
                <dd class="video_dian_d">
                  <span>擅长:{{guidetyplistyp.tagContent}}</span>
                </dd>
                <dd class="video_dian_a color-b">个人简历:{{guidetyplistyp.introduction}}</dd>
              </dl>
            </div>
            <!--保险-->
            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b">保险</div>
              <dl class="font-14" v-for="(listte,index) in baixianlist " :key="index">
                <dd
                  style="text-align: left;"
                  class="Short_distance_relay_e float_left Trip_b Short_distance_relay_b"
                  @click="xunclick(index)"
                >
                  <i class="Short_distance_relay_c" v-if="listte.flag==false">
                    <img src="../../assets/img/A/home_choice_unche@2x.png">
                  </i>
                  <i class="Short_distance_relay_c" v-if="listte.flag==true">
                    <img src="../../assets/img/A/home_choice_check@2x.png">
                  </i>
                  {{listte.name}}￥{{listte.price}}/人
                </dd>
                <dd
                  class="float_right color-h"
                  style="text-align: left;"
                  @click="baiclick(listte.content)"
                >(保险说明)</dd>
              </dl>
            </div>
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
      <div class="sanxing_b">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <span class="font-16 float_left">订单价格</span>
        </div>
      <div class="Order_b" style="padding-top:0rem;  margin-bottom:3rem;">
      <div class="">
        <div class="Trip">
              <div class="font-16 Order_d_b">行程</div>
              <div>
                <ul class="Order_d_z">
                  <li class="font-14" style="text-align: left!important;">
                    <i class="Order_d_e beijingtu">
                      <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
                    </i>
                    {{pathlist.certValidDate}} - {{pathlist.birthday}} ({{pathlist.datet}}天)
                  </li>
                </ul>
              </div>
          <div class="font-16 Order_d_b">旅游定制</div>
          <div class="Trip_a border_e">
            <dl class="font-14">
              <dd class="float_left Trip_b " v-for="(list,index) in piaylist" :key="index">{{list.serviceTitle}}</dd>
            </dl>
          </div>
          <div class="font-16 Order_d_b">酒店</div>
          <div class="Trip_a border_e">
            <div v-for="(list,index) in roomlist" :key="index">
            <dl class="font-14" v-for="(test,index) in list.room" :key="index">
              <dd class="float_left Trip_b">{{test.roomName}}</dd>
              <dd class="float_right color-b">￥{{test.price}}*{{test.Number}}</dd>
            </dl>
            </div>
          </div>
          <div class="font-16 Order_d_b">导游</div>
          <div class="Trip_a border_e" v-if="guidetyplistyp!=0">
            <dl class="font-14">
              <dd class="float_left Trip_b">导游</dd>
              <dd class="float_right">{{guidetyplistyp.realName}}</dd>
              <dd class="float_left Trip_b">价格</dd>
              <dd class="float_right">{{pathlist.datet}}天*￥{{guidetyplistyp.price}}</dd>
            </dl>
          </div>

          <div class="font-16 Order_d_b">用车</div>
          <div class="Trip_a border_e">
            <dl class="font-14" v-for="(list,index) in vehicledata" :key="index">
              <dd class="float_left Trip_b">用车</dd>
              <dd class="float_right">{{list.carName}}</dd>
              <dd class="float_left Trip_b">价格</dd>
              <dd class="float_right">{{pathlist.datet}}天*￥{{list.price}}</dd>
            </dl>
          </div>

          <div class="font-16 Order_d_b">人数</div>
          <div class="Trip_a border_e">
            <dl class="font-14">
              <dd class="float_left Trip_b">人数</dd>
              <dd class="float_right">{{pathlist.adultNum}}/成年人,{{pathlist.childNum}}/儿童</dd>
            </dl>
          </div>
          <div class="font-16 Order_d_b">保险</div>
          <div class="Trip_a border_e" v-if="baomang!=0">
            <dl class="font-14">
              <dd class="float_left Trip_b">{{baomang.name}}</dd>
              <dd class="float_right">￥{{baomang.price}}*{{pathlist.master}}/人</dd>
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
            <i class="font-20">{{manni}}</i>
          </span>
        </div>
        <button
          class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g"
          @click="quclicck()"
        >确定订单</button>
      </div>
    </div>
    <!---->
    <van-popup v-model="show" class="refund_jia">
      <div>
        <p>保险说明</p>
        <p>{{baocontent}}</p>
      </div>
    </van-popup>
  </div>
</template>
<style lang="less">
dd {
  text-align: left; 
}
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
.Short_distance_relay_c img {
  width: 100%;
  height: 100%;
}
.whi_ez_jia {
  word-break: break-all;
  width: 85%;
  text-align: right;
}
</style>

<script>
import { getInsuranceUrl, saveCarOrderUrl } from "@/utils/getData";
import { mapState } from "vuex";
import { stat } from "fs";
import { carLevelVc, sexVc } from "@/filters/custom";
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/B/qrdd_biaoq_bg@2x.png") + ")"
      },
      show: false,
      choiceperson: 0, //选中人数
      productType: 1, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.旅游定制',
      baixianlist: [], //保险列表
      baocontent: "",
      contactsName: "", //联系人名称
      remark: "", //备注
      contactsMobile: "", //联系人电话
      orderidlist: "", //生成订单的id
      insuranceid: "", //选中保险id
      tyslit: 3, //1常规路线2当地参团3当地玩家
      manni:this.$route.params.manni,//
    };
  },

  computed: {
    baomang() {
      let baomang = "";
      for (const teme of this.baixianlist) {
        if (teme.flag) {
          baomang = teme;
          this.insuranceid = teme.id;
        }
      }
      return baomang;
    },
    ...mapState({
      Selection: state => state.route.Selection, //选择的出游人信息
      pathlist: state => state.route.pathlist, //包车租车index页填写的信息
      piaylist: state => state.route.piaylist, //游玩类型列表
      roomlist: state => state.route.roomlist, //酒店列表
      vehicledata: state => state.route.vehicledata, //汽车信息
      guidetyplistyp: state => state.route.guidetyplistyp //导游信息
    })
  },
  filters: {
    sectext: function(value) {
      if (value == 1) {
        return "男";
      }
      if (value == 2) {
        return "女";
      }
    }
  },
  mounted() {
    this.Insurance();
    this.choiceperson = this.Selection.length;
    console.log(this.pathlist);
    console.log(this.piaylist);
    console.log(this.roomlist);
    console.log(this.vehicledata);
    console.log(this.guidetyplistyp);
  },
  methods: {
    //选择人数
    quclick: function() {
      this.$router.push({
        path: "/tourist/" + this.pathlist.master
      });
    },
    //保险说明
    async Insurance() {
      let data = await getInsuranceUrl(this.productType);
      if (data) {
        this.baixianlist = data;
      }
      for (const test of this.baixianlist) {
        this.$set(test, "flag", false);
      }
    },
    //点击保险说明
    baiclick: function(list) {
      this.show = true;
      this.baocontent = list;
    },
    //选择保险
    xunclick: function(index) {
      if (this.baixianlist[index].flag == false) {
        this.baixianlist.map(elem => {
          elem.flag = false;
        });
      }
      this.baixianlist[index].flag = !this.baixianlist[index].flag;
    },
    async quclicck() {
      if (this.$route.params.routeidslit == 2) {
        this.guideRouteid = this.Recommendlist.id;
      }
      if (this.choiceperson != this.pathlist.master) {
        this.$toast("完善出游人信息");
        return;
      }
      if (this.contactsName == 0) {
        this.$toast("填写联系人");
        return;
      }
      if (this.contactsMobile == 0) {
        this.$toast("填写联系人电话");
        return;
      }
      let data = await saveCarOrderUrl(
        this.contactsName,//联系人
        this.contactsMobile,//联系电话
        this.remark,//备注
        this.pathlist.certValidDate,//上车时间
        this.pathlist.birthday,//下车时间
        this.pathlist.datet,//行程天数
        this.pathlist.quecity,//上车城市
        this.pathlist.startAddress,//上车详细地址
        this.pathlist.adultNum,//大人数量
        this.pathlist.childNum,//小人数量
        this.pathlist.luggage,//包裹数量
        JSON.stringify(this.vehicledata),//汽车信息
        JSON.stringify(this.piaylist),//行程信息
        this.insuranceid,//保险id
        JSON.stringify(this.Selection),
      );
      if (data) {
        // let zonmni = Number(this.pricetyps) + Number(this.baomang);
        this.orderidlist = data;
        this.$router.push({
          path:
            "/orderlist_a/" +
            this.orderidlist +
            "/" +
            zonmni +
            "/" +
            this.tyslit
        });
      }
    }
  }
};
</script>

     
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
          <span class="font-16">订单详细</span>
        </div>

        <div class="Order_b">
          <div class="Order_b_zz">
            <div class="beijingtu Order_c font-14" :style="backgroundDiv">联系人信息</div>
            <div class="Order_d color-b">
              <ul>
                <li class="font-14">
                  <i>联系人</i>
                  <input
                    class="font-14 float_right Order_d_a color-b"
                    type="text"
                    placeholder="请输入联系人"
                    name
                  >
                </li>
                <li class="font-14">
                  <i>联系电话</i>
                  <input
                    class="font-14 float_right Order_d_a color-b"
                    type="text"
                    placeholder="请输入联系电话"
                    name
                  >
                </li>
                <li class="font-14">
                  <i>备注信息</i>
                  <input
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
              <div class="font-16 Order_d_b">常规路线</div>
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

            <div class="Trip_a Orderjia font-14 room_b">
              <dl class="float_left">房间</dl>
              <dl class="float_right" style="max-width:8rem;">
                <dd class="float_left" v-if="One!=0">单人房:{{One}}</dd>
                <dd class="float_left" v-if="two!=0">双人房:{{two}}</dd>
                <dd class="float_left" v-if="three!=0">三人房:{{three}}</dd>
                <dd class="float_left" v-if="four!=0">四人房:{{four}}</dd>
                <dd class="float_left" v-if="arrange!=0">配房:{{arrange}}</dd>
              </dl>
            </div>
            <!--保险选择-->

            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b">保险</div>
              <dl class="font-14">
                <dd
                  style="text-align: left;"
                  class="Short_distance_relay_e float_left Trip_b Short_distance_relay_b"
                >
                  <i class="Short_distance_relay_c"></i>新华保险（4到5天）新华保险（4到5天）
                </dd>
                <dd class="float_right color-h" style="text-align: left;">(保险说明)</dd>
                <dd class="float_left Trip_b Short_distance_relay_b" style="text-align: left;">
                  <i class="Short_distance_relay_c"></i>新华保险（4到5天）新华保险（4到5天）
                </dd>
                <dd class="float_right color-h" style="text-align: left;">(保险说明)</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="xinx font-14">
          <div class="float_left" style="margin-left:0.5rem;">出游人信息</div>
          <div class="float_right">
            <i>已选择5人</i>
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
            <span class="font-16">订单价格</span>
          </div>
          <div class="Trip">
            <div class="font-16 Order_d_b">常规路线</div>
            <div class="font-14 color-b" style="text-align: left!important;">
              <i class="color-b float_left Order_d_e beijingtu">
                <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
              </i>
              {{date}} 至 {{endtime}} ({{Routineroute.dayNum}}天)
            </div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">行程</dd>
                <dd class="float_right color-b whi_ez">{{Routineroute.title}}</dd>
                <dd class="float_left Trip_b" v-if="One!=0">单人房</dd>
                <dd class="float_right color-b whi_ez" v-if="One!=0">￥{{Price.oneCost}}*{{One}}</dd>
                <dd class="float_left Trip_b" v-if="two!=0">双人房</dd>
                <dd class="float_right color-b whi_ez" v-if="two!=0">￥{{Price.twoCost}}*{{two}}</dd>
                <dd class="float_left Trip_b" v-if="three!=0">三人房</dd>
                <dd
                  class="float_right color-b whi_ez"
                  v-if="three!=0"
                >￥{{Price.threeCost}}*{{three}}</dd>
                <dd class="float_left Trip_b" v-if="four!=0">四人房</dd>
                <dd class="float_right color-b whi_ez" v-if="four!=0">￥{{Price.fourCost}}*{{four}}</dd>
                <dd class="float_left Trip_b" v-if="arrange!=0">配房</dd>
                <dd
                  class="float_right color-b whi_ez"
                  v-if="arrange!=0"
                >￥{{Price.arrangeCost}}*{{arrange}}</dd>
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
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd
                  class="float_left Trip_b Short_distance_relay_b"
                  style="text-align: left;"
                >新华保险（4到5天）新华保险（4到5天）</dd>
                <dd class="float_right">￥15268</dd>
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
            <i class="font-20">{{pricetyps}}</i>
          </span>
        </div>
        <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g">确认订单</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/B/qrdd_biaoq_bg@2x.png") + ")"
      },
      date: this.$route.params.date, //出发时间
      endtime: "", //结束时间
      adult: this.$route.params.adult, //大人
      child: this.$route.params.child, //小孩
      One: this.$route.params.One, //单方
      two: this.$route.params.two, //双人房
      three: this.$route.params.three, //三人房
      four: this.$route.params.four, //四人房
      arrange: this.$route.params.arrange, //配房
      pricetyps: this.$route.params.pricetyps, //总价格
      dayNum: this.$route.params.dayNum, //形成天数
      endCityContent: this.$route.params.endCityContent //出发城市
    };
  },
  mounted() {
    this.expire();
    console.log(this.Price);
  },
  computed: {
    ...mapState({
      Routineroute: state => state.route.Routineroute,
      Price: state => state.route.Price
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
    }
  }
};
</script>

     
<template>
  <div class="index">
    <!-- 头部 -->
    <ezHeader></ezHeader>
    <div class="dingjia">
      <div class="a_bdengl border_c">
        <ul>
          <li class="float_left font-14">
            <i class="a_btou">
              <img :src="getProtsty.defaultPhoto">
            </i>
            <i class="denlu_jia">登陆/组册</i>
          </li>
          <li class="float_right a_bdengl_righ" onclick="window.history.go(-1)">
            <img src="../../assets/img/A/home_tanchu_close_icon@2x.png">
          </li>
        </ul>
      </div>

      <div class="b_xianm bus">
        <i class="b_xianm_a">
          <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
        </i>
        <i class="font-16 b_xianm_c">项目列项</i>
      </div>

      <div class="b_xianm">
        <ul class="font-12 b_xianm_b color-b">
          <li class="float_left">包车租车</li>
        </ul>
      </div>

      <div class="b_xianm bus">
        <i class="b_xianm_a">
          <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
        </i>
        <i class="font-16 b_xianm_c">热门城市</i>
      </div>

      <div class="b_xianm">
        <ul class="font-12 b_xianm_b color-b">
          <li class="float_left" v-for="(list,index) in hotlist" :key="index">{{list.cityName}}</li>
        </ul>
      </div>

      <div class="dian_jia_a">
        <div class="b_xianm dianh_a_a border_d">
          <div class="float_left">
            <i class="rex">
              <img src="../../assets/img/A/home_24h_icon@2x.png">
            </i>
            <br>
            <i class="font-12 float_left">服务热线</i>
          </div>
          <div class="float_left">
            <ul class="font-12 dianh_a">
              <li>
                <i class="dianh">
                  <img src="../../assets/img/A/home_phone_icon@2x.png">
                </i>
                <i>617-651-8888</i>
                <i>(美国)</i>
              </li>
              <li>
                <i class="dianh">
                  <img src="../../assets/img/A/home_phone_icon@2x.png">
                </i>
                <i>617-651-8888</i>
                <i>(美国)</i>
              </li>
            </ul>
          </div>
        </div>

        <div class="b_xianm">
          <ul class="font-14">
            <li class="border_d huan_b">
              <i class="float_left">{{yutye}}</i>
              <i class="float_right" @click="show = true">
                切换字体
                <i class="huan_a">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </i>
            </li>
            <li class="border_d huan_b">
              <i class="float_left">{{huodiyt}}</i>
              <i class="float_right" @click="showl = true">
                切换金钱
                <i class="huan_a">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        title="语言"
        :visible-item-count="3"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>

    <van-popup v-model="showl" position="bottom">
      <van-picker
        show-toolbar
        title="货币"
        :visible-item-count="3"
        :columns="huobityp"
        @cancel="showl=false"
        @onConfirm="showl=false"
      />
    </van-popup>
  </div>
</template>
<script>
import ezHeader from "@/components/header.vue";
import { mapState, mapMutations } from "vuex";
import {
  HotCityList,
  getLanguage,
  getProtocol,
  getCurrency
} from "@/utils/getData";

export default {
  name: "index",
  data() {
    return {
      hotlist: [], //热门城市
      getProtsty: {}, //基本参数，默认头像，网页图标
      show: false,
      showl: false,
      columns: [], //语言数组
      yuyan: [], //获取接口语言数组
      huobi: [], //货币
      huobityp: [],
      huodiyt:'',
    };
  },
  computed: {
    ...mapState(["languageid","currencyid"]),
    //语言名称
    yutye(){
      for (const list of this.yuyan) {
        if(list.languageid == this.languageid){
          return list.content;
        }
      }
    }
  },
  created() {
    this.HotCitysty(); //热门城市
    this.getLangsty(); //获取语言
    this.getProtocol(); //获取基本参数
    this.getCurtyp(); //获取货币
  },
  components: {
    ezHeader
  },
  methods: {
     ...mapMutations(["changeLanguage", "changeCurrency"]),
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
      this.show = false;
      this.changeLanguage(this.yuyan[index].languageid);
	},
    onCancel() {
      this.$toast("取消");
      this.show = false;
    },
    async HotCitysty() {
      let data = await HotCityList();
      if (data) {
        this.hotlist = data;
      }
    },
    //获取语言
    async getLangsty() {
      let data = await getLanguage();
      if (data) {
        this.yuyan = data;
        for (const list of this.yuyan) {
          this.columns.push(list.content);
        }
        console.log(this.columns);
      }
    },
    //获取货币
    async getCurtyp() {
      let data = await getCurrency();
      if (data) {
        this.huobi = data;
        for (const list of this.huobi) {
          this.huobityp.push(list.currency);
        }
        console.log(this.huobityp);
      }
    },
    async getProtocol() {
      let data = await getProtocol();
      if (data) {
        this.getProtsty = data;
      }
    }
  }
};
</script>


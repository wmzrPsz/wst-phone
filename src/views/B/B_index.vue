<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/head_fenlei_icon@2x.png">
      </i>
      <i class="he_t_baoc color">详情页</i>
      <i class="her_a_rigth float_right">
        <img src="../../assets/img/A/head_car_icon@2x.png">
      </i>
    </div>
    <div class="dingjia">
      <div class="baoc">
        <img src="../../assets/img/B/1.png">
      </div>

      <div class="bao_her">
        <div class="bao_her_a font-14 color-b">
          <ul>
            <li>
              <i class="color-d">包车租车</i>
              <i class="bao_her_b"></i>
            </li>
            <li>
              <a href="../C/C-1.html">
                <i>短程接送</i>
                <i></i>
              </a>
            </li>
            <li>
              <a href="../D/D1.html">
                <i>接送机</i>
                <i></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="bao_her_c font-14">
          <ul>
            <li @click="show4 = true">
              <i class="float_left">选择出发城市</i>
              <i class="float_right color-b">
                {{quecity}}
                <i class="bao_her_d">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </i>
            </li>
            <li>
              <i class="float_left">详细地址</i>
              <i class="float_right color-b">
                <input class="text_right" type="text" placeholder="填写详细地址" v-model="startAddress">
                <i class="bao_her_d">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </i>
            </li>

            <li class="bao_her_z">
              <i class="float_left">选择时间</i>
            </li>
            <div class="float_right color-b" style="width: 60%">
              <ul>
                <li>
                  <i class="bao_her_d fl">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                  <div class="start_date" @click="show = true">{{certValidDate}}</div>
                </li>
                <li>
                  <i class="bao_her_d fl">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                  <div class="start_date" @click="show1 = true">{{birthday}}</div>
                </li>
              </ul>
            </div>
            <li style="clear: both;">
              <i class="float_left" @click="show2 = true">
                人数
                <i class="bao_her_e">{{people}}</i>
              </i>
              <i class="float_right" @click="show3 = true">
                行李箱
                <i class="bao_her_e"></i>
                {{luggage}}
              </i>
            </li>
          </ul>
        </div>
        <button class="color background-d font-14 xiayi" @click="nepx()">共{{datet}}天下一步</button>
      </div>

      <div class="bao_zon">
        <div class="bao_zon_a">
          <img src="../../assets/img/A/home_lvdz_bg@2x.png">
          <li class="bao_zon_b">
            <i class="font-18">推荐行程</i>
            <i class="font-12 color-b" style="margin-left: 0.5rem;">RECOMMMRRE</i>
          </li>
        </div>

        <div class="bao_her_a font-14 color-b" style="margin-top: 0px!important">
          <ul>
            <li>
              <i class="color-d">美国西部</i>
              <i class="bao_her_b"></i>
            </li>
            <li>
              <i>二级分类</i>
              <i></i>
            </li>
            <li>
              <i>三级分类</i>
              <i></i>
            </li>
          </ul>
        </div>

        <div class="bao_zon_zz">
          <div class="bao_zon_c">
            <div class="float_left gongs_b">
              <img style="width: 100%" src="../../assets/img/A/2.png">
            </div>
            <div class="float_right gongs_c">
              <ul>
                <li
                  class="font-14 gongs_e"
                  style="margin-top: 0.1rem"
                >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b bao_zon_e">
                  <i class="bao_zon_d">
                    <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                  </i>
                  <i>6个目的地，7个旅游景点</i>
                </li>
                <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                </li>
              </ul>
            </div>
          </div>

          <div class="bao_zon_c">
            <div class="float_left gongs_b">
              <img style="width: 100%" src="../../assets/img/A/3.png">
            </div>
            <div class="float_right gongs_c">
              <ul>
                <li
                  class="font-14 gongs_e"
                  style="margin-top: 0.1rem"
                >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b bao_zon_e">
                  <i class="bao_zon_d">
                    <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                  </i>
                  <i>6个目的地，7个旅游景点</i>
                </li>
                <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                </li>
              </ul>
            </div>
          </div>

          <div class="bao_zon_c">
            <div class="float_left gongs_b">
              <img style="width: 100%" src="../../assets/img/A/2.png">
            </div>
            <div class="float_right gongs_c">
              <ul>
                <li
                  class="font-14 gongs_e"
                  style="margin-top: 0.1rem"
                >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b bao_zon_e">
                  <i class="bao_zon_d">
                    <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                  </i>
                  <i>6个目的地，7个旅游景点</i>
                </li>
                <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                  <i class="b_zong">
                    <i class="bao_zon_f">
                      <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                    </i>
                    <i class="float_left">2017</i>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--客服-->
        <div class="kef_a" style="margin-top: 0.5rem;">
          <div class="float_left kef">
            <img style="width: 100% ;" src="../../assets/img/B/2.png">
          </div>
          <div class="float_right kef_b">
            <div class="kef_c" :style="backgroundDiv">
              <i class="float_left font-14 color">最新定制案例</i>
              <i class="float_right font-12 color">MOER>></i>
            </div>
            <div class="kef_d">
              <div class="float_left kef_d_a">
                <img style="width: 100%" src="../../assets/img/B/3.png">
              </div>
              <div class="float_right kef_d_b">
                <ul>
                  <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                  <li class="font-12 color-b float_right" style="margin-top: 0.1rem">1分钟前</li>
                </ul>
              </div>
            </div>

            <div class="kef_d">
              <div class="float_left kef_d_a">
                <img style="width: 100%" src="../../assets/img/B/4.png">
              </div>
              <div class="float_right kef_d_b">
                <ul>
                  <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                  <li class="font-12 color-b float_right" style="margin-top: 0.1rem">1分钟前</li>
                </ul>
              </div>
            </div>

            <div class="kef_d">
              <div class="float_left kef_d_a">
                <img style="width: 100%" src="../../assets/img/B/5.png">
              </div>
              <div class="float_right kef_d_b">
                <ul>
                  <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                  <li class="font-12 color-b float_right" style="margin-top: 0.1rem">1分钟前</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!--阳光质询-->
        <div class="yang color-b">
          <ul>
            <li style="margin-left: 1%">
              <i class="yang_a">
                <img src="../../assets/img/A/home_dibu_ygzx_icon@2x.png">
              </i>
              <br>
              <i class="font-12">阳光质询</i>
            </li>
            <li>
              <i class="yang_a">
                <img src="../../assets/img/A/home_dibu_jm_icon@2x.png">
              </i>
              <br>
              <i class="font-12">加盟</i>
            </li>
            <li>
              <i class="yang_a">
                <img src="../../assets/img/A/home_dibu_fenx_icon@2x.png">
              </i>
              <br>
              <i class="font-12">分销</i>
            </li>
            <li>
              <i class="yang_a">
                <img src="../../assets/img/A/home_dibu_help_icon@2x.png">
              </i>
              <br>
              <i class="font-12">帮助</i>
            </li>
            <li style="margin-right: 1%">
              <i class="yang_a">
                <img src="../../assets/img/A/home_dibu_tyfk_icon@2x.png">
              </i>
              <br>
              <i class="font-12">体验反馈</i>
            </li>
          </ul>
        </div>

        <!--选择阳光-->
        <div class="color-b xuan_yan border_a font-12">
          <div class="xuan_yan_b">
            <img style="width: 100%;" src="../../assets/img/B/6.png">
          </div>
          <ul>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_ygbz_icon@2x.png">
              </i>
              <br>
              <i>阳光保证</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_cpff_icon@2x.png">
              </i>
              <br>
              <i>产品丰富</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_zyfw_icon@2x.png">
              </i>
              <br>
              <i>卓越服务</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_ygbz_icon@2x.png">
              </i>
              <br>
              <i>价格预订保障</i>
            </li>
          </ul>

          <div class="yang color-b xuan_yan_w">
            <ul>
              <li>
                <i class="xuan_yan_a">
                  <img src="../../assets/img/A/home_jdsjbz_icon@2x.png">
                </i>
                <br>
                <i class="font-12">酒店升级保障</i>
              </li>
              <li>
                <i class="xuan_yan_a">
                  <img src="../../assets/img/A/home_dibu_hbywbz_icon@2x.png">
                </i>
                <br>
                <i class="font-12">航班延误保障</i>
              </li>
              <li>
                <i class="xuan_yan_a">
                  <img src="../../assets/img/A/home_dibu_tsyytdbz_icon@2x.png">
                </i>
                <br>
                <i class="font-12">特殊原因退订保障</i>
              </li>
              <li>
                <i class="xuan_yan_a">
                  <img src="../../assets/img/A/home_dibu_bkkltdbz_icon@2x.png">
                </i>
                <br>
                <i class="font-12">不可抗力退订保障</i>
              </li>
              <li>
                <i class="xuan_yan_a">
                  <img src="../../assets/img/A/home_dibu_zdzhbz_icon@2x.png">
                </i>
                <br>
                <i class="font-12">重大灾害保障</i>
              </li>
            </ul>
          </div>
        </div>

        <!--合作伙伴-->
        <p class="font-16 hez_h">合作伙伴</p>
        <div class="hez_h_a">
          <img style="width: 100%" src="../../assets/img/A/home_ydjgbz_icon@2x.png">
        </div>
        <div class="zinan">
          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>

          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">用户中心</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>

          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">帮助中心</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="wan_zo">
          <div class="font-12 wan">
            <ul>
              <li class="wan_a">
                <img src="../../assets/img/A/sign_logo_icon@2x.png">
              </li>
              <li class="wan_b">
                <i>万事同美国</i>
                <i>eaiusa.com</i>
              </li>
            </ul>
          </div>
          <div class="wan_c font-12">
            <i>
              <img src="../../assets/img/B/7.png">
            </i>
            <i class="wan_d">关注微信公众号</i>
          </div>
        </div>

        <div class="wan_e">
          <img style="width: 100%;" src="../../assets/img/B/8.png">
        </div>
      </div>
      <p class="dib_w font-12 color-b">万事同美国eaiusa.com万事同美国eaiusa.com万事同美国eaiusa.com</p>
    </div>
    <!--出发时间-->
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" @cancel="quxiao" @confirm="queding"/>
    </van-popup>
    <!--结束时间-->
    <van-popup v-model="show1" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" @cancel="quxiao" @confirm="queding_a"/>
    </van-popup>
    <!--选择人数-->
    <van-popup v-model="show2" position="bottom">
      <van-picker
        show-toolbar
        title="选择人数"
        :columns="columns"
        @cancel="quxiao"
        @confirm="onConfirm"
      />
    </van-popup>
    <!--选择行李-->
    <van-popup v-model="show3" position="bottom">
      <van-picker
        show-toolbar
        title="选择行李"
        :columns="columns"
        @cancel="quxiao"
        @confirm="onConfirm_a"
      />
    </van-popup>
    <!--选择出发城市-->
    <van-popup v-model="show4" position="bottom">
      <van-picker
        show-toolbar
        title="选择城市"
        :columns="citychen"
        @cancel="quxiao"
        @confirm="onConfirm_b"
      />
    </van-popup>
  </div>
</template>
<style lang="less">
.start_date {
  widows: 4rem;
  float: right;
  text-align: right;
}
.text_right {
  text-align: right;
}
</style>

<script>
import { chengshi } from "@/utils/getData";
import { mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/A/home_dingzhi_bg@2x.png") + ")"
      },
      columns: [],
      certValidDate: "", //出发时间
      birthday: "", //结束时间
      year: "", //年
      month: "", //月
      day: "", //日
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      currentDate: new Date(),
      people: 1, //人数
      luggage: 0, //行李
      dantime: "",
      citylist: "", //城市列表
      citychen: [],
      quecity: "", //确定城市
      startAddress: "", //详细地址
      cityid:'',//城市id
    };
  },
  //计算属性
  computed: {
    //天数
    datet() {
      let tate =
        (new Date(this.birthday).getTime() -
          new Date(this.certValidDate).getTime()) /
          86400000 +
        1;
      return tate;
    }
  },
  created() {
    this.year = this.currentDate.getFullYear(); //年
    this.month = this.currentDate.getMonth() + 1; //月
    this.day = this.currentDate.getDate(); //日
    this.dantime = this.year + "-" + this.month + "-" + this.day;
    this.certValidDate = this.year + "-" + this.month + "-" + this.day;
    this.birthday = this.year + "-" + this.month + "-" + this.day;
  },
  mounted() {
    this.chuanjian();
    this.city();
  },
  methods: {
    ...mapMutations("route", ["rebcar","piaylist"]),
    onChange(picker, value, index) {
      this.quecity = value;
    },
    onConfirm(value, index) {
      this.people = value;
      this.show2 = false;
    },
    onConfirm_a(value, index) {
      this.luggage = value;
      this.show3 = false;
    },
    onConfirm_b(value, index) {
      this.quecity = value;
      this.show4 = false;
      //获取选择城市的id
      for(const test of this.citylist){
        if(test.cityName==this.quecity){
          this.cityid=test.cityid;
        }
      }
    },
    quxiao() {
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
    },
    //确定获取出发时间
    queding() {
      this.year = this.currentDate.getFullYear(); //年
      this.month = this.currentDate.getMonth() + 1; //月
      this.day = this.currentDate.getDate(); //日
      let cer = this.year + "-" + this.month + "-" + this.day;
      if (new Date(this.dantime).getTime() <= new Date(cer).getTime()) {
        this.certValidDate = this.year + "-" + this.month + "-" + this.day;
        this.show = false;
      } else if (new Date(this.dantime).getTime() > new Date(cer).getTime()) {
        this.$toast("请选择正确时间");
      }
    },
    //确定结束时间
    queding_a() {
      this.year = this.currentDate.getFullYear(); //年
      this.month = this.currentDate.getMonth() + 1; //月
      this.day = this.currentDate.getDate(); //日
      let birslit = this.year + "-" + this.month + "-" + this.day;
      if (new Date(birslit).getTime() >= new Date(this.certValidDate)) {
        this.birthday = this.year + "-" + this.month + "-" + this.day;
        this.show1 = false;
      } else if (new Date(birslit).getTime() < new Date(this.certValidDate)) {
        this.$toast("请选择正确时间");
      }
    },
    //创建人数和行李数据
    chuanjian: function() {
      for (let i = 1; i <= 100; i++) {
        this.columns.push(i);
      }
    },
    //获取城市接口
    async city() {
      let data = await chengshi();
      if (data) {
        this.citylist = data;

        let img = [];
        for (const test of this.citylist) {
          img.push(test.cityName);
        }
        this.citychen = img;
      }
    },
    //下一步
    nepx: function() {
      if (this.quecity == 0) {
        this.$toast("选择出发城市");
        return;
      }
      if (this.startAddress == 0) {
        this.$toast("输入详细地址");
        return;
      }
      this.$router.push({
        path: "/B_rent"
      });
      let pathlist = {
        quecity: this.quecity,
        startAddress: this.startAddress,
        certValidDate: this.certValidDate,
        birthday: this.birthday,
        people: this.people,
        luggage: this.luggage,
        datet: this.datet,
        cityid:this.cityid,
      };
      this.rebcar(pathlist);
      let piaylist=[];
      this.piaylist(piaylist);
    }
  }
};
</script>
<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">个人中心</i>
    </div>
    <div class="dingjia">
      <div class="centrality_zz">
        <div class="centrality_e font-14">
          <ul>
            <input type="file" id="img" accept="image/*" v-show @change="showActionSheet">
            <label for="img">
              <li>
                用户头像
                <span class="float_right">
                  <i class="float_left centrality_e_b_gai beijingtu">
                    <img :src="zhiliao.photo">
                  </i>
                  <i class="float_left centrality_e_a beijingtu">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </label>
            <li>
              手机号
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.phone}}</i>
              </span>
            </li>

            <li>
              邮箱
              <span class="float_right">
                <i class="float_left centrality_e_b color-b">绑定邮箱</i>
              </span>
            </li>

            <li>
              昵称
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.nickName}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>

            <li>
              性别
              <span class="float_right" @click="show = true">
                <i class="float_left centrality_e_b">{{zhiliao.sex | sexVc}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>

            <li>
              我的地址
              <span class="float_right" @click="show1 = true">
                <i class="float_left centrality_e_b">{{Countrytpy}}-{{cityid}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--男女-->
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange" :visible-item-count="3"/>
    </van-popup>
    <!--国家城市-->
    <van-popup v-model="show1" position="bottom">
      <van-picker :columns="columns1" @change="onChange1" :visible-item-count="3"/>
    </van-popup>
  </div>
</template>
<script>
import {
  Material, //个人质料
  imgUp,
  xuigai, //修改
  Country //城市接口
} from "@/utils/getData";
var citys = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};
export default {
  name: "index",
  data() {
    return {
      zhiliao: "", //个人中心质料
      show: false,
      show1: false,
      trt: "你好",
      columns: ["男", "女"],
      imgulp: "",
      columns1: [{}, {}],
      guotype: [], //国家列表
      citys: {}, //国家
      moren: "", //一开始显示第一个国家的城市
    };
  },
  created() {
    this.Material();
    this.guojia(); //国家
    //  console.log(citys);
  },
  components: {},
  filters: {
    sexVc: function(value) {
      if (value == 1) {
        return "男";
      }
      return "女";
    }
  },
  computed: {
    //城市
    cityid() {
      for (const list of this.guotype) {
        if (list.cityList) {
          for (const terpy of list.cityList) {
            if (terpy.cityid == this.zhiliao.cityid) {
              return terpy.cityName;
            }
          }
        }
      }
    },
    //国家
    Countrytpy() {
      for (const list of this.guotype) {
        if (list.countryid == this.zhiliao.countryid) {
          return list.countryName;
        }
      }
    }
  },
  methods: {
    //个人质料
    async Material() {
      let data = await Material();
      if (data) {
        this.zhiliao = data;
      }
    },
    //
    //上传头像照片
    async showActionSheet() {
      let url = await imgUp();
      if (url) {
        this.imgulp = url;
        this.$set(this.zhiliao, "photo", this.imgulp);
        this.xumodify();
      }
    },
    //修改
    async xumodify() {
      let data = await xuigai(
        this.zhiliao.memberType,
        this.zhiliao.photo,
        this.zhiliao.nickName,
        this.zhiliao.phone,
        this.zhiliao.countryid,
        this.zhiliao.cityid,
        this.zhiliao.address,
        this.zhiliao.birthday,
        this.zhiliao.sex
      );
      if (data) {
        this.$toast("修改成功");
      }
    },
    onChange(picker, value, index) {
      this.$set(this.zhiliao, "sex", index + 1);
      this.xumodify();
    },
    //国家修改
    onChange1(picker, values, index) {
      let countrtyp={};//国家
      let cityidtyp={};//城市
      picker.setColumnValues(1, this.citys[values[0]]);
       this.countrtyp = values[0];
       this.cityidtyp = values[1];
       //国家
      for (const list of this.guotype) {
        if(list.cityList){
          for(const tery of list.cityList){
          if (tery.cityName == this.cityidtyp) {
         this.$set(this.zhiliao, "cityid",tery.cityid);
        }
          }
        }
        if (list.countryName == this.countrtyp) {
         this.$set(this.zhiliao, "countryid",list.countryid);
        }
      }
    this.xumodify();
     this.$toast("修改成功");
    },
    //获取国家
    async guojia() {
      let data = await Country();
      if (data) {
        this.guotype = data;
        this.moren = this.guotype[0].countryName;
        console.log(this.guotype);
        for (const list of this.guotype) {
          let city_a = []; //城市
          if (list.cityList) {
            for (const tes of list.cityList) {
              city_a.push(tes.cityName);
            }
          }
          this.$set(this.citys, list.countryName, city_a);
        }
      }
      this.columns1[0].values = Object.keys(this.citys);
      this.columns1[1].values = this.citys[this.moren];
      console.log(this.citys);
      return this.citys;
    }
  }
};
</script>

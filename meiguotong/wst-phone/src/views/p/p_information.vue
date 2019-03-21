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
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.address}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!---->
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange" :visible-item-count="3"/>
    </van-popup>
  </div>
</template>
<script>
import {
  Material, //个人质料
  imgUp,
  xuigai //修改
} from "@/utils/getData";
export default {
  name: "index",
  data() {
    return {
      zhiliao: "", //个人中心质料
      show: false,
      columns: ["男", "女"],
      imgulp: ""
    };
  },
  created() {
    this.Material();
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
        this.zhiliao.sex,
      );
      if (data) {
        this.$toast("修改成功");
      }
    },
    onChange(picker, value, index) {
       this.$set(this.zhiliao, "sex", index+1);
       this.xumodify();
    },
  }
};
</script>

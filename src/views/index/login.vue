<template>
  <div class="login">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">登陆网站</i>
    </div>
    <div class="dingjia">
      <div class="di_s">
        <img src="../../assets/img/A/head_logo_icon@2x.png">
      </div>
      <p class="font-12 di_s_a">万事通美国</p>
      <p class="font-12 di_s_a">eauiys.com</p>

      <div class="di_s_b">
        <ul>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_sellphone.png">
            </i>
            <i class="color-e">
              <input
                class="di_s_b_d float_left"
                type="text"
                placeholder="输入手机号或邮箱号"
                v-model.trim="phone"
              >
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input
                class="di_s_b_d float_left"
                type="password"
                placeholder="请输入你的密码"
                v-model.trim="passWord"
              >
            </i>
          </li>

          <li class="font-14 wanl">
            <router-link to="/forget">
            <i class="float_left">忘了密码</i>
            </router-link>
            <router-link to="/register">
              <i class="float_right">立即注册</i>
            </router-link>
          </li>

          <button class="di_s_b_dengl color background-c font-16" @click="login">登陆</button>
        </ul>
      </div>

      <div class="di_s_b_xuanz font-14">
        <ul>
          <li>
            <i class="di_s_b_xuanz_a">
              <img src="../../assets/img/A/sign_wechat_logo@2x.png">
            </i>
            <i class>微信</i>
          </li>
          <li>
            <i class="di_s_b_xuanz_a">
              <img src="../../assets/img/A/sign_qq_logo@2x.png">
            </i>
            <i class>QQ</i>
          </li>
          <li>
            <i class="di_s_b_xuanz_a">
              <img src="../../assets/img/A/sign_weibo_logo@2x.png">
            </i>
            <i class>新浪微波</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "@/utils/getData";
import { isNull } from "@/utils/common";
import { mapState, mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      phone: "", //手机号码
      passWord: "" //密码
    };
  },
  computed: {
    ...mapState(["uid"])
  },
  created() {},
  mounted() {
    console.log(process.env);
    console.log(this.uid);
  },
  methods: {
    ...mapMutations(["addLogin", "removeLogin"]),
    //登录
    async login() {
			if(isNull(this.phone)){
        this.$toast("请输入账号");
        return;
			}
			if(isNull(this.passWord)){
        this.$toast("请输入密码");
        return;
			}
      let data = await login(this.phone, this.passWord);
      if (data) {
        this.addLogin(data);
        this.$router.push("/indehome");
      }
    }
  }
};
</script>

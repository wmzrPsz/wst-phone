<template>
  <div class="register_business">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">创建商家账号</i>
    </div>
    <div class="dingjia">
      <div class="gou font-12 border_e" style="padding-bottom: 0.8rem;">
        <div class="gou_a float_left">
          <i class="gou_b">
            <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
          </i>
          <i class="gou_c">填写基本信息</i>
        </div>

        <div class="gou_aa">
          <i class="gou_b">
            <img src="../../assets/img/A/sjzc_wancheng__gray_icon@2x.png">
          </i>
          <i class="gou_c color-b">完善信息</i>
        </div>

        <div class="gou_a float_right">
          <i class="gou_b">
            <img src="../../assets/img/A/sjzc_wancheng__gray_icon@2x.png">
          </i>
          <i class="gou_c color-b">信息提交成功</i>
        </div>
        <p class="gou_xian"></p>
      </div>

      <div class="hi_a font-16">
        <ul>
          <li @click="typeClick(1)" :class="[type==1?'color-c souji':'youxian']">
            手机注册
            <i class="hi_a_a background-c" v-if="type==1"></i>
          </li>
          <li @click="typeClick(2)" :class="[type==2?'color-c souji':'youxian']">
            邮箱注册
            <i class="hi_a_a background-c" v-if="type==2"></i>
          </li>
        </ul>
      </div>

      <!--邮箱登陆-->
      <div class="di_s_b">
        <ul>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_email_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d sushou float_left" type="text" placeholder="请输入手机或邮箱号" v-model="mobile">
            </i>
            <i class="float_right sushou_a">
              <button class="color background-c font-14">获取验证码</button>
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_code_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="text" placeholder="请输入验证码">
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="password" placeholder="请输入密码">
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="text" placeholder="请确认密码">
            </i>
          </li>

          <li class="font-12 wanl">
            <div class="float_left toyi_a">
              <i class="toyi">
                <img src="../../assets/img/A/home_choice_unche@2x.png">
              </i>
              <i class="toyi yinc">
                <img src="../../assets/img/A/home_choice_check@2x.png">
              </i>
            </div>
            <i class="float_left">
              同意
              <a class="color-c">《万事通》</a>商家账号使用合同
            </i>
          </li>
        </ul>
      </div>

      <button class="di_s_b_dengl color background-c font-16" @click="registerbusiness">下一步</button>
    </div>
  </div>
</template>
<script>
import { isNull } from "@/utils/common";
export default {
  name: "register_business",
  data() {
    return {
      type: 1,
      mobile:'',//手机号或邮箱号
    };
  },
  methods: {
    typeClick(index) {
      this.type = index;
    },
    async registerbusiness(){
     if(isNull(this.mobile)){
          this.$toast("请输入电话或邮箱号");
          return;
     }
    }
  }
};
</script>
<template>
  <div class="forget">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">忘记密码</i>
    </div>
    <div class="dingjia">
      <p class="font-20 hi">Hi，欢迎加入</p>

      <div class="di_s_b">
        <ul>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_email_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="text" placeholder="请输入手机号或邮箱号" v-model.trim="moib">
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_code_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d sushou float_left" type="text" placeholder="请输入验证码" v-model.trim="smsCo">
            </i>
            <i class="float_right sushou_a">
              <button
                class="color background-c font-14"
                @click="getAuthCode"
                v-if="sendAuthCode==1"
              >获取验证码</button>
              <button
                class="color background-c font-14"
                @click="getAuthCode"
                v-if="sendAuthCode==2"
              >{{auth_time}}</button>
            </i>
          </li>

          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="password" placeholder="请输入你的密码" v-model.trim="passWord">
            </i>
          </li>
        </ul>
      </div>

      <button class="di_s_b_dengl color background-c font-16" @click="forgettesr">重置密码</button>
      <button class="di_s_b_dengl di_s_b_dengl_a color-c font-16" onclick="window.history.go(-1)">已有账号立即登陆</button>
    </div>
  </div>
</template>
<script>
import { fordet } from "@/utils/getData";
import { isNull } from "@/utils/common";
import { sendSms } from "@/utils/getData"; //邮箱短信
import { isPoneAvailable } from "@/utils/common";
import { mapMutations } from "vuex";
export default {
  name: "forget",
  data() {
    return {
         moib:'',
         smsCo:'',
         passWord:'',
         type:'1',
         sendAuthCode:'1'
    };
  },
  methods:{
   async forgettesr(){
    //邮箱忘记密码
  //  if(isPoneAvailable(this.moib)){
  //   this.type=2;
  //  }
     if(isNull(this.moib)){
        this.$toast("请输入手机号或邮箱号");
        return;
      }
    if(isNull(this.smsCo)){
        this.$toast("请输入验证码");
        return;
      }
      if(isNull(this.passWord)){
        this.$toast("请设置密码");
        return;
      }
     let data = await fordet(
       this.type,//判断1是手机2是邮箱
       this.moib,//账号
       this.smsCo,//验证码
       this.passWord,//密码
     );
    if (data) {
          this.$toast("重置密码成功");
        }
  },
  //获得验证码
  async getAuthCode() {
        //获取短信
        if (isNull(this.moib)) {
          this.$toast("请输入手机号码或邮箱号");
          return;
        }
        let data = await sendSms(this.moib);
        if(data){
        this.sendAuthCode = 2;
        //设置倒计时秒
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode = 1;
            clearInterval(auth_timetimer);
          }
        }, 1000);
        }
  }
  }
};
</script>
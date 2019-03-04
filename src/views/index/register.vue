<template>
  <div class="register">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">注册</i>
    </div>
    <div class="dingjia">
      <p class="font-20 hi">Hi，欢迎加入</p>
      <div class="hi_a font-16">
        <ul>
          <li @click="typeClick(1)" :class="[type==1?'color-c souji':'youxian']" >手机注册
            <i class="hi_a_a background-c" v-if="type==1"></i>
          </li>
          <li @click="typeClick(2)" :class="[type==2?'color-c souji':'youxian']" >邮箱注册
            <i class="hi_a_a background-c" v-if="type==2"></i>
          </li>
        </ul>
      </div>
      <div class="di_s_b di_s_b_y_a" style="margin-top:0.5rem!important" v-if="type==1">
         <ul>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_sellphone.png">
            </i>
            <i class="float_left sushou_b">
              <select class="color-b" v-model="area">
                <option value="86">+86</option>
                <option value="89">+89</option>
                <option value="88">+88</option>
              </select>
            </i>
            <i class="color-e">
              <input class="di_s_b_d sushou float_left" type="text" placeholder="请输入手机号" v-model.trim="mobile">
            </i>
          </li>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_code_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d sushou float_left" type="text" placeholder="请输入验证码" v-model.trim="smsCode">
            </i>
            <i class="float_right sushou_a">
              <button v-show="sendAuthCode" class="color background-c font-14" @click="getAuthCode" v-if="sendAuthCode==1">获取验证码</button>
              <button v-show="sendAuthCode" class="color background-c font-14" @click="getAuthCode" v-if="sendAuthCode==2">{{auth_time}}</button>
            </i>
          </li>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="Password" placeholder="请设计你的密码" v-model.trim="passWord">
            </i>
          </li>
          <li class="font-12 wanl">
            <i class="float_left">注册即表示你同意</i>
            <a class="float_left color-c">《万事通用户协议》</a>
          </li>
        </ul>
      </div>
      <!--邮箱登陆-->
      <div class="di_s_b di_s_b_y" style="margin-top:0.5rem!important" v-if="type==2">
        <ul>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_email_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="text" placeholder="请输入注册邮箱号" v-model="email">
            </i>
          </li>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/sign_code_icon@2x.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d sushou float_left" type="text" placeholder="请输入验证码" v-model.trim="smsCode">
            </i>
            <i class="float_right sushou_a">
              <button v-show="sendAuthCode" class="color background-c font-14" @click="getAuthCode" v-if="sendAuthCode==1">获取验证码</button>
              <button v-show="sendAuthCode" class="color background-c font-14" @click="getAuthCode" v-if="sendAuthCode==2">{{auth_time}}</button>
            </i>
          </li>
          <li class="border_b font-14">
            <i class="di_s_b_c float_left">
              <img src="../../assets/img/A/ic_lock.png">
            </i>
            <i class="color-e">
              <input class="di_s_b_d float_left" type="Password" placeholder="请设计你的密码" v-model.trim="passWord">
            </i>
          </li>
          <li class="font-12 wanl">
            <i class="float_left">注册即表示你同意</i>
            <a class="float_left color-c">《万事通用户协议》</a>
          </li>
        </ul>
      </div>
      <button class="di_s_b_dengl color background-c font-16" @click="reg">注册</button>
      <button class="di_s_b_dengl di_s_b_dengl_a color-c font-16" @click="long">已有账号立即登陆</button>
      <a class="font-12 color-b chuanj">创建商家用户></a>
    </div>
  </div>
</template>
<script>
import { register } from "@/utils/getData";//注册
import {sendSms} from "@/utils/getData";//邮箱短信
import { isNull } from "@/utils/common";
import { mapMutations} from "vuex";
export default {
  name: "register",
  data() {
    return {
      type:1,
      mobile:'',
      email:'',
      smsCode:'',
      passWord:'',
      area:'86',
      sendAuthCode:1,//获取验证码
      auth_time:'',//倒计时
    };
  },
  methods: {
     ...mapMutations(["addLogin"]),
      typeClick(index){
        this.type = index;
      },
      //立即登陆
      long:function(){
       this.$router.go("-1");
      },
      async reg(){
       //手机号码注册
       if(this.type==1){
			if(isNull(this.mobile)){
        this.$toast("请输入电话号码");
        return;
			}
			if(isNull(this.smsCode)){
        this.$toast("请输入验证码");
        return;
      }
      if(isNull(this.passWord)){
        this.$toast("请输入密码")
      }
      this.email="";
      let data = await register(this.type,this.mobile,this.email,this.smsCode,this.passWord,this.area);
      if (data) {
        this.$toast("注册成功")
        this.$router.go("-1");
      }
     } 
     //邮箱注册
      if(this.type==2){
			if(isNull(this.email)){
        this.$toast("请输入邮箱号码");
        return;
			}
			if(isNull(this.smsCode)){
        this.$toast("请输入验证码");
        return;
      }
      if(isNull(this.passWord)){
        this.$toast("请输入密码")
        return;
      }
      this.mobile='';
      let data = await register(this.type,this.mobile,this.email,this.smsCode,this.passWord,this.area);
      if (data) {
        this.$toast("注册成功")
        this.$router.go("-1");
      }
     } 
      },
      //点击获得验证码
        async getAuthCode(){
        if(this.type==1){//获取短信
       	if(isNull(this.mobile)){
        this.$toast("请输入电话号码");
        return;
         }
        this.email='';
      let data = await sendSms(this.mobile,this.email,this.type);
       this.sendAuthCode = 2;
     //设置倒计时秒
      this.auth_time = 60;
      var auth_timetimer = setInterval(()=>{
        this.auth_time--;
        if(this.auth_time<=0){
          this.sendAuthCode = 1;
          clearInterval(auth_timetimer);
        }
      }, 1000); 
        }  

        if(this.type==2){//获取邮箱短信
       	if(isNull(this.email)){
        this.$toast("请输入邮箱号");
        return;
         }
      this.mobile='';
      let data = await sendSms(this.mobile,this.email,this.type);
       this.sendAuthCode = 2;
     //设置倒计时秒
      this.auth_time = 60;
      var auth_timetimer = setInterval(()=>{
        this.auth_time--;
        if(this.auth_time<=0){
          this.sendAuthCode = 1;
          clearInterval(auth_timetimer);
        }
      }, 1000); 
        }  
    },
      
  },
  
};

</script>

<style lang="less" scoped>

</style>



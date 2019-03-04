<template>
     <div class="forget">
      <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"><img src="../../assets/img/A/back_icon@2x.png"></i>
      <i class="her_a_zong color float_zhong">忘记密码</i>
      </div>
       <div class="dingjia">
      <p class="font-20 hi">Hi，欢迎加入</p>
     
    

      <div class="di_s_b">
          <ul>
               <li class="border_b font-14 ">
                    <i class="di_s_b_c float_left"><img src="../../assets/img/A/sign_email_icon@2x.png"></i>
                    <i class="color-e"><input class="di_s_b_d  float_left" type="text" value="请输入注册邮箱号"></i>
               </li>


               <li class="border_b font-14 ">
                    <i class="di_s_b_c float_left"><img src="../../assets/img/A/sign_code_icon@2x.png"></i>
                    <i class="color-e"><input class="di_s_b_d sushou float_left" type="text" value="请输入验证码"></i>
                    <i class="float_right sushou_a"><button class="color background-c font-14">获取验证码</button></i>
               </li>

               <li class="border_b font-14 ">
                    <i class="di_s_b_c float_left"><img src="../../assets/img/A/ic_lock.png"></i>
                    <i class="color-e"><input class="di_s_b_d float_left" type="text" value="请设计你的密码"></i>
               </li>
          </ul>
     </div>

       <button class="di_s_b_dengl color background-c font-16">重置密码</button>
       <button class="di_s_b_dengl di_s_b_dengl_a color-c  font-16">已有账号立即登陆</button>
     </div>
     </div>
</template>
<script>
export default {
  name: "forget",
  data() {
    return {
    }
  }
}
</script>
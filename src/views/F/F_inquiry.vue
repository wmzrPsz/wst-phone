<template>
	<div class="index">
		<div class="her_a font-20 background-a">
      <i class="her_a_left float_left"  onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
      <i class="her_a_zong color float_zhong">问题资讯</i>
     </div>
 <!--玩家信息评价-->
   <div class="inqui">
   	  <div class="problem font-14">
   	  	  <textarea  placeholder="资讯问题详细" v-model="content"></textarea>
   	  	  <input type="text" placeholder="姓名" name="" v-model="name">
   	  	  <input type="number" placeholder="电话" name="" v-model="mobile">
   	  </div>
		   <button class="color background-d font-14 xiayi quedingty" @click="quedingclick()">确定</button>
   </div>
	</div>
</template>
<style lang="less">
.inqui{
 position: fixed;
   top: 2rem;
   bottom:2.5rem;
	height: auto;
	overflow: hidden;
}
.quedingty{
	margin-top: 3rem!important;
}
</style>
<script>
import {saveConsultUrl} from "@/utils/getData";
import { isNull } from "@/utils/common";
export default {
	name:'index',
	data(){
		return{
			proType:4,//1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.酒店10.保险11.旅游定制12导游'
			content:'',//内容
			name:'',//姓名
			mobile:'',//电话
		}
	},
	methods:{
		quedingclick :function(){
			if(isNull(this.content)){
        this.$toast("请输入内容");
        return;
			}
			if(isNull(this.name)){
        this.$toast("请输入姓名");
        return;
			}
			if(this.mobile.length!=11){
        this.$toast("请输入正确电话");
        return;
			}
      this.stylyp();
		},
		async stylyp(){
      let data = await saveConsultUrl(
			this.$route.params.routeid,
			this.proType,
			this.content,
			this.name,
			this.mobile,
		);
		if(data){
		 window.history.go(-1)
		}
		}
	}
}
</script>


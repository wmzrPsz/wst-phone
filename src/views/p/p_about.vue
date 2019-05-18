<template>
	<div class="index">
		<div class="her_a font-20 background-a">
			<i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
			<i class="he_t_baoc color">关于我们</i>
		</div>
		<div class="dingjia">
			<div class="centrality_c font-14" style="width: 95%;margin:auto;">
				<ul>
					<li @click="dianclick()">公司概括<i class="beijingtu"><img src="../../assets/img/A/more_icon@2x.png"></i></li>
					<li @click="dianclick_a()">发展历史<i class="beijingtu"><img src="../../assets/img/A/more_icon@2x.png"></i></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:"index",
	data(){
     return{

	 }
	},
	methods:{
		//公司
		dianclick(){
		 this.$router.push({
			 path:"/p_about_a/"+"1"
		 })
		},
		//发展历史
		dianclick_a(){
		 this.$router.push({
			 path:"/p_about_a/"+"2"
		 })
		},
	}
}
</script>

<template>
	<div class="indexlis">
		<div class="her_a font-20 background-a">
			<i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
			<i class="her_a_zong color float_zhong">确认订单</i>

		</div>
		<div class="dingjia">
			<div class="Order">
				<div class="gou font-12">
					<div class="gou_a float_left">
						<i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng_icon@2x.png"></i>
						<i class="gou_c">确认订单</i>
					</div>

					<div class="gou_aa ">
						<i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng_icon@2x.png"></i>
						<i class="gou_c">确认付款</i>
					</div>

					<div class="gou_a float_right">
						<i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng_icon@2x.png"></i>
						<i class="gou_c color-b">完成订单</i>
					</div>
					<p class="gou_xian"></p>
				</div>
			</div>
			<div class="Success">
				<div class="beijingtu Success_a"><img src="../../assets/img/A/zccg_succes_icon@2x.png"></div>
				<div class="font-16 color-d">预订行程成功</div>
				<div class="font-14 color-b">我们将安排好你的行程后已短信通知你</div>
			</div>
			<div class="Success_b">
				<button class="font-14 float_left background-d" @click="cakclick()">查看订单</button>
				<router-link to="/F_details">
				<button class="font-14 float_right Success_c">返回常规路线</button>
				</router-link>
			</div>
		</div>


	</div>
</template>
<style lang="less">
.indexlis{
	 position: fixed;
	height: auto;
	background-color:#F5F5F5;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
</style>
<script>
export default {
	name:'indexlis',
	data(){
		return{

		}
	},
	methods:{
		//查看详情
		cakclick:function(){
			this.$router.push({
				path:"/orderlist_b/"+this.$route.params.routeid,
			})
		},
	}
}
</script>


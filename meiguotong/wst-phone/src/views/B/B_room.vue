<template>
	<div class="index">
		<div class="her_a font-20 background-a">
			<i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
			<i class="her_a_zong color float_zhong">选择酒店</i>
		</div>
		<div class="dingjia">
			<div class="xijiu background-a color font-16">
				<ul>
					<li class="border_bai">酒店等级
						<span class="zinan_c">
							<i class=" zinan_b "><img src="../../assets/img/B/bjyw_open_icon@2x.png"></i>
							<i class=" zinan_b  yinc"><img src="../../assets/img/B/bjyw_open_icon@2x -1.png"></i>
						</span>
					</li>
					<li>房间类型
						<span class=" zinan_c">
							<i class=" zinan_b"><img src="../../assets/img/B/bjyw_open_icon@2x.png"></i>
							<i class=" zinan_b yinc"><img src="../../assets/img/B/bjyw_open_icon@2x -1.png"></i>
						</span>
					</li>
				</ul>
			</div>
			<div class="brijtan_a yinc"></div>
			<!--酒店等级-->
			<div class="ju_x yinc">
				<ul>
					<li class="font-14 color-b">
						<i class="float_left">五星酒店</i>
						<span class="jiud_x float_left">
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>

						</span>
						<i class="float_right jiud_x_a"><img src="../../assets/img/B/bjyw_check_icon@2x.png"></i>
					</li>
					<li class="font-14 color-b">
						<i class="float_left">四星酒店</i>
						<span class="jiud_x float_left">
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>

						</span>
						<i class="float_right jiud_x_a yinc"><img src="../../assets/img/B/bjyw_check_icon@2x.png"></i>
					</li>
					<li class="font-14 color-b">
						<i class="float_left">三星酒店</i>
						<span class="jiud_x float_left">
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
						</span>
						<i class="float_right jiud_x_a yinc"><img src="../../assets/img/B/bjyw_check_icon@2x.png"></i>
					</li>
					<li class="font-14 color-b">
						<i class="float_left">二星酒店</i>
						<span class="jiud_x float_left">
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
						</span>
						<i class="float_right jiud_x_a yinc"><img src="../../assets/img/B/bjyw_check_icon@2x.png"></i>
					</li>

					<li class="font-14 color-b">
						<i class="float_left">一星酒店</i>
						<span class="jiud_x float_left">
							<i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
						</span>
						<i class="float_right jiud_x_a yinc"><img src="../../assets/img/B/bjyw_check_icon@2x.png"></i>
					</li>
				</ul>
			</div>

			<!--房间类型-->
			<div class="famjian_zhong yinc">
				<div class="famjian ">
					<p class="color-b font-14 float_left famjian_b">单人房</p>
					<div class="ez-counter float_left ">
						<li class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
						<input class="counter-num float_left font-14" type="text" value="1" min="0">
						<li class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
					</div>
				</div>



				<div class="famjian ">
					<p class="color-b font-14 float_left famjian_b">双人房</p>
					<div class="ez-counter float_left ">
						<li class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
						<input class="counter-num float_left font-14" type="text" value="1" min="0">
						<li class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
					</div>
				</div>


				<div class="famjian ">
					<p class="color-b font-14 float_left famjian_b">三人房</p>
					<div class="ez-counter float_left ">
						<li class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
						<input class="counter-num float_left font-14" type="text" value="1" min="0">
						<li class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
					</div>
				</div>

				<div class="famjian ">
					<p class="color-b font-14 float_left famjian_b">四人房</p>
					<div class="ez-counter float_left ">
						<li class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
						<input class="counter-num float_left font-14" type="text" value="1" min="0">
						<li class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
					</div>
				</div>

			</div>

			<div class="jiud">
				<div class="float_left jiud_le"><img style="width: 100%" src="../../assets/img/B/3.png"></div>
				<div class="float_right jiud_ri">
					<div class="font-16 text_left" style="height: 0.7rem;">大理寺朵朵</div>
					<ul>
						<li class="font-12 color-b" style="margin-bottom: 0.5rem;margin-top:0.5rem;"><i class="jiud_ri_a float_left"><img
									src="../../assets/img/B/bjyw_3xing_icon@2x.png"></i><i class="text_left jiud_ri_b">三星酒店</i></li>
						<li class="font-12 color-b"><i class="jiud_ri_a float_left"><img
									src="../../assets/img/B/bczc_adress_icon@2x.png"></i><i
								class="jiud_ri_b text_left">古城海南外2号古城海南外2号古城海南外2号古城海南外2号古城海南外2号</i></li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>
<style lang="less">
.text_left{
	text-align: left;
}
</style>
<script>
export default {
	name:'index',
	data(){
		return{

		}
	},
    methods:{
		
	}	
}
</script>


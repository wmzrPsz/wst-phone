<template>
	<div>
		<div class="her_a font-20 background-a">
			<i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
			<i class="he_t_baoc color">关于我们</i>
		</div>
		<div class="dingjia">
			<div class="centrality_c font-14" style="width: 95%;margin:auto;">
				<ul>
					<router-link :to="{name:'p_about_a',params:{type:1}}">
					<li>公司概括<i class="beijingtu"><img src="../../assets/img/A/more_icon@2x.png"></i></li>
					</router-link>
					<router-link :to="{name:'p_about_a',params:{type:2}}">
					<li>发展历史<i class="beijingtu"><img src="../../assets/img/A/more_icon@2x.png"></i></li>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>
<template>
	<div>
	 
	  <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"><img src="../../assets/img/A/head_fenlei_icon@2x.png"></i>
      <i class="he_t_baoc color">邮轮</i>
       <i class="her_a_rigth float_right"><img src="../../assets/img/A/head_car_icon@2x.png"></i>
      </div>
      <div class="dingjia">

            <div class="baoc">
      	<img src="../../assets/img/B/1.png">
      </div>

      <div class="Route">
      	<div class="font-14 runtyp" style="font-weight: 600">油轮</div>
      	<div class="Route_b">
      		<i class="Route_a"><img src="../../assets/img/B/bczc_adress_icon@2x.png"></i>
      		<span class="font-14 color-b float_left">广州</span>
      		<input class="float_left font-14 color-b" type="text" placeholder="输入你要搜索的城市" name="" @keyup="sousuoclick($event)" v-model="searchContent">
      	</div>

      <div class="b_xianm" style="width:100%;margin:auto;">
      	<div class="font-14 runtyp">热们出发地：</div>
      	<ul class="font-12 b_xianm_b color-b">
      		<li class="float_left " v-for="(texs,index) in lisst" :key="index" @click="remenclick(texs)">{{texs.cityName}}</li>
      	</ul>
      </div>


      	<div class="business_affairs_c"  :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}">
      		<div class="font-20 color">BANNER</div>
      	</div>

      	 <div class="b_xianm" style="width:100%;margin:auto;margin-top: 0.5rem;">
      	<div class="font-14 runtyp">出发港口:</div>
      	<ul class="font-12 b_xianm_b color-b">
      		<li class="float_left " v-for="(gantex,index) in gankoulist" :key="index" @click="guankou(gantex)">{{gantex.name}}</li>
      	</ul>
      </div>

       <div class="b_xianm" style="width:100%;margin:auto;margin-top: 0.5rem;">
      	<div class="font-14 runtyp">邮轮航线:</div>
      	<ul class="font-12 b_xianm_b color-b">
      		<li class="float_left " v-for="(hantest,index) in hantyp" :key="index" @click="youlunclick(hantest)">{{hantest.name}}</li>
      	</ul>
      </div>
      <div class="b_xianm" style="width:100%;margin:auto; margin-top: 0.5rem;">
      	<div class="font-14 runtyp">邮轮公司:</div>
      	<ul class="font-12 b_xianm_b color-b">
      		<li class="float_left " v-for="(gonglist,index) in gongtest" :key="index" @click="gongclick(gonglist)">{{gonglist.name}}</li>
      	</ul>
      </div>


      <!--热门租车-->
       <div >
      	<div class="bao_zon_a">
      		<img src="../../assets/img/A/home_lvdz_bg@2x.png">
      		<li class="bao_zon_b">
      		<i class="font-18">推荐行程</i><i class="font-12 color-b" style="margin-left: 0.5rem;">RECOMMMRRE</i>
      	    </li>
      	</div>

      	 <div class="bao_her_a font-14 color-b" style="margin-top: 0px!important">
      	 	<ul>
      	 		<li><i class="color-d">美国西部</i><i class="bao_her_b"></i></li>
      	 		<li><i>二级分类</i><i></i></li>
      	 		<li><i>三级分类</i><i></i></li>
      	 	</ul>
      	 </div>
       	<div class="gameplayer_f_a gameplayer_f_aa" style="width: 100%">
     		<ul>
     			<li>
     				<span><img src="../../assets/img/B/24.png"></span>
     				<dl>
     					<dd class="font-16">美国·洛杉矶</dd>
     					<dd class="font-12 color-b"><i class="color-h">￥166元</i>/起</dd>
     				</dl>
     			</li>
     		<li>
            <span><img src="../../assets/img/B/25.png"></span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b"><i class="color-h">￥166元</i>/起</dd>
            </dl>
          </li>

          <li>
            <span><img src="../../assets/img/B/25.png"></span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b"><i class="color-h">￥166元</i>/起</dd>
            </dl>
          </li>

          <li>
            <span><img src="../../assets/img/B/24.png"></span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b"><i class="color-h">￥166元</i>/起</dd>
            </dl>
          </li>

     		</ul>

     	</div>
      <!--客服-->
      <div class="kef_a" style="margin-top: 0.5rem;" >
           <div class="float_left kef"><img style="width: 100% ;" src="../../assets/img/B/2.png"></div>
           <div class="float_right kef_b">
           	<div class="kef_c" :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}">
           		<i class="float_left font-14 color">最新定制案例</i><i class="float_right font-12 color">MOER>></i>
           	</div>
           	<div class="kef_d" >
           		<div class="float_left kef_d_a"><img style="width: 100%" src="../../assets/img/B/3.png"></div>
           		<div class="float_right kef_d_b">
           			<ul>
           				<li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
           				<li class="font-12 color-b float_right">1分钟前</li>
           			</ul>
           		</div>
           	</div>

           	<div class="kef_d">
           		<div class="float_left kef_d_a"><img style="width: 100%" src="../../assets/img/B/4.png"></div>
           		<div class="float_right kef_d_b">
           			<ul>
           				<li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
           				<li class="font-12 color-b float_right">1分钟前</li>
           			</ul>
           		</div>
           	</div>


           	<div class="kef_d">
           		<div class="float_left kef_d_a"><img style="width: 100%" src="../../assets/img/B/5.png"></div>
           		<div class="float_right kef_d_b">
           			<ul>
           				<li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
           				<li class="font-12 color-b float_right">1分钟前</li>
           			</ul>
           		</div>
           	</div>
           </div>
      </div>
     </div>
     </div>
    </div>
	</div>
</template>
<style lang="less">
.runtyp{
	text-align: left;
	line-height:2rem;
}
</style>
<script>
import { HotCityList,getStartCityUrl,gankou,getLinerCompanyUrl} from "@/utils/getData";
export default {
  name:'index',
  data(){
    return{
		lisst:[],//城市列表
		gankoulist:[],//港口列表
		hantyp:[],//邮轮航线列表
		gongtest:[],//油轮公司列表
		searchContent:'',//搜索内容
    }
  },
  mounted(){
		this.stycli();
		this.gangkoutyp();
		this.hangxiantyp();
		this.gonsityp();
  },
  methods:{
  async stycli(){
    let data= await HotCityList();
    this.lisst=data;
	},
	async gangkoutyp(){
    let data= await getStartCityUrl();
    this.gankoulist=data;
	},
		async hangxiantyp(){
		let data = await gankou();
		this.hantyp=data;
	},
	 async gonsityp(){
		let data =await getLinerCompanyUrl();
		this.gongtest=data;
	 },
	 //点击热门出发地搜索
	 remenclick(texs){
		  this.$router.push({
        name:'K_tanker',
        params: {
            startCity:texs.cityid,
          }
     })
	 },
	 //点击搜索
	 sousuoclick(ev){
		 if(ev.keyCode==13){
        this.$router.push({
        name:'K_tanker',
        params: {
            searchContent:this.searchContent,
          }
     })
		 }
	 },
	 //出发港口
	 guankou(gantex){
		  this.$router.push({
        name:'K_tanker',
        params: {
            portid:gantex.id,
          }
     })
	 },
	 //油轮航线
	 youlunclick(hantest){
		  this.$router.push({
        name:'K_tanker',
        params: {
            route:hantest.id,
          }
     })
	 },
	 gongclick(gonglist){
		 this.$router.push({
			 name:'K_tanker',
			 params:{
				  gongsi:gonglist.id,
			 }
		 })
	 }
	},
}
</script>

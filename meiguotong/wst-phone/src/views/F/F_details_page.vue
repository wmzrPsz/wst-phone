<template>
  <div class="index">
   <div class="beijingtu Choose_a_room_a"><img src="../../assets/img/A/back_icon@2x.png" onclick="window.history.go(-1)"></div>
   <div class="flexslider ">
    <van-swipe :autoplay="1000" class="flexslider_jia">
   <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>
  </div>
      <div class="Choose_a_room_b">
      <div class="Choose_a_room_b_j">
       <div class="martop">
       	<div class="float_left font-16">{{slist.title}}</div>
       </div>
       	<div>
      	  <div class="font-12 color-h float_left">￥<i class="font-18 color-h">{{slist.price}}</i><i class="color-b font-14">/起</i></div>

      	 <div class="font-12 float_right color-b refund">
      	 	 <i>退款说明</i><i>价格说明</i>
      	 </div>
      </div>
      </div>

      </div>

    <!--限时特卖优惠-->
    <div class="Choose_a_room_d_z">

      <div class="refund_z">
      <div class="refund_a font-12"><span v-for="(ter,index) in tagContent" :key="index">{{ter}}</span></div>
      <div class="refund_aa">
      <span class="font-12  color-d">{{slist.subtitle}}</span>
      <span class="font-12  color-b">编号2：本产品由测试及具有资质的合作旅行社提供相关服务</span>
      </div>
      <div class="refund_b" id="test6" onclick="orderTicket();">
      	<div class="float_left font-14"><i class="refund_b_a"><img src="../../assets/img/C/cglxxq_date_icon@2x.png"></i>可定日期与价格</div>
      	<div class="float_right refund_b_b"><img src="../../assets/img/B/search_cglv_open_icon@2x -a.png"></div>
      </div>
       <div class="brijtan yinc">
     </div>
       <div class="calendar-box date-box time-info" id="calendar-box" style="display: none;"></div>
     </div>

     <div class="beu_he"></div>
     <div class="refund_z">
     	<div class="refund_c font-14">路线说明</div>
     	<div class="font-14 color-b refund_c_a border_e">{{slist.infor}}</div>

     	<div class="refund_c_tou">
     		<ul class="font-12 refund_c_b">
     			<li class="refund_c_dian">内容形成<i class="refund_c_c yinc"><img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png"></i>
     			</li>
     			<li class="">用户点评<span class="font-10">(212)</span><i class="refund_c_c yinc"><img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png"></i>
     			</li>
     			<li>用户质询<i class="refund_c_c yinc"><img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png"></i>
     			</li>
     			<li>视屏质料<i class="refund_c_c yinc"><img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png"></i>
     			</li>
     		</ul>

     	<div class="qq">
     	<!--行程内容-->
		 <div class="ma yinc xians_a" >
		  <div class="refund_d_a">
		  	<i class="refund_d"><img src="../../assets/img/C/cglxxq_xingcheng_icon@2x.png"></i>
		  	<div class="font-14 refund_d_a_jia">行程内容</div>
		  </div>
		  <div class="refund_d_b">
		  	<ul class="font-12">
		  		<li v-for="(tlsi,index) in scenicContent" :key="index">{{tlsi}}</li>
		  	</ul>
		  </div>

		  <div class="refund_d_c">
		  	<ul class="font-12 color-b">
		  		<li class="refund_d_c_jia" v-for="(styl,index) in daty" :key="index">第{{styl}}天</li>
		  	</ul>
		  </div>
      <div class="refund_d_d font-14">
          <dl>07：30</dl>
          <dl class="color-b">
            <dd class="refund_d_d_jia">早餐</dd><dd>酒店早餐</dd>
            <dd class="refund_d_d_jia">用餐时</dd><dd>30分钟</dd>
          </dl>
          <dl>08：30</dl>
          <dl class="color-b">
            <dd class="refund_d_d_jia">浏览时间</dd><dd>30分钟</dd>
          </dl>
          <text class="refund_d_e  font-16">滨海湾花园</text>
          <text class="refund_d_e color-b font-14">浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间浏览时间</text>
          <span class="refund_d_f beijingtu"><img src="../../assets/img/B/13.png"></span>
      </div>
		 </div>
      <!--用户点评-->
		  <div class="ma  yinc ">
		 	 <div class="refund_d_a">
        <i class="refund_d"><img src="../../assets/img/C/cglxxq_dianping_icon@2x.png"></i>
        <text class="font-14">用户点评</text>
      </div>

        <div class="" >
        <div class="border_e evaluate_wanjia_z">
          <div class="evaluate_wanjia_z_a">
           <div class="evaluate_wanjia_c beijingtu float_left"><img src="../../assets/img/A/gant.png"></div>
           <div class="evaluate_wanjia_d float_left">
            <text class="font-16 float_left">绿水青山</text>
            <div class="ez-star "></div>
            <div class="font-12 color-b evaluate_wanjia_e">非常棒的一次体验非常棒的一次体验非常棒的一次体
            </div>
            <div>
               <text class="float_left font-14 color-b">2017-02-08</text>
            </div>
           </div>
          </div>
        </div>

                
          <div class="border_e evaluate_wanjia_z">
            <div class="evaluate_wanjia_z_a">
           <div class="evaluate_wanjia_c beijingtu float_left"><img src="../../assets/img/A/gant.png"></div>
           <div class="evaluate_wanjia_d float_left">
            <text class="font-16 float_left">绿水青山</text>
            <div class="ez-star "></div>
            <div class="font-12 color-b evaluate_wanjia_e">非常棒的一次体验非常棒的一次体验非常棒的一次体
            </div>
            <div>
               <text class="float_left font-14 color-b">2017-02-08</text>
            </div>
           </div>
          </div>
        <!--回复-->
        <input class="evaluate_wanjia_c_hiu_b" type="text" value="@回复：紫小锦" name="">
        </div>
         <button class="font-12 wanjiahuof_a color-b">查看更多</button>
      </div>

		 </div>
		 <!--用户质询-->
		  <div class="ma yinc">
		 	 <div class="refund_d_a">
        <i class="refund_d"><img src="../../assets/img/C/cglxxq_kefu_icon@2x.png"></i>
        <text class="font-14">用户质询</text>
      </div>
      <div class="information">
         <ul>
             <text class="font-14 color-d">为什么我资讯不了？为什么我资讯不了？</text>
             <text class="font-12">客服回复：尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员</text>
             <span class="font-12 float_right color-b">2018-05-16:0936</span>
         </ul>
         <ul>
             <text class="font-14 color-d">为什么我资讯不了？为什么我资讯不了？</text>
             <text class="font-12">客服回复：尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员</text>
             <span class="font-12 float_right color-b">2018-05-16:0936</span>
         </ul>
         <ul>
             <text class="font-14 color-d">为什么我资讯不了？为什么我资讯不了？</text>
             <text class="font-12">客服回复：尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员尊敬的路途会员</text>
             <span class="font-12 float_right color-b">2018-05-16:0936</span>
         </ul>
      </div>
       <button class="font-12 wanjiahuof_a color-b">查看更多</button>
		 </div>
		 <!--视屏质料-->


		  <div class="ma yinc">
		  <div class="refund_d_a">
        <i class="refund_d"><img src="../../assets/img/C/cglxxq_ship_icon@2x.png"></i>
        <text class="font-14">视屏质料</text>
      </div>
      <div class="visual">
      <video src="../../assets/img/B/480.mp4" controls></video>
      </div>
      <div class="visual_a">
        <span class="font-16">备注信息</span>
        <span class="font-14 color-b">升级24小时专用接机</span>
        <div>
            <text class="visual_bb font-14"><i class="visual_b"><img src="../../assets/img/A/gant.png"></i>产品经理推荐</text>
             <ul class="visual_c font-14">
             <li>
              <i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
              <span>精品高性能精品</span>
            </li>
            <li>
              <i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
              <span>精品高性能精</span>
            </li>
            <li>
              <i><img src="../../assets/img/B/bjyw_star_icon@2x.png"></i>
              <span>精品高性能精品高性能精品高性能精品高性能精品高性能</span>
            </li>
             </ul>
        </div>
      </div>
       

     	</div>
<!---->
     </div>
     
    </div>
    </div>

    <div class="collection_di  border_d">
      <div class="float_left collection_di_a">
        <i class="beijingtu"><img src="../../assets/img/C/cglxxq_shouc_icon@2x.png"></i>
        <i class="beijingtu yinc_a"><img src="../../assets/img/B/bjywle_star_icon@2x.png"></i>
        <text class=font-14>收藏</text>
      </div>
      <div class="float_right collection_di_b">
          <button class="font-14 ">购物车</button>
          <button class="font-14 collection_di_c">订购</button>
      </div>
    </div>
    </div>
  </div>
</template>

 <script>
 import { getRouteDetailstyp,getRouteContpy } from "@/utils/getData";
  export default {
  name: "index",
  data(){
    return {
      routeid:'',
      slist:'',
      images: [],//轮播图片
      tagContent:[],//属性
      scenicContent:[],//景点
      daty:[],
    }
  },
  created(){
   this.styget();
   this.styneiryp();
  },
  methods:{
  //常规路线详情
  async styget(){
    this.routeid=this.$route.params.routeid;
    let data = await getRouteDetailstyp(this.routeid);
    if(data){
      this.slist=data;
      if(data.carImg){
      this.images=data.carImg.split(",");
      }
      if(data.tagContent){
      this.tagContent=data.tagContent.split(",");
      }
      if(data.scenicContent){
        this.scenicContent=data.scenicContent.split(",");
      }
    }
  },
  //内容天数
  async styneiryp(){
    this.routeid=this.$route.params.routeid;
    let data = await getRouteContpy(this.routeid);
   //天数
   for(let i=1;i<=data.length;i++){
     this.daty.push(i)
   }
   console.log(this.daty);
  }
  },
  }
 </script>

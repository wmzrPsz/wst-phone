<template>
	<div class="index">
		<div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
      <i class="her_a_zong color float_zhong">全部评论</i>
     </div>
 <!--玩家信息评价-->
   <div class="dingjia">
      <div class="evaluate_wanjia_a" >
				 <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
				  <div class="sanxing_b ">
					<div class="commpin"> <i><img src="../../assets/img/B/clsp_3_icon@2x.png"></i><span class="font-16">评价</span></div>
      		 <div class="font-14 float_right pingjia_a"><i class="color-h">4.9分</i><i class="color-b">{{pingluntyp.length}}条评论</i></div>
      	 </div>
        <div class="border_e evaluate_wanjia_z"  v-for="(pinlist,index) in pingluntyp" :key="index">
        	<div class="evaluate_wanjia_z_a">
        	 <div class="evaluate_wanjia_c beijingtu float_left"><img v-lazy="pinlist.memberPhoto"></div>
        	 <div class="evaluate_wanjia_d float_left">
        	 	<div class="font-16 float_left">{{pinlist.memberName}}</div>
        	 	<div class="ez-star "></div>
        	 	<div class="font-12 color-b evaluate_wanjia_e">
							 {{pinlist.content}}
        	 	</div>
        	 	<div>
        	 		 <div class="float_left font-14 color-b">{{pinlist.createDate}}</div>
        	 		 <div class="float_right font-14 color-b">
        	 		 	<div class="float_left evaluate_wanjia_f"><i><img src="../../assets/img/B/mddxq_zan_icon.png"></i>{{pinlist.digNum}}</div>
        	 		 	<div class="float_left evaluate_wanjia_f"><i><img src="../../assets/img/B/mddxq_pinglun_icon.png"></i>{{pinlist.childNum}}</div>
        	 		 </div>
        	 	</div>
        	 </div>
        	</div>
        </div>
				 </mescroll-vue>
        <!--回复-->
        <input class="evaluate_wanjia_c_hiu_b commpintyp" type="text" placeholder="发布评论" @keyup="show($event)" name="" v-model="content">
      </div>
    </div>
	</div>
</template>
<style lang="less">
.mescroll {
  position: fixed;
  z-index:1;
  top:2.5rem;
  bottom:2.5rem;
	height: auto;
	overflow: hidden;

}
.commpin{
	float: left;
}
.commpin i{
  margin-top:-0.8rem;
  display: block;
  float: left;
}
.commpin span{
  float: left;
  line-height: 1rem;
}
.evaluate_wanjia_z{
	clear: both;
}
.sanxing_b{
	overflow: hidden;
	margin-bottom: 0.3rem;
	margin-top: 0.3rem;
}
.commpintyp{
	position:fixed;
	left:5%;
	bottom:0.5rem;
	width: 90%;
}
.pingjia_a{
	margin-right: 0.5rem;
}
</style>

<script>
import { selectCommentUrl,addCommentUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
 export default {
	 name :'index',
	 data(){
		 return{
       routeid:this.$route.params.routeid,
			 pingluntyp:[],//评论列表
			 proType:this.$route.params.proType,//1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.酒店10.保险11.旅游定制12导游 13.攻略评论 14.城市评论',
			content:'',//评论的内容
			mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.selectyp, //回调
        	page: {
					size: this.$store.state.pageSize, //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "../../assets/img/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
		 }
	 },
	  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter(); // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    });
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave(); // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next();
  },
	 mounted(){
	 },
	 components: {
    MescrollVue // 注册mescroll组件
  },
  methods:{
		// mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
		},
		show:function(ev){
    if(ev.keyCode == 13){
    alert(this.content);
    }
    },
    //添加产品评论
    async commlist(){
    let data = await addCommentUrl(
    
    );
    },
    //评价
  async selectyp(page, mescroll){
   let data = await selectCommentUrl(
     page.num,
		 this.routeid,
     this.proType,
   );
	  if (data) {
       // 如果是第一页需手动制空列表
        if (page.num === 1) this.pingluntyp = [];
        // 把请求到的数据添加到列表
				this.pingluntyp = [...this.pingluntyp, ...data.list];
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
  },
	}
 }
</script>
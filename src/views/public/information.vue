    <template>
        <div>
            <div class="her_a font-20 background-a">
                <i class="her_a_left float_left"  onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
                <i class="her_a_zong color float_zhong">全部评论</i>
                <i class="float_right color her_a_zong_a font-14" @click="zixunclick()">问题资讯</i>
               </div>
           <!--玩家信息评价-->
              <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
             <div v-for="(text,index) in zhixuntyp" :key="index">
                 <div class="information collection_di_e">
                   <ul>
                       <div class="font-14 color-d">{{text.content}}</div>
                       <div class="font-12">客服回复:{{text.contentRetply}}</div>
                       <span class="font-12 float_right color-b">{{text.createDate}}</span>
                   </ul>
                </div>
            </div>
            </mescroll-vue>
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
.collection_di_e{
text-align: left;
margin-top:0.5rem!important;
}
    </style>
    
    <script>
import { getConsultUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
 export default {
	 name :'index',
	 data(){
		 return{
       routeid:this.$route.params.routeid,
			 zhixuntyp:[],//评论列表
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
    //点击问题资讯
		zixunclick :function(){
    this.$router.push({
			path:'/inquiry/'+this.routeid+this.proType,
		})
		},
    //评价
  async selectyp(page, mescroll){
   let data = await getConsultUrl(
     page.num,
		//  this.$route.params.routeid,
		this.routeid,
     this.proType,
   );
	  if (data) {
       // 如果是第一页需手动制空列表
        if (page.num === 1) this.zhixuntyp = [];
        // 把请求到的数据添加到列表
				this.zhixuntyp = [...this.zhixuntyp, ...data.list];
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
  },
	},
 }
</script>
	

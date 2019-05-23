<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">选择酒店</i>
    </div>
    <div class="dingjia">
      <div class="xijiu background-a color font-16">
        <ul>
          <li class="border_bai" @click="chioeclick(1)">
            酒店等级
            <span class="zinan_c">
              <i class="zinan_b" v-if="typst!=1">
                <img src="../../assets/img/B/bjyw_open_icon@2x.png">
              </i>
              <i class="zinan_b" v-if="typst==1">
                <img src="../../assets/img/B/bjyw_open_icon@2x -1.png">
              </i>
            </span>
          </li>
          <li @click="chioeclick(2)">
            房间类型
            <span class="zinan_c">
              <i class="zinan_b" v-if="typst!=2">
                <img src="../../assets/img/B/bjyw_open_icon@2x.png">
              </i>
              <i class="zinan_b" v-if="typst==2">
                <img src="../../assets/img/B/bjyw_open_icon@2x -1.png">
              </i>
            </span>
          </li>
        </ul>
      </div>
      <div class="brijtan_a" v-if="typst==1 || typst==2"></div>
      <!--酒店等级-->
      <div class="ju_x" v-if="typst==1">
        <ul>
          <li class="font-14 color-b" @click="grade(5)">
            <i class="float_left">五星酒店</i>
            <span class="jiud_x float_left">
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
            </span>
            <i class="float_right jiud_x_a" v-if="stars==5">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
          <li class="font-14 color-b" @click="grade(4)">
            <i class="float_left">四星酒店</i>
            <span class="jiud_x float_left">
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
            </span>
            <i class="float_right jiud_x_a " v-if="stars==4">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
          <li class="font-14 color-b" @click="grade(3)">
            <i class="float_left">三星酒店</i>
            <span class="jiud_x float_left">
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
            </span>
            <i class="float_right jiud_x_a " v-if="stars==3">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
          <li class="font-14 color-b" @click="grade(2)">
            <i class="float_left">二星酒店</i>
            <span class="jiud_x float_left">
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
            </span>
            <i class="float_right jiud_x_a " v-if="stars==2">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>

          <li class="font-14 color-b" @click="grade(1)">
            <i class="float_left">一星酒店</i>
            <span class="jiud_x float_left">
              <i>
                <img src="../../assets/img/B/bjyw_star_icon@2x.png">
              </i>
            </span>
            <i class="float_right jiud_x_a " v-if="stars==1">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
        </ul>
      </div>

      <!--房间类型-->
      <div class="famjian_zhong" v-if="typst==2">
        <div class="famjian">
          <p class="color-b font-14 float_left famjian_b">单人房</p>
		  <i @click="change()">
		    <van-stepper v-model="oneNum" :min="0" class="float_right"/>
		  </i>
        </div>

        <div class="famjian">
          <p class="color-b font-14 float_left famjian_b">双人房</p>
		  <i @click="change()">
		   <van-stepper v-model="twoNum" :min="0" class="float_right" />
		  </i>
        </div>

        <div class="famjian">
          <p class="color-b font-14 float_left famjian_b">三人房</p>
		  <i @click="change()">
		   <van-stepper v-model="threeNum" :min="0" class="float_right"/>
		  </i>
        </div>

        <div class="famjian">
          <p class="color-b font-14 float_left famjian_b">四人房</p>
		  <i @click="change()">
		   <van-stepper v-model="fourNum" :min="0" class="float_right"/>
		  </i>
        </div>
      </div>
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
      <div class="jiud" v-for="(list,index) in styser" :key="index" @click="details(list)">
        <div class="float_left jiud_le">
          <img style="width: 100%" :src="list.imgUrl">
        </div>
        <div class="float_right jiud_ri">
          <div class="font-16 text_left">{{list.name}}</div>
          <ul>
            <li class="font-12 color-b">
              <i class="jiud_ri_a float_left">
                <img v-if="list.level==1" src="../../assets/img/B/bjyw_1xing_icon@2x.png">
				      <img v-if="list.level==2" src="../../assets/img/B/bjyw_2xing_icon@2x.png">
				    <img v-if="list.level==3" src="../../assets/img/B/bjyw_3xing_icon@2x.png">
				    <img v-if="list.level==4" src="../../assets/img/B/bjyw_4xing_icon@2x.png">
			    	<img v-if="list.level==5" src="../../assets/img/B/bjyw_5xing_icon@2x.png">
              </i>
              <i class="text_left jiud_ri_b">{{list.level | hotle}}</i>
            </li>
            <li class="font-12 color-b">
              <i class="jiud_ri_a float_left">
                <img src="../../assets/img/B/bczc_adress_icon@2x.png">
              </i>
              <i class="jiud_ri_b text_left float_left">{{list.address}}</i>
            </li>
          </ul>
        </div>
      </div>
      </mescroll-vue>
    </div>
  </div>
</template>
<style lang="less">
.text_left {
  text-align: left;
}
.xijiu{
 position: fixed;
 width: 100%;
}
.mescroll {
  position: fixed;
  top:5rem;
  bottom: 0rem;
  height: auto;
}
.ju_x{
	position: fixed!important;
	top: 4.7rem;
}
.famjian_zhong{
	position: fixed!important;
	top: 4.7rem;
}
</style>
<script>
import {getHotelByCityUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
import { hotle} from "@/filters/custom";
import {mapMutations} from "vuex";
export default {
  name: "index",
  data() {
    return {
	  stars:'',//酒店星级
	  typst:0,//1展示酒店星级2展示房间类型
	  oneNum:0,//单人间
	  twoNum:0,//双
	  threeNum:0,//三
	  fourNum:0,//四
      styser:[],//酒店列表
	  mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.routine, //回调
        	page: {
					size: this.$store.state.pageSize, //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "../../assets/img/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  components: {
    MescrollVue // 注册mescroll组件
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
  methods: {
	// mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
     ...mapMutations("route",["holetroom"]),
    //展示酒店类型或者房间类型
    chioeclick(index) {
      if (this.typst != index) {
		this.typst = index;
      } else if (this.typst == index) {
		  this.typst=0;
      }
	},
	async routine(page, mescroll) {
      let data = await getHotelByCityUrl(
		this.$route.params.date,
		this.$route.params.cityid,
		this.stars,
		this.oneNum,
		this.twoNum,
		this.threeNum,
		this.fourNum,
        page.num
      );
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
	},
	change:function(){
   this.mescroll.resetUpScroll();
	},
	//选择酒店等级
	grade:function(index){
	if(this.stars!=index){
     this.stars=index;
	} else if(this.stars==index){
    this.stars="";
	}
	this.mescroll.resetUpScroll();
	},
	//获取酒店房间
	details:function(list){
    this.$router.push({
		path:'/B_room_details/'+this.$route.params.date,
  })
  this.holetroom(list);
	},
  }
};
</script>


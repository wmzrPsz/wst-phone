<template>
  <div class="index" style="background-color: white;">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"><img src="../../assets/img/A/back_icon@2x.png" onclick="window.history.go(-1)"></i>
      <i class="her_a_zong color float_zhong">常规路线</i>
     </div>
    <div class="dingjia_b">
      <div class="brijtan_b" v-if="type!=0"></div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>日期</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(2)">
              <i>行程</i>
             <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(3)">
              <i>价格预算</i>
             <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(4)">
              <i>全部筛选</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
        <!--日期-->
        <div class="ong_z" v-if="type==1">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">筛选日期</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list, index) in dataList"
                :key="index"
                :class="list.falg_a?'b_xianm_b_jiadian':''"
                @click.stop="monthClick(index)"
              >{{list.month}}月</li>
            </ul>
          </div>
        </div>

        <!--行程天数-->
        <div class="ong_z" v-if="type==2">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">行程天数</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(listday,index) in daylist"
                :key="index"
                :class="listday.flag?'b_xianm_b_jiadian':''"
                @click.stop="dayClick(index)"
              >{{listday.day | dayFilter}}</li>
            </ul>
          </div>
        </div>

        <!--价格预算-->
        <div class="ong_z" v-if="type==3">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">价格预算</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li
                class="float_left"
                v-for="(listpr,index) in priceList"
                :key="index"
                :class="listpr.flag?'b_xianm_b_jiadian':''"
                @click.stop="contentClick(index)"
              >{{listpr.content}}</li>
              <div class="jg_c">
                <li class="float_left" :class="minpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(1)"
                    type="number"
                    placeholder="最小价格"
                    v-model.number="minPrice"
                  >
                </li>
                <li class="float_left" :class="maxpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(2)"
                    type="number"
                    placeholder="最大价格"
                    v-model.number="maxPrice"
                  >
                </li>
              </div>
            </ul>
          </div>
          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding()"
          >确定</button>
        </div>
        <!--全部筛选-->
        <div class=" ong_z " v-if="type==4">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">筛选日期</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list, index) in dataList"
                :key="index"
                :class="list.falg_a?'b_xianm_b_jiadian':''"
                @click.stop="monthClick(index)"
              >{{list.month}}月</li>
            </ul>
          </div>

          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">行程天数</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(listday,index) in daylist"
                :key="index"
                :class="listday.flag?'b_xianm_b_jiadian':''"
                @click.stop="dayClick(index)"
              >{{listday.day | dayFilter}}</li>
            </ul>
          </div>

          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">价格预算</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li
                class="float_left"
                v-for="(listpr,index) in priceList"
                :key="index"
                :class="listpr.flag?'b_xianm_b_jiadian':''"
                @click.stop="contentClick(index)"
              >{{listpr.content}}</li>
              <div class="jg_c">
                <li class="float_left" :class="minpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(1)"
                    type="number"
                    placeholder="最小价格"
                    v-model.number="minPrice"
                  >
                </li>
                <li class="float_left" :class="maxpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(2)"
                    type="number"
                    placeholder="最大价格"
                    v-model.number="maxPrice"
                  >
                </li>
              </div>
            </ul>
          </div>

          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">途径景点</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li
                class="float_left"
                v-for="(list,index) in scejing"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click="sceClick(index)"
              >{{list.name}}</li>
            </ul>
          </div>
          <div v-for="(list,index1) in getLtyp" :key="index1">
            <div class="b_xianm bus">
              <i class="b_xianm_a">
                <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
              </i>
              <i class="font-16 b_xianm_c">{{list.content}}</i>
            </div>

            <div class="b_xianm" style="margin-top: 0.5rem">
              <ul class="font-12 jg_a color-b">
                <li
                  class="float_left"
                  v-for="(item,index2) in list.comTagList"
                  :key="index2"
                  @click.stop="lableClick(index1,index2)"
                  :class="item.flag?'b_xianm_b_jiadian':''"
                >{{item.content}}</li>
              </ul>
            </div>
          </div>
          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding()"
          >确定</button>

          <div class="di_s_b_dengl_chonz font-16">
            <button class="float_left di_s_b_dengl_chonz_a color-d" @click="reset()">重置</button>
            <button class="float_right di_s_b_dengl_chonz_b border_b color-b" @click="queding()">取消</button>
          </div>
        </div>
      </div>

      <div class="dingjia_a_ajia">
        <ul class="sou_her_www font-14">
          <li @click="sertey(0)" :class="[srtype==0?'sou_her_www_a':'']">
            <button>综合</button>
          </li>
          <li @click="sertey(1)" :class="[srtype==1?'sou_her_www_a':'']">
            <button>销量</button>
          </li>
          <li @click="sertey(2)" v-if="styjiag==1" :class="[srtype==3?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon.png">
              </i>
            </span>
          </li>
          <li @click="sertey(3)"  v-if="styjiag==2" :class="[srtype==2?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon - 1.png">
              </i>
            </span>
          </li>
          <li @click="sertey(4)" :class="[srtype==4?'sou_her_www_a':'']">
            <button>好评</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="dingjia_a">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div class="ze_x">
          <div class="ze_x_a" v-for="(sert,index) in styser" :key="index" @click="xianqing(sert)">
            <div style="overflow:hidden;">
              <div class="float_left ze_x_le">
                <img v-lazy="sert.carImg">
              </div>
              <div class="float_left ze_x_ril">
                <div class="font-14 ze_x_ril_jia">{{sert.title}}</div>
                <ul class="font-12 ze_x_ril_a color-b">
                  <li v-for="(tag, index) in sert.tagContent.split(',')" :key="index">{{tag}}</li>
                </ul>
                <div class="font-12 ze_x_ril_b color-c">{{sert.subtitle}}</div>
              </div>
            </div>
            <div class="font-12 color-b ze_x_ril_c">{{sert.infor}}</div>
            <div>
              <ul class="ze_x_ril_d float_right">
                <li class="font-14">
                  <i class="color-h">￥{{sert.price}}</i>
                  <i>/元起</i>
                </li>
                <li class="font-12">{{sert.commentNum}}条评论</li>
              </ul>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
     <!--点击选择月份-->
    <div class="brijtan " v-if="yue==2"></div>
    <div class="Route_x " v-if="yue==2">
      <div class="font-16" style="line-height: 2rem;">{{listpryue.month}}月</div>
      <div class="Route_x_a">
        <dl class="font-12">
          <dd v-for="(list,index) in listpryue.days" :key="index" @click.stop="datyclick(index)">
            {{list.day}}号
            <i class="b_xianm_b_jiadian_day" v-if="list.flag==true"></i>
          </dd>
        </dl>
      </div>

      <button
      @click="yuetpy(listpryue)"
        class="color background-d font-14 xiayi"
        style="margin-top:2rem!important; margin-bottom:1rem!important;"
      >确定</button>
    </div>
  </div>
</template>
<style lang="less">

.qythist{
   position: fixed;
  z-index:1;
  top: 8.2rem;
  bottom: 0;
  height: auto;
}
.mescroll {
  position: fixed;
  z-index:9;
  top: 8.2rem;
  bottom: 0;
  height: auto;

}
.shaixuang{
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 2.5rem;
  z-index:9999
}
.sou_her_ww{
 background-color:#484B4E;
 color: white;
}
.dingjia_a_ajia{
  background-color:white;
	width: 100%;
	overflow: hidden;
	padding-bottom: 0.5rem;
	position: fixed;
  top:5rem;
  z-index: 9999;
  border-bottom: 3px solid #F5F5F5;
}
.ong_z{
  margin-top:2.8rem;
}
</style>

<script>
import { seledin, getScenicByCity, zhiding } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      type: "", //1日期，2行程，3价格，4全部，
      srtype:"", //1综合，2销量，3降价格，4升价格
      styser: [], //列表数据
      imgtep: [], //列表图片
      dataList: [], //日期
      day: "", //日期的天
      daylist: [], //行程的天
      minPrice: "",
      maxPrice: "",
      minpak: 2,
      maxpak: 2,
      scenicSpotid: [],
      getLtyp: [], //自定标签
      routeType: 1, //自定标签1常规路线
      tagContent: [],
      styjiag:1,//开始1显示降价格，2显示升价格
      yue:1,//表示月份隐藏
      listpryue:'',//月份天数
      folis:'',
      cityid:'1',//出发城市id
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
  //计算属性
  computed: {
    //获取选择的日期
    date() {
      let lists = [];
      let data = [];//号
      if(this.folis==1){
        if(this.$route.params.date!=null){
         lists=this.$route.params.date;//搜索传进来的日期
        }
      }else{
       for (const list of this.dataList) {
        var mag = {};
        if (list.falg_a) {
        this.$set(mag,'year',list.year);//年
        this.$set(mag,'month',list.month);//月
        for(const datayu of list.days){
        if(datayu.flag){
         data.push(datayu.day);//月
         this.$set(mag,'days',data.toString());
        }
        }
        lists.push(mag);
        }
      }
      }
      return lists;
    },
    //获取天数
    daysty() {
      let lists = [];
      if(this.folis==1){
        lists=this.$route.params.daysty;//搜索传进来的日期
      }else{
        for (const listday of this.daylist) {
        if (listday.flag) {
          lists.push(listday.day);
        }
      }
      }
      return lists;
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
  mounted() {
    this.LopTime(); //获取当前一年的月份和天数
    this.LopTime_list(); //12个月循环
    this.dayListInit(); //天数初始化
    this.priceInit(); //价格初始化
    this.scenic(); //获取途径景点
    this.getLabeltyp(); //自定标签
    this.folis=this.$route.params.folis;
    console.log(this.folis);
  },
  filters: {
    dayFilter: function(value) {
      if (!value) return;
      if (parseInt(value) < 15) return `${value}天`;
      return "15天及以上";
    }
  },
  methods: {
    //点击常规路线详情
    xianqing(sert){
    this.$router.push({
     path: 'F_details_page/'+sert.routeid,
     })
    },
     //确定月份
  yuetpy(listpryue){
    this.yue=1;
    for(const srt of listpryue.days){
      if(srt.flag==true){
        this.$set(listpryue,'falg_a',true);
         this.mescroll.resetUpScroll();
        return;
      }
      this.$set(listpryue,'falg_a',false);
    }
     this.mescroll.resetUpScroll();
    return;
    },
     //月份点击
     monthClick(index) {
    this.yue=2;
    this.folis="";
     if(this.dataList[index].flag==false){
        this.dataList.map(elem => {
        elem.flag = false;
      });
      }
    this.dataList[index].flag = !this.dataList[index].flag;
   for (const listpr of this.dataList) {
        if(listpr.flag==true){
         this.listpryue=listpr;
        }
      }
      console.log(this.listpryue);
  },
  //点击选中几号
  datyclick(index){
   this.listpryue.days[index].flag = !this.listpryue.days[index].flag;
  },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    teypex(index) {
      if (this.type != 0 && this.type == index) {
        this.type = "";
      } else {
        this.type = index;
      }
    },
    //销售量和价格的切换
    sertey(index) {
      this.srtype = index;
      this.mescroll.resetUpScroll();
      if(this.srtype==2){
        this.styjiag=2;
      }
      if(this.srtype==3){
        this.styjiag=1;
      }
    },
    LopTime(year = new Date().getFullYear(), month = new Date().getMonth()) {
      //计算这个月多少天
      let day = new Date(year, month, 0).getDate(); //当月总天数
      return day;
    },
    LopTime_list() {
      let currentDate = new Date();
      let year = currentDate.getFullYear(); //年
      let month = currentDate.getMonth() + 1; //月
      let list = []; //创建要传的数组
      //开始循环12个月
      for (let i = 0; i < 12; i++) {
        if (month > 12) {
          month = 1; //1月
          year++; //加年
        }
        //  //把年月set进去map{}字符窜
        let map = {}; //创建
        this.$set(map, "year", year);
        this.$set(map, "month", month);
        this.$set(map, "flag", false);
        let day = this.LopTime(year, month);
        let days = [];
        for (let k = 1; k <= day; k++) {
          //这个月有多少天循环多少
          let map = {};
          this.$set(map, "day", k);
          this.$set(map, "flag", false);
          days.push(map);
        }
        this.$set(map, "days", days);
        list.push(map); //List[{year,month,{day}},{}]
        month++; //每循环一次加一月
      }
      console.log(list);
      this.dataList = list;
    },
    //天数循环
    dayListInit() {
      let dayst = [];
      for (let k = 2; k <= 15; k++) {
        var map = {};
        this.$set(map, "day", k);
        this.$set(map, "flag", false);
        dayst.push(map);
      }
      console.log(dayst);
      this.daylist = dayst;
    },
    dayClick(index) {
      this.folis="";
      this.daylist[index].flag = !this.daylist[index].flag;
      if (this.daylist); //多选 daylist[index].flag=true//为选中天数
      this.mescroll.resetUpScroll();
      return;
    },
    //点击价格的选中
    contentClick(index) {

      this.minpak = 2;
      this.maxpak = 2;
      if(this.priceList[index].flag==false){
        this.priceList.map(elem => {
        elem.flag = false;
      });
      }
       this.priceList[index].flag = !this.priceList[index].flag;
      // this.minPrice=priceList[index].minPrice;
        if (this.priceList[index].flag==true) {
          this.minPrice = this.priceList[index].minPrice; //最小价格
          this.maxPrice = this.priceList[index].maxPrice; //最大价格
        }
        if (this.priceList[index].flag==false) {
          this.minPrice="";
           this.maxPrice ="";
        }
      console.log("最小价格" + this.minPrice + "最大价格" + this.maxPrice);
      this.mescroll.resetUpScroll();
    },
    //价格选择初始化
    priceInit() {
      this.priceList = [];
      for (let k = 0; k < 4; k++) {
        let map = {};
        if (k == 0) {
          this.$set(map, "minPrice", 0);
          this.$set(map, "maxPrice", 999);
          this.$set(map, "content", "0-999");
          this.$set(map, "flag", false);
        }
        if (k == 1) {
          this.$set(map, "minPrice", 1000);
          this.$set(map, "maxPrice", 2999);
          this.$set(map, "content", "1000-2999");
          this.$set(map, "flag", false);
        }
        if (k == 2) {
          this.$set(map, "minPrice", 3000);
          this.$set(map, "maxPrice", 4999);
          this.$set(map, "content", "3000-4999");
          this.$set(map, "flag", false);
        }
        if (k == 3) {
          this.$set(map, "minPrice", 5000);
          this.$set(map, "content", "5000以上");
          this.$set(map, "flag", false);
        }
        this.priceList.push(map);
      }
      console.log(this.priceList);
    },
    //点击输入价格
    prmClick(index) {
      if (index == 1) {
         this.minpak = 1;
      }
      if (index == 2) {
        this.maxpak = 1;
      }
      for (const listpr of this.priceList) {
        this.$set(listpr, "flag", false);
      }
    },
    queding() {
      this.type = 0;
      this.folis="";
      this.mescroll.resetUpScroll();
    },
    async routine(page, mescroll) {
      if(this.folis==1){
      if(this.$route.params.minPrice!=null){
      this.minPrice=this.$route.params.minPrice;//价格
      }
      if(this.$route.params.maxPrice!=null){
      this.maxPrice=this.$route.params.maxPrice;//价格
      }
       if(this.$route.params.tagContent!=null){
      this.tagContent=this.$route.params.tagContent;//属性
      }
      if(this.$route.params.scenicSpotid!=null){
      this.scenicSpotid = this.$route.params.scenicSpotid;//景点id
      }
      }
      let data = await seledin(
        JSON.stringify(this.date),
        this.tagContent.toString(),
        this.daysty.toString(),
        this.srtype,
        this.minPrice, //小价格
        this.maxPrice, //大价格
        this.scenicSpotid.toString(), //景点ID
        page.num
      );
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        for (const list of this.styser) {
          if (list.carImg) {
            this.$set(list, "carImg", list.carImg.split(",")[0]);
          }
          //景点图片
          if (list.imgUrl) {
            this.$set(list, "imgUrl", list.imgUrl.split(",")[0]);
          }
        }
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
    },
    async scenic() {
      let data = await getScenicByCity(this.cityid);
      if (data) {
        this.scejing = data;
        for (const list of this.scejing) {
          this.$set(list, "flag", false);
        }
      }
    },
    //自定标签
    async getLabeltyp() {
      let data = await zhiding(this.routeType);
      if (data) {
        this.getLtyp = data;
        for (const list of this.getLtyp) {
          this.$set(list, "flag", false);
          for (const item of list.comTagList) {
            this.$set(item, "flag", false);
          }
        }
        console.log(this.getLtyp);
      }
    },
    sceClick(index) {
      this.folis="";
      this.scenicSpotid = [];
      this.scejing[index].flag = !this.scejing[index].flag;
      for (const list of this.scejing) {
        if (list.flag) {
          this.scenicSpotid.push(list.scenicSpotid); //id
        }
      }
      this.mescroll.resetUpScroll();
    },
    lableClick(index1, index2) {
      this.folis="";
      this.getLtyp[index1].comTagList[index2].flag = !this.getLtyp[index1]
        .comTagList[index2].flag;
      this.tagContent = [];
      for (const list of this.getLtyp) {
        for (const item of list.comTagList) {
          if (item.flag) {
            this.tagContent.push(item.tagid); //id
          }
        }
      }
      console.log(this.tagContent);
      this.mescroll.resetUpScroll();
    },
    //重置
    reset() {
      //月份重置
      for (const list of this.dataList) {
        list.flag = false;
      }
      //天数重置
      for (const list of this.daylist) {
        list.flag = false;
      }
      //价格重置
      for (const list of this.priceList) {
        list.flag = false;
      }
      //途经景点重置
      for (const list of this.scejing) {
        list.flag = false;
      }
      //属性重置
      for (const list of this.getLtyp) {
        for (const item of list.comTagList) {
          item.flag = false;
        }
      }
      this.mescroll.resetUpScroll();
    }
  }
};
</script>

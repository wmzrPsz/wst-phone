<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/head_fenlei_icon@2x.png">
      </i>
      <i class="he_t_baoc color">详情页</i>
      <i class="her_a_rigth float_right">
        <img src="../../assets/img/A/head_car_icon@2x.png">
      </i>
    </div>
    <div class="dingjia">
      <div class="baoc">
        <img src="../../assets/img/B/1.png">
      </div>
      <div class="Route">
        <text class="font-14" style="font-weight: 600">常规路线</text>
        <div class="Route_b">
          <i class="Route_a">
            <img src="../../assets/img/B/bczc_adress_icon@2x.png">
          </i>
          <div class="font-14 color-b float_left ">广州</div>
          <router-link to="/search">
          <input class="float_left font-14 color-b" type="text" placeholder="输入你要搜索的城市" name>
          </router-link>
        </div>
        <!--出发日期-->
        <div class="border_e" style="overflow: hidden; padding-bottom: 1rem;">
          <div class="Route_z">
            <div class="font-14 float_left Route_c">出发日期</div>
            <div class="float_right Route_c_a">
              <dl class="font-14 color-b">
                <dd
                  v-for="(list, index) in dataList"
                  :key="index"
                  :class="list.falg_a?'yue':''"
                  @click.stop="monthClick(index)"
                >{{list.month}}月</dd>
              </dl>
            </div>
          </div>
          <div class="Route_z">
            <div class="font-14 float_left Route_c">行程天数</div>
            <div class="float_right Route_c_a" >
              <dl class="font-14 color-b">
                <dd  v-for="(listday,index) in daylist"
                :key="index"
                :class="listday.flag?'yue':''"
                @click.stop="dayClick(index)"
                >{{listday.day | dayFilter}}</dd>
              </dl>
            </div>
          </div>
          <div class="Route_z">
            <div class="font-14 float_left Route_c">预算价格</div>
            <div class="float_right Route_c_a Route_c_a_jia" style="border:none;">
              <dl class="font-14 color-b">
                <dd
                 v-for="(listpr,index) in priceList"
                :key="index"
                :class="listpr.flag?'yue':''"
                @click.stop="contentClick(index)"
                >{{listpr.content}}</dd>
                <div  @click="prmClick()">
                   <input 
                    :class="minpak==1?'yue':''"
                    class="font-14 color-d"
                    type="number"
                    placeholder="最小价格"
                    v-model.number="minPrice"
                  >
                <span class="float_left font-18">-</span>
                 <input
                    :class="minpak==1?'yue':''"
                    class="font-14 color-d"
                    type="number"
                    placeholder="最大价格"
                    v-model.number="maxPrice"
                  >
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bao_her_c font-14 jieji_c_a" style="overflow: hidden;">
          <ul>
            <li @click="lutclick()">
              <i class="float_left">途径景点</i>
              <i class="bao_her_d float_right" v-if="typlu==1">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
              <i class="bao_her_d float_right" v-if="typlu==2">
                <img src="../../assets/img/A/sign_open_icon@2x.png">
              </i>
            </li>
            <div class="b_xianm" style="margin-top: 0.5rem" v-if="typlu==2">
            <ul class="font-12 jg_a color-b">
              <li
                style="line-height: 1.5rem"
                class="float_left"
                v-for="(list,index) in scejing"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click="sceClick(index)"
              >{{list.name}}</li>
            </ul>
          </div>

            <li class="tuozhi" @click="ziclick()">
              <i class="float_left">制定标签</i>
              <i class="bao_her_d float_right" v-if="ziplu==1">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
               <i class="bao_her_d float_right" v-if="ziplu==2">
                <img src="../../assets/img/A/sign_open_icon@2x.png">
              </i>
            </li>
            <div v-if="ziplu==2">
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
                   style="line-height: 1.5rem"
                  class="float_left"
                  v-for="(item,index2) in list.comTagList"
                  :key="index2"
                  @click.stop="lableClick(index1,index2)"
                  :class="item.flag?'b_xianm_b_jiadian':''"
                >{{item.content}}</li>
              </ul>
            </div>
          </div>
          </div>
          </ul>
        </div>
      </div>
      <button @click="sousclick()" class="color background-d font-14 xiayi" style="margin-top:2rem!important;">搜索</button>
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
.yue{
	color: white;
	background-color: #FF8C00;
}
</style>
<script>
import {  getScenicByCity ,zhiding} from "@/utils/getData";
export default {
  name: "index",
  data() {
    return {
      dataList: [], //日期
      day: "", //日期的天
      daylist: [], //行程的天
      yue:1,//表示月份隐藏
      listpryue:'',
      minPrice: "",//小价格
      maxPrice: "",//大价格
      minpak: 2,
      scejing:[],//路途景点
      typlu:1,//路途景点是否显示
      ziplu:1,//制订是否显示
      getLtyp: [], //自定标签
      routeType: 1, //自定标签1常规路线
      cityid:'',//出发城市id
    };
  },
  created() {
    this.LopTime_list();
    this.dayListInit();
    this.priceInit();
    this.scenic(); //获取途径景点
    this.getLabeltyp();//制定标签
  },
  //计算属性
  computed: {
     //获取选择的日期
    date() {
      let lists = [];
      let data = [];//号
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
      console.log(lists);
      return lists;
    },
     //获取天数
    daysty() {
      let lists = [];
      for (const listday of this.daylist) {
        if (listday.flag) {
          lists.push(listday.day);
        }
      }
      console.log(lists);
      return lists;
    }
  },
 filters: {
    dayFilter: function(value) {
      if (!value) return;
      if (parseInt(value) < 15) return `${value}天`;
      return "15天以上";
    }
  },
  methods: {
    //点击搜索跳转
    sousclick(){
    this.$router.push({
     name: 'F_details',
     params: {
     folis:1,
    //date:JSON.stringify(this.date),//年月日
     date:this.date,
     tagContent:this.tagContent,//属性
     daysty:this.daysty,//天数
     minPrice:this.minPrice,//最小价格
     maxPrice:this.maxPrice,//最大价格
     scenicSpotid:this.scenicSpotid,//景点id
     }
     })
    },
    //制订点击
     lableClick(index1, index2) {
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
    },
    //路途景点显示
    lutclick(){
     if(this.typlu==1){
       this.typlu=2;
     }else{
       this.typlu=1;
     }
    },
    //制订点击显示
    ziclick(){
      if(this.ziplu==1){
       this.ziplu=2;
     }else{
       this.ziplu=1;
     }
    },
    //路途景点选
    sceClick(index) {
      this.scenicSpotid = [];
      this.scejing[index].flag = !this.scejing[index].flag;
      for (const list of this.scejing) {
        if (list.flag) {
          this.scenicSpotid.push(list.scenicSpotid); //id
        }
      }
    },
    //价格选定
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
    },
    //点击输入价格
    prmClick() {
      this.minpak = 1;
      for (const listpr of this.priceList) {
        this.$set(listpr, "flag", false);
      }
    },
    //点击天数选定
     dayClick(index) {
      this.daylist[index].flag = !this.daylist[index].flag;
      if (this.daylist); //多选 daylist[index].flag=true//为选中天数
      return;
    },
    //确定月份
    yuetpy(listpryue){
    this.yue=1;
    console.log(listpryue);
    for(const srt of listpryue.days){
      if(srt.flag==true){
        this.$set(listpryue,'falg_a',true);
        return;
      }
      this.$set(listpryue,'falg_a',false);
    }
    },
    //月份点击
    monthClick(index) {
    this.yue=2;
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
  },
  //点击选中几号
  datyclick(index){
   this.listpryue.days[index].flag = !this.listpryue.days[index].flag;
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
    //行程天数
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
    //价格初始化
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
          this.$set(map, "content", "1K-3K");
          this.$set(map, "flag", false);
        }
        if (k == 2) {
          this.$set(map, "minPrice", 3000);
          this.$set(map, "maxPrice", 4999);
          this.$set(map, "content", "3K-5K");
          this.$set(map, "flag", false);
        }
        if (k == 3) {
          this.$set(map, "minPrice", 5000);
          this.$set(map, "content", "5K以上");
          this.$set(map, "flag", false);
        }
        this.priceList.push(map);
      }
      console.log(this.priceList);
    },
    //路途景点
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
  }
};
</script>

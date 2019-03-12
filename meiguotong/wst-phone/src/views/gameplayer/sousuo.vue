<template>
  <div class="index" style="background-color:#F5F5F5">
    <div class="dingjia_b">
      <div class="sou_her background-a sou_her_jia">
        <ul class="sou_her_a">
          <li class="float_left font-16">
            <button class="color-f" style="margin-top: 0.3rem;">取消</button>
          </li>
          <li class="sou_her_b">
            <i class="sou_her_d">
              <img src="../../assets/img/A/ic_search.png">
            </i>
            <i>
              <input class="font-12 color-f" type="text" placeholder="搜索旅游地/当地玩家/景点/油轮">
            </i>
          </li>
          <li class="float_right font-16">
            <button class="sou_her_c color background-d">搜索</button>
          </li>
        </ul>

        <ul class="sou_her_q color font-12">
          <li>
            <i class="color-g">常规旅行</i>
            <i class="sou_her_q_a"></i>
          </li>
          <li>
            <i>当地参团</i>
            <i></i>
          </li>
          <li>
            <i>当地玩家</i>
            <i></i>
          </li>
          <li>
            <i>油轮</i>
            <i></i>
          </li>
          <li>
            <i>景点</i>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="brijtan_b" v-if="type!=0"></div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>日期</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(2)">
              <i>行程</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(3)">
              <i>价格预算</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(4)">
              <i>全部筛选</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
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
                :class="list.flag?'b_xianm_b_jiadian':''"
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
            @click="queding(1)"
          >确定</button>
        </div>
        <!--全部筛选-->
        <div class="qyuanb ong_z" v-if="type==4">
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
                :class="list.flag?'b_xianm_b_jiadian':''"
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

          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding(2)"
          >确定</button>

          <div class="di_s_b_dengl_chonz font-16">
            <button class="float_left di_s_b_dengl_chonz_a color-d">重置</button>
            <button
              class="float_right di_s_b_dengl_chonz_b border_b color-b"
              @click="queding(index)"
            >取消</button>
          </div>
        </div>
      </div>
    </div>

    <div class="dingjia_a">
      <div class="dingjia_a_ajia">
        <ul class="sou_her_www font-14">
          <li @click="sertey(1)" :class="[srtype==1?'sou_her_www_a':'']">
            <button>销量</button>
          </li>
          <li @click="sertey(4)" :class="[srtype==4?'sou_her_www_a':'']">
            <button>好评</button>
          </li>
          <li @click="sertey(2)" :class="[srtype==2?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon.png">
              </i>
            </span>
          </li>
          <li @click="sertey(3)" :class="[srtype==3?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon - 1.png">
              </i>
            </span>
          </li>
        </ul>
      </div>

      <div class="ze_x">
        <div class="ze_x_a" v-for="(sert,index) in styser" :key="index">
          <div style="overflow:hidden;">
            <div class="float_left ze_x_le">
              <img :src="sert.carImg">
            </div>
            <div class="float_left ze_x_ril">
              <div class="font-14 ze_x_ril_jia">{{sert.title}}</div>
              <ul class="font-12 ze_x_ril_a color-b">
                <li>限时特卖</li>
                <li>限时特卖</li>
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
    </div>
  </div>
</template>
<script>
import { seledin,getScenicByCity } from "@/utils/getData"
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: "index",
  data() {
    return {
      type: "", //1日期，2行程，3价格，4全部，
      srtype: 1, //1综合，2销量，3降价格，4升价格
      styser: [], //列表数据
      imgtep: [], //列表图片
      dataList: [], //日期
      day: "", //日期的天
      daylist: [], //行程的天
      minPrice: "",
      maxPrice: "",
      minpak: 2,
      maxpak: 2,
      mescroll: null, // mescroll实例对象
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback,   //回调
				toTop: {
					//回到顶部按钮
					src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
					offset: 1000 //列表滚动1000px才显示回到顶部按钮
				},
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
      for (const list of this.dataList) {
        if (list.flag) {
          lists.push(list);
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
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
        // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  },
  created() {
    this.LopTime(); //获取当前一年的月份和天数
    this.routine(); //一进去默认常规没有筛选数据
    this.LopTime_list(); //12个月循环
    this.dayListInit(); //天数初始化
    this.priceInit(); //价格初始化
    this.scenic(); //获取途径景点
  },
  filters: {
    dayFilter: function(value) {
      if (!value) return;
      if (parseInt(value) < 15) return `${value}天`;
      return "15天及以上";
    }
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
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
      this.routine();
    },
    //月份点击
    monthClick(index) {
      this.dataList[index].flag = !this.dataList[index].flag;
      if (this.dataList); //多选 当datalist[index].flag=true//为选中月分
      this.routine();
      return;
    },
    LopTime(year = new Date().getFullYear(), month = new Date().getMonth()) {
      //计算这个月多少天
      let day = new Date(year, month, 0).getDate(); //当月总天数
      console.log("这个月共" + day + "天");
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
          days.push(k);
        }
        this.$set(map, "days", days.toString());
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
      this.daylist[index].flag = !this.daylist[index].flag;
      if (this.daylist); //多选 daylist[index].flag=true//为选中天数
      this.routine();
      return;
    },
    //点击价格的选中
    contentClick(index) {
      this.priceList.map(elem => {
        elem.flag = false;
      });
      this.minpak = 2;
      this.maxpak = 2;
      this.priceList[index].flag = !this.priceList[index].flag;
      // this.minPrice=priceList[index].minPrice;
      for (const listpr of this.priceList) {
        if (listpr.flag) {
          this.minPrice = listpr.minPrice; //最小价格
          this.maxPrice = listpr.maxPrice; //最大价格
        }
      }
      console.log("最小价格" + this.minPrice + "最大价格" + this.maxPrice);
      this.routine();
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
    queding(index) {
      if (index == 1) {
        this.routine();
        this.type = 0;
      }
    },
    async routine() {
      let data = await seledin(
        JSON.stringify(this.date),
        this.daysty,
        this.srtype,
        this.minPrice, //小价格
        this.maxPrice, //大价格
        this.name,//景点
        this.scenicSpotid,//景点ID
      );
      if (data) {
        this.styser = data.list;
        for (const list of this.styser) {
          if (list.carImg) {
            this.$set(list, "carImg", list.carImg.split(",")[0]);
          }
        }
      }
    },
    async scenic() {
      let data = await getScenicByCity();
      if (data) {
        this.scejing = data;
        for(const list of this.scejing){
          this.$set(list,"flag",false);
          if(list.flag){
            this.name=list.name;
            this.scenicSpotid=list.scenicSpotid;
          }
        }
      }
    },
    sceClick(index){
      this.scejing[index].flag = !this.scejing[index].flag;
      this.routine();
    }
  }
};
</script>

<template>
  <div class="index">
    <div class="dingjia_b">
      <div class="sou_her background-a sou_her_jia" style="clear:both">
        <ul class="sou_her_a">
           <router-link to="/indexher">
          <li class="float_left font-16">
            <button class="color-f" style="margin-top: 0.3rem;">取消</button>
          </li>
          </router-link>
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
          <router-link to="/sousuo">
            <li>
              <i class="color">常规旅行</i>
              <i></i>
            </li>
          </router-link>
          <router-link to="delegation">
            <li>
              <i class="color">当地参团</i>
              <i></i>
            </li>
          </router-link>
          <li>
            <i class="color-g">当地玩家</i>
            <i class="sou_her_q_a"></i>
          </li>
          <router-link to="/Tanker">
          <li>
            <i class="color">邮轮</i>
            <i></i>
          </li>
          </router-link>
           <router-link to="/Scenicspot">
          <li>
            <i class="color">景点</i>
            <i></i>
          </li>
          </router-link>
        </ul>
      </div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>年龄</i>
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
              <i>性别</i>
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
              <i>擅长</i>
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
        <div class="brijtan_b" v-if="type!=0"></div>
        <!--年龄段-->
        <div class="ong_z" v-if="type==1">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">年龄段</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list,index) in agetley"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click.stop="nianlinggag(index)"
              >{{list.guid}}</li>
            </ul>
          </div>
        </div>

        <!--性别-->
        <div class="ong_z" v-if="type==2">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">性别</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list,index) in Gendertlyp"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click.stop="xingbie(index)"
              >{{list.guid}}</li>
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
            </ul>
          </div>
        </div>
        <!--全部筛选-->
        <div class="qyuanb ong_z" v-if="type==4">
           <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">擅长</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li
                class="float_left"
                v-for="(item,index) in getLtyp"
                :key="index"
                 @click.stop="lableClick(index)"
                :class="item.flag?'b_xianm_b_jiadian':''"
              >{{item.content}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="dingjia_a">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div class="wanjia_jia">
          <div class="wanjia_a border_a" v-for="(style,index) in styser" :key="index" @click="wanjiaclick(style)">
            <div class="wanjia_b">
              <img style="width: 100%;" v-lazy="style.img">
            </div>
            <div class="wanjia_c">
              <img style="width: 100%; height: 100%;" v-lazy="style.photo">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14" style="margin-top: 0.3rem;">{{style.realName}}</li>
                <li class="font-12 color-b wanjia_e">{{style.introduction}}</li>
                <li class="font-12 color-b">
                  <i class="wanjia_f">
                    <img src="../../assets/img/A/home_lydz_adres2_icon@2x.png">
                  </i>
                  {{style.countryName}}
                </li>
                <li class="font-14 color-b">
                  <i class="color-h">￥{{style.price}}</i>
                  <i>/天</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>

<style lang="less" scoped>
.mescroll {
  position: fixed;
  z-index:9;
  top: 7rem;
  bottom: 0;
  height: auto;
}
</style>

<script>
import { wanjia,zhiding } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      styser: [], //列表数据
      type: "", //1年龄段，2性别，3价格，4全部，
      agetley: [], //年龄初始化列表
      Gendertlyp: [], //性别初始化
      priceList: [], //价格初始化
      minPrice:"",//最小价格
      maxPrice:"",//最大价格
      getLtyp:[],//自定标签

      routeType:5,//自定标签1常规路线,2当地
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.gamewanjia, //回调
        	page: {
					size: this.$store.state.pageSize, //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "http://www.mescroll.com/img/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  created() {
    this.age(); //年龄初始化
    this.Gender(); //性别初始化
    this.priceInit(); //价格初始化
    this.getLabeltyp();//获取基本参数
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  //计算属性
  computed: {
    //年龄获取
    guideAge() {
      let lists = [];
      for (const list of this.agetley) {
        if (list.flag) {
          lists.push(list.guideAge);
        }
      }
      return lists;
    },
    //性别获取
    guideSex() {
      let lists = [];
      for (const list of this.Gendertlyp) {
        if (list.flag) {
          lists.push(list.guideSex);
        }
      }
      return lists;
    },
    //获取属性
    shuxin(){
      let tagid = [];
      for(const item of this.getLtyp){
      if(item.flag){
        tagid.push(item.tagid);
      }
      }
      return tagid
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
    }
  },
  methods: {
    //点击跳详情
    wanjiaclick:function(style){
      this.$router.push({
     path: '/H_detail/'+style.id,
     })
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //点击展示
    teypex(index) {
      if (this.type != 0 && this.type == index) {
        this.type = "";
      } else {
        this.type = index;
      }
    },
    //点击年龄选中
    nianlinggag(index) {
      this.agetley[index].flag = !this.agetley[index].flag;
      this.mescroll.resetUpScroll();
    },
    //点击性别选中
    xingbie(index) {
      this.Gendertlyp[index].flag = !this.Gendertlyp[index].flag;
      this.mescroll.resetUpScroll();
    },
    //点击价格选择
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
      this.mescroll.resetUpScroll();
    },
    //年龄初始化
    age() {
      this.agetley = [];
      for (let k = 0; k < 5; k++) {
        let map = {};
        if (k == 0) {
          this.$set(map, "guideAge");
          this.$set(map, "guid", "不限");
          this.$set(map, "flag", false);
        }
        if (k == 1) {
          this.$set(map, "guideAge", 20000);
          this.$set(map, "guid", "00后");
          this.$set(map, "flag", false);
        }
        if (k == 2) {
          this.$set(map, "guideAge", 1990);
          this.$set(map, "guid", "90后");
          this.$set(map, "flag", false);
        }
        if (k == 3) {
          this.$set(map, "guideAge", 1980);
          this.$set(map, "guid", "80后");
          this.$set(map, "flag", false);
        }
        if (k == 4) {
          this.$set(map, "guideAge", 1970);
          this.$set(map, "guid", "70以上");
          this.$set(map, "flag", false);
        }
        this.agetley.push(map);
      }
      console.log(this.agetley);
    },
    //性别初始化
    Gender() {
      this.Gendertlyp = [];
      for (let k = 0; k < 3; k++) {
        let map = {};
        if (k == 0) {
          this.$set(map, "guideSex");
          this.$set(map, "guid", "不限");
          this.$set(map, "flag", false);
        }
        if (k == 1) {
          this.$set(map, "guideSex", 1);
          this.$set(map, "guid", "男");
          this.$set(map, "flag", false);
        }
        if (k == 2) {
          this.$set(map, "guideSex", 2);
          this.$set(map, "guid", "女");
          this.$set(map, "flag", false);
        }
        this.Gendertlyp.push(map);
      }
    },
    //价格选择初始化
    priceInit() {
      this.priceList = [];
      for (let k = 0; k < 5; k++) {
        let map = {};
        if (k == 0) {
          this.$set(map, "minPrice", 0);
           this.$set(map, "maxPrice","");
          this.$set(map, "content", "不限");
          this.$set(map, "flag", false);
        }
        if (k == 1) {
          this.$set(map, "minPrice", 0);
          this.$set(map, "maxPrice", 200);
          this.$set(map, "content", "0-200天");
          this.$set(map, "flag", false);
        }
        if (k == 2) {
          this.$set(map, "minPrice", 200);
          this.$set(map, "maxPrice", 300);
          this.$set(map, "content", "200-300/天");
          this.$set(map, "flag", false);
        }
        if (k == 3) {
          this.$set(map, "minPrice", 300);
          this.$set(map, "maxPrice", 350);
          this.$set(map, "content", "300-350/天");
          this.$set(map, "flag", false);
        }
        if (k == 4) {
          this.$set(map, "minPrice", 350);
           this.$set(map, "maxPrice","");
          this.$set(map, "content", "350以上/天");
          this.$set(map, "flag", false);
        }
        this.priceList.push(map);
      }
      console.log(this.priceList);
    },
     //自定标签
     async getLabeltyp() {
      let data = await zhiding(this.routeType);
      if (data) {
       this.getLtyp=data;
       for(const list of this.getLtyp){
         this.$set(list,"flag",false)
       }
      }
    },
    lableClick(index){
      this.getLtyp[index].flag = !this.getLtyp[index].flag;
      this.mescroll.resetUpScroll();
    },
    //获取当地玩家
    async gamewanjia(page, mescroll) {
      let data = await wanjia(
        this.guideAge.toString(),
        this.guideSex.toString(),
        this.shuxin.toString(),
        this.minPrice,
        this.maxPrice,
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
    }
  }
};
</script>

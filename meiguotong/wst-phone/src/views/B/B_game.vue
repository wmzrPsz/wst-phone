<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/back_icon@2x.png" onclick="window.history.go(-1)">
      </i>
      <i class="her_a_zong color float_zhong">选择导游</i>
    </div>
    <div class="dingjia_b">
      <div class="brijtan_b" v-if="type!=0"></div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-14">
            <li @click="teypex(3)">
              <i>导游</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(1)">
              <i>年龄</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(2)">
              <i>性别</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(4)">
              <i>擅长</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/B/bjyw_open_icon@2x.png">
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

        <!--导游选择-->
        <div class="ong_z" v-if="type==3">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">导游</i>
          </div>
          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li :class="guideType==4? 'b_xianm_b_jiadian':''" @click="guideclick(4)">导游</li>
              <li :class="guideType==5? 'b_xianm_b_jiadian':''" @click="guideclick(5)">司机兼导游</li>
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
      </div>
    </div>
    <div class="dingjia_a">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div class="Guide_z" v-for="(list,index) in styser" :key="index">
          <input type="radio" :value="list.guideid" @click="radioclick(list.guideid)">
          <div class="float_left Guide_a beijingtu" @click="playerclick(list)">
            <img :src="list.photo">
          </div>
          <div class="float_left">
            <ul class="Guide_c">
              <Li class="font-16 text_let">{{list.realName}}</Li>
              <li class="font-12 Guide_b">
                <i v-for="(text,index) in list.tagContent.split(',')" :key="index">{{text}}</i>
              </li>
              <li class="font-12 Guide_d">
                <i>性别:{{list.sex |sectext}}</i>
                <i>年龄:{{list.age}}</i>
                <i>地区:{{list.cityName}}</i>
              </li>
            </ul>
          </div>
          <div class="Guide_e font-12 color-b">{{list.introduction}}</div>
          <div class="float_right" style="margin-top: 0.5rem">
            <div class="float_left">
              <i class="font-12 color-h">￥</i>
              <i class="font-18 color-h">{{list.price}}</i>
              <i class="font-16">/起</i>
            </div>
            <div class="float_left font-12 color-b Guide_f">{{list.commentNum}}条评论</div>
          </div>
        </div>
      </mescroll-vue>
    </div>
    <!--导游查看详情-->
    <van-popup v-model="show" position="bottom">
      <div>
        <div class="Game_player">
          <div class="Game_player_a">
            <div class="sanxing_a" style="border: none!important">
              <span class="float_left font-16">{{daoyoulist.realName}}</span>
              <i class="float_right Game_player_dian" @click="show=false">
                <img src="../../assets/img/B/bjyw_close_icon@2x.png">
              </i>
            </div>
            <div class="Game_player_b beijingtu">
              <img :src="daoyoulist.img">
            </div>
            <div class="Game_player_c beijingtu">
              <img :src="daoyoulist.photo">
            </div>
            <div class="font-12 Guide_b Game_player_e">
              <i v-for="(list,index) in teselist" :key="index">{{list}}</i>
            </div>
            <div
              class="font-14 text_let"
              style="line-height: 1.5rem; margin-top: 0.5rem;"
            >性别:{{daoyoulist.sex | sectext}}/年龄：{{daoyoulist.age}}/地址：{{daoyoulist.cityName}}</div>
            <div
              class="font-12 border_e text_let"
              style="padding-bottom: 0.3rem;"
            >{{daoyoulist.introduction}}</div>
          </div>
          <div class="sanxing_b border_e">
            <i>
              <img src="../../assets/img/B/clsp_3_icon@2x.png">
            </i>
            <div class="font-16 goods">退款说明</div>
            <ul class="queren">
              <Li class="font-12" v-for="(list,index) in refundist" :key="index">
                确认订单后提前
                <i class="color-h">{{list.refundDay}}</i>天，退单后返回
                <i class="color-h">{{list.refundNum}}%</i>
              </Li>
            </ul>
          </div>
          <div class="sanxing_b">
            <div class="float_left">
              <i class="float_left">
                <img src="../../assets/img/B/clsp_3_icon@2x.png">
              </i>
              <div class="font-16 goods float_left">评价</div>
            </div>
            <div class="font-14 float_right pingjia_a">
              <span class="color-h">4.9分</span>
              <span class="color-b">{{daoyoulist.commentNum}}条评论</span>
            </div>
          </div>
          <div class="border_e evaluate_wanjia_z">
            <div class="evaluate_wanjia_z_a" v-for="(list,index) in commentlistyp" :key="index">
              <div class="evaluate_wanjia_c beijingtu float_left">
                <img :src="list.memberPhoto">
              </div>
              <div class="evaluate_wanjia_d float_left">
                <div class="font-16 float_left">{{list.memberName}}</div>
                <van-rate v-model="list.level" readonly class="ez-star"/>
                <div class="font-12 color-b evaluate_wanjia_e">{{list.content}}</div>
                <div>
                  <div class="float_left font-14 color-b">{{list.createDate}}</div>
                  <div class="float_right font-14 color-b">
                    <div class="float_left evaluate_wanjia_f" @click="digCommentyp(list)">
                      <i>
                        <img src="../../assets/img/B/mddxq_zan_icon.png">
                      </i>
                      {{list.digNum}}
                    </div>
                    <div class="float_left evaluate_wanjia_f" @click="commentary(index)">
                      <i>
                        <img src="../../assets/img/B/mddxq_pinglun_icon.png">
                      </i>
                      {{list.childNum}}
                    </div>
                  </div>
                </div>
                <input
                  v-if="list.falg"
                  type="text"
                  :placeholder=" '回复@'+list.memberName"
                  class="erji_b font-12"
                  @keyup="showtyp($event)"
                  v-model="content"
                >
              </div>
            </div>
            <button class="font-12 wanjiahuof_a color-b" @click="qinglunlist()">全部评价</button>
          </div>
        </div>
      </div>
    </van-popup>
     <!--选择车辆-->
      <div class="Choose_a_room_dibu">
        <button
          class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g"
          @click="booklist()"
        >￥{{price}}预订</button>
      </div>
  </div>
</template>

<style lang="less" scoped>
.quanping {
  width: 100%;
  overflow: hidden;
}
.text_let {
  text-align: left;
}
.mescroll {
  position: fixed;
  z-index: 9;
  top: 5rem;
  bottom: 0;
  height: auto;
}
.dingjia_b {
  margin-top: 2.5rem;
}
.pingjia_a {
  overflow: hidden;
  margin-top: 0.2rem;
}
.pingjia_a span {
  margin-right: 0.5rem;
}
.sou_her_ww {
  background-color: #484b4e;
  overflow: hidden;
  color: white;
  position: fixed;
  width: 100%;
}
.ong_z {
  margin-top: 3rem;
}
.goods {
  text-align: left;
  margin-top: 0.7rem;
  margin-left: 0.5rem;
}
</style>

<script>
import { mapState } from "vuex";
import { mapMutations} from "vuex";
import { getGuideByCityUrl, zhiding, refundInforUrl,selectCommentUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      show: false,
      show1: false,
      refundist: [], //退款说明
      styser: [], //列表数据
      guidetyplist:{},//选中的导游
      price:0,//预订价格
      type: "", //1年龄段，2性别，3导游，4全部，
      agetley: [], //年龄初始化列表
      Gendertlyp: [], //性别初始化
      priceList: [], //价格初始化
      minPrice: "", //最小价格
      maxPrice: "", //最大价格
      getLtyp: [], //自定标签
      guideType: 4, //4.包车/租车-导游5.包车/租车-司兼导
      routeType: 5, //自定标签1常规路线,2当地
      daoyoulist: {}, //详情列表
      teselist: [], //属性
      commentlistyp:[],//评论列表
      pageNo:1,//展示第一条
      proType:12,
      productType: 12,
      content:'',//子评论的内容
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.gamewanjia, //回调
        page: {
          size: this.$store.state.pageSize //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "../../assets/img/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  created() {
    this.age(); //年龄初始化
    this.Gender(); //性别初始化
    this.priceInit(); //价格初始化
    this.getLabeltyp(); //获取基本参数
    console.log(this.pathlist);
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
    filters: {
    sectext: function(value) {
      if (value == 1) {
        return "男";
      }
      if (value == 2) {
        return "女";
      }
    },
  },
  //计算属性
  computed: {
    ...mapState({
      pathlist: state => state.route.pathlist
    }),
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
    shuxin() {
      let tagid = [];
      for (const item of this.getLtyp) {
        if (item.flag) {
          tagid.push(item.tagid);
        }
      }
      return tagid;
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
    ...mapMutations("route", ["guidetyplistyp"]),
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //点击跳详情
    wanjiaclick: function(style) {
      this.$router.push({
        path: "/H_detail/" + style.id
      });
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
      if (this.priceList[index].flag == false) {
        this.priceList.map(elem => {
          elem.flag = false;
        });
      }
      this.priceList[index].flag = !this.priceList[index].flag;
      // this.minPrice=priceList[index].minPrice;
      if (this.priceList[index].flag == true) {
        this.minPrice = this.priceList[index].minPrice; //最小价格
        this.maxPrice = this.priceList[index].maxPrice; //最大价格
      }
      if (this.priceList[index].flag == false) {
        this.minPrice = "";
        this.maxPrice = "";
      }
      this.mescroll.resetUpScroll();
    },
    //点击选择导游类型
    guideclick(index) {
      this.guideType = index;
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
          this.$set(map, "maxPrice", "");
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
          this.$set(map, "maxPrice", "");
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
        this.getLtyp = data;
        for (const list of this.getLtyp) {
          this.$set(list, "flag", false);
        }
      }
    },
    lableClick(index) {
      this.getLtyp[index].flag = !this.getLtyp[index].flag;
      this.mescroll.resetUpScroll();
    },
    //获取当地玩家
    async gamewanjia(page, mescroll) {
      let data = await getGuideByCityUrl(
        this.guideType,
        this.pathlist.certValidDate,
        this.pathlist.birthday,
        this.pathlist.cityid,
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
    },
    //点击查看导游详情
    playerclick: function(list) {
      this.show = true;
      this.daoyoulist = list;
      if (this.daoyoulist.tagContent) {
        this.teselist = this.daoyoulist.tagContent.split(",");
      }
      this.refund(list);
      this.commentlist(list);
    },
    //获取退款说明
    async refund(list) {
      let data = await refundInforUrl(list.guideid, this.productType);
      if (data) {
        this.refundist = data;
      }
    },
    //selectCommentUrl获取评论
    async commentlist(list){
      let data = await selectCommentUrl(
       this.pageNo,
       list.guideid,
       this.proType,
      )
    if(data){
      this.commentlistyp=data.list;
      for(let test of this.commentlistyp){
        this.$set(test,'falg',false);
      }
    }
    },
     //点击查看更多评论
    qinglunlist(){
       this.$router.push({
        path: "/comment/"+this.daoyoulist.guideid+this.proType
      });
    },
    //子评论
    	showtyp:function(ev){
    if(ev.keyCode == 13){
      let commentid=""
      for(let test of this.commentlistyp){
       if(test.falg==true){
         commentid=test.commentid
       }
      }
      this.zipingluntyp(commentid)
    }
    },
    //点击展示子评论input
    commentary(index){
      if(this.commentlistyp[index].falg==false){
        this.commentlistyp.map(elem => {
        elem.falg = false;
      });
      }
       this.commentlistyp[index].falg = !this.commentlistyp[index].falg;
    },
    //
  async zipingluntyp(commentid){
    let data = await addChildCommentUrl(
     commentid,
     this.content,
    )
    if(data){
       this.commentlist(this.vouchelist);
       this.content="";
    }
  },
  //
  radioclick(guideid){
   for(let list of this.styser){
     if(list.guideid==guideid){
       this.guidetyplist=list;
       this.price=this.guidetyplist.price
     }
   }
  },
  //预订
  booklist(){
     if (this.price == 0) {
        this.$toast("请选择导游");
        return;
      } else if (this.price != 0) {
        this.guidetyplistyp(this.guidetyplist);
        this.$router.push({
          path: "/B_rent"
        });
      }
  }
  }
};
</script>

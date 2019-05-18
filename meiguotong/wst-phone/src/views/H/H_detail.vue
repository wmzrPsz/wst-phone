<template>
  <div class="index">
    <div class="beijingtu Choose_a_room_a">
      <img src="../../assets/img/A/back_icon@2x.png" onclick="window.history.go(-1)">
    </div>
    <div class="flexslider">
      <van-swipe :autoplay="1000" class="flexslider_jia">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="Choose_a_room_b">
      <div class="Choose_a_room_b_j">
        <div class="martop_tou">
          <img :src="slist.photo">
        </div>
        <div class="martop">
          <div class="float_left font-16 martop_jia">{{slist.realName}}</div>
          <div class="float_left font-12 martop_jia color-b">{{slist.introduction}}</div>
        </div>
        <div style=" clear: both;">
          <div class="font-12 color-h float_left">
            ￥
            <i class="font-18 color-h">{{slist.price}}</i>
            <i class="color-b font-14">/起</i>
          </div>

          <div class="font-12 float_right color-b refund">
            <i @click="shuomiclick(1)">退款说明</i>
            <i @click="shuomiclick(2)">价格说明</i>
          </div>
        </div>
      </div>
    </div>

    <!--限时特卖优惠-->
    <div class="Choose_a_room_d_z">
      <div class="refund_z">
        <div
          class="font-14 gameplayer_f"
        >性别:{{slist.sex|sex}}/年龄:{{slist.age}}/地区:{{slist.cityName}}</div>
        <div class="refund_a font-12">
          <span v-for="(list,index) in tagContent" :key="index">{{list}}</span>
        </div>

        <div class="refund_b" @click="shijianclick()">
          <div class="float_left font-14">
            <i class="refund_b_a">
              <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
            </i>可定日期与价格
          </div>
          <div class="float_right refund_b_b">
            <img src="../../assets/img/B/search_cglv_open_icon@2x -a.png">
          </div>
        </div>
      </div>
      <div class="beu_he"></div>
    </div>
    <!--大众-->
    <div>
      <div class="Car_renting_z" v-for="(stycan,index) in can" :key="index" @click="yudingclick_a(stycan)">
        <div class="float_left beijingtu Car_renting">
          <img :src="stycan.photo">
        </div>
        <div class="float_right Car_renting_a">
          <div class="font-14">{{stycan.title}}</div>
          <div class="font-12 color-b Car_renting_b"><i>{{stycan.sceniceName.split(',').length}}旅游景点</i><i v-for="(tag, index) in stycan.sceniceName.split(',')" :key="index">{{tag}}<i>→</i></i></div>
          <div>
            <div class="float_left">
              <i class="font-12 color-h">￥</i>
              <i class="font-14 color-h">{{stycan.price}}</i>
              <i class="font-12">/起</i>
            </div>
            <div class="float_right font-12 color-b">成交数量{{stycan.transactionsNum}}笔</div>
          </div>
        </div>
      </div>
      <div @click="paginationtyp()"> 
      <van-pagination v-model="currentPage" :page-count=this.generalpage   mode="simple" />
      </div>
    </div>
    <div class="refund_z refun_jia">
      <div class="refund_c_tou">
        <ul class="font-12 refund_c_b">
          <li :class="[tuslit==1? 'refund_c_dian':'']" @click="dinaclick(1)">
            内容形成
            <i class="refund_c_c" v-if="tuslit==1">
              <img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png">
            </i>
          </li>
          <li :class="[tuslit==2? 'refund_c_dian':'']" @click="dinaclick(2)">
            用户点评
            <span class="font-12">({{pingluntyp.length}})</span>
            <i class="refund_c_c" v-if="tuslit==2">
              <img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png">
            </i>
          </li>
        </ul>

        <div class="qq">
          <!--行程内容-->
          <div class="ma xians_a" v-if="tuslit==1">
            <div class="refund_d_a">
              <i class="refund_d">
                <img src="../../assets/img/C/cglxxq_xingcheng_icon@2x.png">
              </i>
              <div class="font-14 refund_d_a_jia">行程内容</div>
            </div>

            <div class="refund_d_d font-14" v-for="(list,index) in listyp" :key="index">
              <div class="refund_d_e font-16">{{list.contentList[0].infor}}</div>

              <span class="refund_d_f beijingtu">
                <img :src="list.contentList[0].img">
              </span>
            </div>
          </div>
          <!--用户点评-->
          <div class="ma" v-if="tuslit==2">
            <div class="refund_d_a">
              <i class="refund_d">
                <img src="../../assets/img/C/cglxxq_dianping_icon@2x.png">
              </i>
              <div class="font-14 refund_d_a_jia">用户点评</div>
            </div>
            <div v-if="pingluntyp.length!=0">
              <div
                class="border_e evaluate_wanjia_z"
                v-for="(pinlist,index) in pingluntyp"
                :key="index"
              >
                <div class="evaluate_wanjia_z_a">
                  <div class="evaluate_wanjia_c beijingtu float_left">
                    <img v-lazy="pinlist.memberPhoto">
                  </div>
                  <div class="evaluate_wanjia_d float_left">
                    <div class="font-16 float_left">{{pinlist.memberName}}</div>
                    <div class="ez-star">
                      <van-rate v-model="pinlist.level" readonly/>
                    </div>
                    <div class="font-12 color-b evaluate_wanjia_e">{{pinlist.content}}</div>
                    <div>
                      <div class="float_left font-14 color-b">{{pinlist.createDate}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="font-12 wanjiahuof_a color-b" @click="pinglunclick()">查看更多</button>
          </div>
        </div>
      </div>
    </div>

    <div class="collection_di border_d">
      <div class="float_left collection_di_a" @click="souclick()">
        <i class="beijingtu" v-if="slist.ifcollection==1">
          <img src="../../assets/img/B/bjywle_star_icon@2x.png">
        </i>
        <i class="beijingtu" v-if="slist.ifcollection==2">
          <img src="../../assets/img/C/cglxxq_shouc_icon@2x.png">
        </i>
        <div class="font-14">收藏</div>
      </div>
      <div class="float_right collection_di_b">
        <button class="font-14">购物车</button>
        <button class="font-14 collection_di_c" @click="yudingclick()">订购</button>
      </div>
    </div>
    <van-popup v-model="show" class="refund_jia">
      <div>
        <p>退款说明</p>
       <p v-for="(list,index) in refund" :key="index">
          订单确认后,提前
          <i>{{list.refundDay}}</i>天退单,返回
          <i>{{list.refundNum}}</i>%
        </p>
      </div>
    </van-popup>
    <van-popup v-model="show1" class="refund_jia" :overlay="true">
      <div>
        <p>价格说明</p>
        <p>{{slist.priceInfor}}</p>
      </div>
    </van-popup>
    <!--日期说明-->
    <van-popup v-model="show2" :overlay="true" position="bottom">
      <div>
        <ezHeader></ezHeader>
      </div>
    </van-popup>
    <!-- <ezHeader></ezHeader> -->
  </div>
</template>
<style lang="less">
.refund_jia {
  width: 80% !important;
  overflow: hidden;
  border-radius: 8px;
  border: 1px slategray solid;
}
.refund_jia p {
  font-size: 13px !important;
  text-align: left;
  width: 90%;
  margin: 0.3rem auto;
}
.refund_jia p i {
  color: coral;
}
.martop {
  width: 80%;
  float: right;
}
.martop_tou img {
  width: 100%;
  height: 100%;
}
.martop_tou {
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 50px;
  float: left;
}
</style>
 <script>
import {
  guideDetailsUrl,
  guideRouteUrl,
  getRouteContpy,
  saveCollectionUrl,
  deleteCollectionUrl,
  selectCommentUrl,
  refundInforUrl
} from "@/utils/getData";
import store from "@/vuex/index";
import ajax from "@/utils/fetch";
import ezHeader from "@/views/H/H_orderlist.vue";
import { mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      images: [], //轮播图片
      routeid: this.$route.params.routeid, //id
      slist: "", //详情
      tagContent: [], //擅长
      can: [], //导游推荐路线列表
      tuslit: 1, ////1内容形成2用户评价3用户质询4视屏质料
      listyp: [], //内容
      pageNo: 4, //默认2条
      currentPage: 1, //推荐行程一开始默认显示第一条
      generalpage:0,
      proType: 8, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.酒店10.保险11.旅游定制12导游 13.攻略评论 14.城市评论',
      pingluntyp: [], //评论列表
      yonghutyp: [], //用户资讯列表
      collectionType: 3, //收藏1.常规路线2.当地参团3.当地玩家4.游轮5.景点
      productType: 11, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票9.酒店10.保险11.当地玩家12.旅游定制-导游13.旅游定制-司兼导14包车/租车-导游//15包车/租车-司兼导
      imgtyp: "",
      show: false,
      show1: false,
      show2: false,
      refund:[], //退款
    };
  },
  components: {
    ezHeader
  },
  filters: {
    sex: function(value) {
      if (value == 1) {
        return "男";
      }
      if (value == 2) {
        return "女";
      }
    }
  },
  mounted() {
    this.styget();
    this.cantyp();
    this.styneiryp();
    this.selectyp(); //评价
  },
  methods: {
    paginationtyp(){
    this.cantyp();
    console.log(this.generalpage);
    return;
    },
    ...mapMutations("route", ["gameplayer","Recommendlist"]),
    //点击预订
    yudingclick: function() {
      this.$router.push({
        path: "/H_book/" + this.routeid + "/" + "1"
      });
      this.gameplayer(this.slist);
    },
    //点击推荐路线预订
    yudingclick_a:function(stycan){
    this.$router.push({
        path: "/H_book/" +stycan.id + "/" + "2"
      });
      this.Recommendlist(stycan);
    },
    //点击显示时间
    shijianclick() {
      this.show2 = true;
    },
    //点击查看更多评论
    pinglunclick: function() {
      this.$router.push({
        path: "/comment/" + this.routeid + this.proType
      });
    },
    //评价
    async selectyp() {
      let data = await selectCommentUrl(
        this.pageNo,
        this.routeid,
        this.proType
      );
      if (data) {
        this.pingluntyp = data.list;
      }
    },
    //退货说明
    async tuihuotyp() {
      let data = await refundInforUrl(this.routeid, this.productType);
      if (data) {
        this.refund = data;
        this.show = true;
      }
    },
    //当地玩家详情
    async styget() {
      let data = await guideDetailsUrl(this.routeid);
      if (data) {
        this.slist = data;
        if (data.img) {
          this.images = data.img.split(",");
        }
        if (data.tagContent) {
          this.tagContent = data.tagContent.split(",");
        }
        if (data.scenicContent) {
          this.scenicContent = data.scenicContent.split(",");
        }
      }
    },
    //当地玩家推荐路线
    async cantyp() {
      let data = await guideRouteUrl(this.routeid, this.currentPage);
      if(data){
        this.can = data.list;
        this.generalpage=data.totalPage
        return;
      }
    },
    //切换
    dinaclick(index) {
      this.tuslit = index;
    },
    //内容
    async styneiryp() {
      let data = await getRouteContpy(this.routeid);
      this.listyp = data;
    },
    //点击收藏
    souclick() {
      this.scstyle();
    },
    //添加收藏
    async scstyle() {
      if (store.state.loginUid != 0) {
        //登陆了
        //2收藏
        let data = await saveCollectionUrl(this.routeid, this.collectionType);
        if (data) {
          this.styget();
        }
      }
      if (store.state.loginUid == 0) {
        this.$toast("请先登陆");
      }
    },
    //点击退货说明
    shuomiclick(index) {
      //退货说明
      if (index == 1) {
        if (store.state.loginUid != 0) {
          this.tuihuotyp();
        } else {
          this.$toast("请先登录");
        }
      }
      if (index == 2) {
        this.show1 = true;
      }
    }
  }
};
</script>
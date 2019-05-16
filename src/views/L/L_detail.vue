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
          <div class="">
            <div class="martop_jia font-16">{{slist.name}}</div>
            <div class="color-h text_left font-14">{{slist.countryName}}●{{slist.cityName}}</div>
          </div>
        <div style=" clear: both; margin-top: 0.5rem">
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
        <div class="refund_a font-12">
          <span v-for="(ter,index) in tagContent" :key="index">{{ter}}</span>
        </div>
        <div class="refund_aa">
          <span class="font-12 color-b">地址:{{slist.address}}</span>
          <span class="font-12 color-b">详情:{{slist.content}}</span>
        </div>
      </div>
    </div>
    <div class="beu_he"></div>
    <div class="refund_z jindian_c">
          <div class="jindian_b" v-for="(telist,index) in booklist" :key="index">
          <div class="font-14 text_left">{{telist.name}}</div>
          <div style="margin-top: 0.5rem">
            <div class="float_left jindian_a">
              <div class="font-12 color-b text_left">提前预订时间{{telist.rule}}/天 市场价￥{{telist.marketPrice}}</div>
            </div>
            <div class="float_right">
              <button class="room_c_b_delete font-14" style="background-color:#FF8247" @click="yudingclick(telist)">预约</button>
              </div>
          </div>
        </div>
    </div>
    <div class="refund_z refun_jia">
      <div class="refund_c_tou">
        <ul class="font-12 refund_c_b">
          <li :class="[tuslit==1? 'refund_c_dian':'']" @click="dinaclick(1)">
            预订通知
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
           <li :class="[tuslit==3? 'refund_c_dian':'']" @click="dinaclick(3)">
            景点介绍
            <span class="font-12">({{pingluntyp.length}})</span>
            <i class="refund_c_c" v-if="tuslit==3">
              <img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png">
            </i>
          </li>
        </ul>

        <div class="qq">
          <!--预订-->
          <div class="ma xians_a" v-if="tuslit==1">
            <div class="refund_d_a">
              <i class="refund_d">
                <img src="../../assets/img/C/jdxq_ydxz_icon@2x.png">
              </i>
              <div class="font-14 refund_d_a_jia">预订通知</div>
            </div>
            <div v-html="slist.reserveInfo" class="text_left"></div>
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
           <!--景点介绍-->
          <div class="ma xians_a" v-if="tuslit==3">
            <div class="refund_d_a">
              <i class="refund_d">
                <img src="../../assets/img/C/jdxq_jdjs_icon@2x.png">
              </i>
              <div class="font-14 refund_d_a_jia">景点介绍</div>
            </div>
            <div v-html="slist.introduce" class="text_left"></div>
          </div>
          <div>
                  <div class="visual_bb font-14">
                    <i class="visual_b">
                      <img src="../../assets/img/A/gant.png">
                    </i>
                    <i>产品经理推荐</i>
                  </div>
                  <ul class="visual_c font-14">
                    <li>
                      <i>
                        <img src="../../assets/img/B/bjyw_star_icon@2x.png">
                      </i>
                      <span class="text_left" v-html="slist.recommend"></span>
                    </li>
                  </ul>
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
        <button class="font-14 collection_di_c">订购</button>
      </div>
    </div>
    <van-popup v-model="show" class="refund_jia">
      <div>
        <p>退款说明</p>
        <p>
          订单确认后,提前
          <i>{{refund.refundDay}}</i>天退单,返回
          <i>{{refund.refundNum}}</i>%
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
.martop_jia{
  width: 100%;
  min-height:1.5rem;
}
.text_left{
  text-align: left;
}
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
  getScenicDetailsUrl,
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
      scenicid: this.$route.params.scenicid, //id
      slist: "", //详情
      tagContent: [], //擅长
      can: [], //导游推荐路线列表
      tuslit: 1, ////1内容形成2用户评价3用户质询4视屏质料
      listyp: [], //内容
      pageNo:1, //默认第一1条
      currentPage: 1, //推荐行程一开始默认显示第一条
      generalpage:0,
      proType: 8, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.酒店10.保险11.旅游定制12导游 13.攻略评论 14.城市评论',
      pingluntyp: [], //评论列表
      yonghutyp: [], //用户资讯列表
      collectionType: 3, //收藏1.常规路线2.当地参团3.当地玩家4.游轮5.景点
      productType:7, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票9.酒店10.保险11.当地玩家12.旅游定制-导游13.旅游定制-司兼导14包车/租车-导游//15包车/租车-司兼导
      imgtyp: "",
      refund: "", //退款
      booklist:[],//预订列表
      show:false,
      show1:false,
      show2:false,
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
    this.selectyp(); //评价
  },
  methods: {
    paginationtyp(){
    console.log(this.generalpage);
    return;
    },
    ...mapMutations("route", ["spotlist"]),
    //点击预订
    yudingclick:function(telist){
       this.$router.push({
        path: "/L_book/"+telist.id
      });
      this.spotlist(this.slist);
    },
    //点击查看更多评论
    pinglunclick: function() {
      this.$router.push({
        path: "/comment/" + this.scenicid + this.proType
      });
    },
    //评价
    async selectyp() {
      let data = await selectCommentUrl(
        this.pageNo,
        this.scenicid,
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
    //景点详情
    async styget() {
      let data = await getScenicDetailsUrl(this.scenicid);
      if (data) {
        this.slist = data.scenicSpot;
        this.booklist = data.list;
        if (this.slist.imgUrl) {
          this.images = this.slist.imgUrl.split(",");
        }
        if (this.slist.tagContent) {
          this.tagContent =this.slist.tagContent.split(",");
        }
      }
    },
    //切换
    dinaclick(index) {
      this.tuslit = index;
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
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
        <div class="martop">
          <div class="float_left font-16 martop_jia">{{slist.title}}</div>
        </div>
        <div>
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
          <span class="font-12 color-d">{{slist.subtitle}}</span>
          <span class="font-12 color-b">编号2：本产品由测试及具有资质的合作旅行社提供相关服务</span>
        </div>
        <div class="refund_b" id="test6">
          <div class="float_left font-14">
            <i class="refund_b_a">
              <img src="../../assets/img/C/cglxxq_date_icon@2x.png">
            </i>可定日期与价格
          </div>
          <div class="float_right refund_b_b">
            <img src="../../assets/img/B/search_cglv_open_icon@2x -a.png">
          </div>
        </div>
        <div class="brijtan yinc"></div>
        <div class="calendar-box date-box time-info" id="calendar-box" style="display: none;"></div>
      </div>

      <div class="beu_he"></div>
      <div class="refund_z refun_jia">
        <div class="refund_c font-14">路线说明</div>
        <div class="font-14 color-b refund_c_a border_e">{{slist.infor}}</div>

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
            <li :class="[tuslit==3? 'refund_c_dian':'']" @click="dinaclick(3)">
              用户质询
              <i class="refund_c_c" v-if="tuslit==3">
                <img src="../../assets/img/A/home_rmzc_qiehuan_bg@2x.png">
              </i>
            </li>
            <li :class="[tuslit==4? 'refund_c_dian':'']" @click="dinaclick(4)">
              视屏质料
              <i class="refund_c_c" v-if="tuslit==4">
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
              <div class="refund_d_b">
                <ul class="font-12">
                  <div v-for="(tlsi,index) in scenicContent" :key="index" class="refund_d_b_hu_a">
                    <li>{{tlsi}}</li>
                    <i class="float_left">></i>
                  </div>
                </ul>
              </div>

              <div class="refund_d_c">
                <ul class="font-12 color-b">
                  <li
                    :class="[thifs==index? 'refund_d_c_jia':'']"
                    v-for="(styl,index) in daty"
                    :key="index"
                    @click="datatyp(index)"
                  >第{{styl}}天</li>
                </ul>
              </div>
              <div
                class="refund_d_d font-14"
                v-for="(lister,index) in listyp_a.contentList"
                :key="index"
              >
                <dl>{{lister.tripDate}}</dl>
                <dl class="color-b">
                  <dd class="refund_d_d_jia">{{lister.tripType|trip}}</dd>
                  <dd>30分钟</dd>
                </dl>
                <div class="refund_d_e font-16">{{lister.scenicName}}</div>
                <div class="refund_d_e color-b font-14">{{lister.infor}}</div>
                <span class="refund_d_f beijingtu" v-if="imgtyp==1">
                  <img v-lazy="lister.img">
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
            <!--用户质询-->
            <div class="ma" v-if="tuslit==3">
              <div class="refund_d_a">
                <i class="refund_d">
                  <img src="../../assets/img/C/cglxxq_kefu_icon@2x.png">
                </i>
                <div class="font-14 refund_d_a_jia">用户质询</div>
              </div>
              <div class="information">
                <ul v-for="(yonslit,index) in yonghutyp" :key="index">
                  <div class="font-14 color-d" style="	text-align: left">{{yonslit.content}}</div>
                  <div class="font-12" style="	text-align: left">客服回复:{{yonslit.contentRetply}}</div>
                  <span class="font-12 float_right color-b">{{yonslit.createDate}}</span>
                </ul>
              </div>
              <button class="font-12 wanjiahuof_a color-b" @click="yonghuclick()">查看更多</button>
            </div>
            <!--视屏质料-->

            <div class="ma" v-if="tuslit==4">
              <div class="refund_d_a">
                <i class="refund_d">
                  <img src="../../assets/img/C/cglxxq_ship_icon@2x.png">
                </i>
                <div class="font-14 refund_d_a_jia">视屏质料</div>
              </div>
              <div class="visual">
                <video src="../../assets/img/B/480.mp4" controls></video>
              </div>
              <div class="visual_a">
                <span class="font-16">备注信息</span>
                <span class="font-14 color-b">升级24小时专用接机</span>
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
                      <span>精品高性能精品</span>
                    </li>
                    <li>
                      <i>
                        <img src="../../assets/img/B/bjyw_star_icon@2x.png">
                      </i>
                      <span>精品高性能精</span>
                    </li>
                    <li>
                      <i>
                        <img src="../../assets/img/B/bjyw_star_icon@2x.png">
                      </i>
                      <span>精品高性能精品高性能精品高性能精品高性能精品高性能</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!---->
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
</style>

 <script>
import {
  getRouteDetailstyp,
  getRouteContpy,
  selectCommentUrl,
  getConsultUrl,
  saveCollectionUrl,
  deleteCollectionUrl,
  refundInforUrl
} from "@/utils/getData";
import store from "@/vuex/index";
import ajax from "@/utils/fetch";
import { mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      routeid: this.$route.params.routeid,
      slist: "", //详情
      images: [], //轮播图片
      tagContent: [], //属性
      scenicContent: [], //景点
      daty: [],
      listyp: [], //天数内容
      listyp_a: "", //选中天数内容
      thifs: 0, //展示第几天的数据
      tuslit: 1, //1内容形成2用户评价3用户质询4视屏质料
      pageNo: 4, //默认4条
      proType: 4, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩家9.酒店10.保险11.旅游定制12导游 13.攻略评论 14.城市评论',
      pingluntyp: [], //评论列表
      yonghutyp: [], //用户资讯列表
      collectionType: 1, //收藏1.常规路线2.当地参团3.当地玩家4.游轮5.景点
      productType: 4, //1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票9.酒店10.保险11.当地玩家12.旅游定制-导游13.旅游定制-司兼导14包车/租车-导游//15包车/租车-司兼导
      imgtyp: "",
      show: false,
      show1: false,
      refund: "" //退款
    };
  },
  filters: {
    trip: function(value) {
      if (value == 1) {
        return "就餐";
      }
      if (value == 2) {
        return "旅游";
      }
      if (value == 3) {
        return "其他";
      }
    }
  },
  mounted() {
    this.styget();
    this.styneiryp();
    this.selectyp(); //评价
    this.yonzityp(); //用户资讯
  },
  methods: {
    ...mapMutations("route", ["passwtyp"]),
    //点击预订
    yudingclick: function() {
      this.$router.push({
        path: "/F_book/" + this.routeid + "/" + this.slist.price
      });
      this.passwtyp(this.slist);
    },
    //点击查看更多评论
    pinglunclick: function() {
      this.$router.push({
        path: "/comment/" + this.routeid + this.proType
      });
    },
    //点击用户质询更多
    yonghuclick: function() {
      this.$router.push({
        path: "/information/" + this.routeid + this.proType
      });
    },
    //常规路线详情
    async styget() {
      let data = await getRouteDetailstyp(this.routeid);
      if (data) {
        this.slist = data;
        if (data.carImg) {
          this.images = data.carImg.split(",");
        }
        if (data.tagContent) {
          this.tagContent = data.tagContent.split(",");
        }
        if (data.scenicContent) {
          this.scenicContent = data.scenicContent.split(",");
        }
      }
    },
    //内容天数
    async styneiryp() {
      let data = await getRouteContpy(this.routeid);
      //天数
      for (let i = 1; i <= data.length; i++) {
        this.daty.push(i);
      }
      this.listyp = data;
      console.log(this.listyp);
      this.datatyp(0);
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
        console.log(this.pingluntyp.length);
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
    //用户资讯
    async yonzityp() {
      let data = await getConsultUrl(this.pageNo, this.routeid, this.proType);
      this.yonghutyp = data.list;
    },
    //添加收藏
    async scstyle() {
      if (store.state.loginUid != 0) {
        //登陆了
        //2收藏
        if (this.slist.ifcollection == 2) {
          let data = await saveCollectionUrl(this.routeid, this.collectionType);
          if (data) {
            this.styget();
          }
        }
        //取消收藏
        if (this.slist.ifcollection == 1) {
          let data = await deleteCollectionUrl(
            this.routeid,
            this.collectionType
          );
          if (data) {
            this.styget();
          }
        }
      }
      if (store.state.loginUid == 0) {
        this.$toast("请先登陆");
      }
    },
    //点击收藏
    souclick() {
      this.scstyle();
    },
    //点击第几天
    datatyp(index) {
      this.thifs = index;
      this.listyp_a = this.listyp[index];
      if (this.listyp_a.contentList.img != null) {
        this.imgtyp = 1;
      }
      console.log(this.listyp_a);
    },
    //切换
    dinaclick(index) {
      this.tuslit = index;
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

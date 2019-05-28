<template>
  <div class="index">
    <video src="../../assets/img/B/480.mp4" controls class="ez-video yinc"></video>
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" @click="Previous()">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">选择车辆</i>
    </div>
    <div class="dingjia">
      <div class="xijiu background-a color font-16">
        <ul>
          <li class="border_bai" @click="chioeclick(1)">
            车辆等级
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
            座位数
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
      <div class="ju_x" v-if="typst==1">
        <ul>
          <li
            class="font-14 color-b"
            v-for="(list,index) in 4"
            :key="index"
            @click="vehicleid(list)"
          >
            <i class="float_left">{{list | carLevelVc}}</i>
            <i class="float_right jiud_x_a" v-if="list==comfort">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
        </ul>
      </div>

      <div class="ju_x" v-if="typst==2">
        <ul>
          <li
            class="font-14 color-b"
            v-for="(list,index) in 7"
            :key="index"
            @click="seatclick(list)"
          >
            <i class="float_left">{{list}}</i>
            <i class="float_right jiud_x_a" v-if="list==seatNum">
              <img src="../../assets/img/B/bjyw_check_icon@2x.png">
            </i>
          </li>
        </ul>
      </div>
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit" class="mescrolist">
        <div v-for="(list,index) in styser" :key="index">
          <div class="Car_renting_z">
            <div class="float_left beijingtu Car_renting" @click="details(list)">
              <img :src="list.carImg">
            </div>
            <div class="float_right Car_renting_a" @click="details(list)">
              <div class="font-14">{{list.carName}}</div>
              <div class="font-12 color-b Car_renting_b">{{list.carTrait}}</div>
              <div>
                <ul class="Car_renting_c border_e color-b">
                  <li class="font-12">
                    <i class="beijingtu">
                      <img src="../../assets/img/B/bjywxzzc_zuowei_icon@2x.png">
                    </i>
                    {{list.seatNum}}座
                  </li>
                  <li class="font-12">
                    <i class="beijingtu">
                      <img src="../../assets/img/B/bjywxzzc_xinglii_icon@2x.png">
                    </i>
                    1-{{list.bagNum}}个容量
                  </li>
                  <li class="font-12">
                    <i class="beijingtu">
                      <img src="../../assets/img/B/bjywxzzc_shafa_icon@2x.png">
                    </i>
                    {{list.comfort | carLevelVc}}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div class="float_left">
                <div class="float_left font-12 color-c Car_renting_e" @click="videolist(list)">
                  <i class="Car_renting_d beijingtu">
                    <img src="../../assets/img/B/bjywxzzc_shipin_icon@2x.png">
                  </i>观看视屏
                </div>
                <a class="float_left font-12 color-b Car_renting_e">{{list.commentNum}}条评论</a>
              </div>
              <div class="float_right">
                <div class="float_left color-h font-14">
                  ￥{{list.price}}
                  <i class="font-12">起</i>
                </div>
                <div class="float_left Car_renting_f beijingtu" @click="joinclick(list)">
                  <img src="../../assets/img/B/bjywxzzc_add_icon@2x.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </mescroll-vue>
      <!--选择车辆-->
      <div class="Choose_a_room_dibu">
        <div class="Choose_a_room_dibu_a float_left" @click="Exhibitionclick()">
          <i class="Choose_a_room_dibu_b font-12 background-g">{{vehicletyplist.length}}</i>
        </div>
        <div class="Choose_a_room_dibu_c font-16 float_left">已选{{vehicletyplist.length}}辆车</div>
        <button
          class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g"
          @click="booklist()"
        >￥{{vehicleprice}}预订</button>
      </div>

      <!--已选择车辆-->
      <div class="brijtan" v-if="this.Exhibition==2" @click="Exhibitionclick()"></div>
      <div class="Choose_a_room_dibu_tan" v-if="this.Exhibition==2">
        <div class="font-14 Car_renting_i">已选择</div>
        <div class="kuandu Choose_a_room_dibu_tan_z">
          <div v-for="(list,index) in vehicletyplist" :key="index">
            <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c">
              <div class="Choose_a_room_d beijingtu float_left">
                <img :src="list.carImg">
              </div>
              <div class="Choose_a_room_d_a float_left">
                <i class="font-14">{{list.carName}}</i>
                <button
                  class="Choose_a_room_dibu_tan_b Car_renting_h float_right font-14"
                  @click="deletd(list)"
                >删除</button>
                <div class="Choose_a_room_dibu_tan_a">
                  <i class="font-12 color-h">￥</i>
                  <i class="font-16 color-h">{{list.price}}</i>
                  <i class="font-14">/起</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--玩家信息评价-->
    <div class="evaluate_wanjia yinc">
      <div class="evaluate_wanjia_a">
        <div class="sanxing_b border_e">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <text class="font-16">退款说明</text>
          <a class="float_right evaluate_wanjia_b beijingtu Game_player_dian">
            <img src="../../assets/img/B/bjyw_close_icon@2x.png">
          </a>
          <ul>
            <Li class="font-12">
              确认订单后，提前
              <i class="color-h">10</i>确认订单后，提前
              <i class="color-h">10</i>
            </Li>
            <Li class="font-12">
              确认订单后，提前
              <i class="color-h">10</i>确认订单后，提前
              <i class="color-h">10</i>
            </Li>
          </ul>
        </div>

        <div class="sanxing_b">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <text class="font-16">评价</text>
          <div class="font-14 float_right pingjia_a">
            <text class="color-h">4.9分</text>
            <text class="color-b">54条评论</text>
          </div>
        </div>
        <div class="border_e evaluate_wanjia_z">
          <div class="evaluate_wanjia_z_a">
            <div class="evaluate_wanjia_c beijingtu float_left">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="evaluate_wanjia_d float_left">
              <text class="font-16 float_left">绿水青山</text>
              <div class="ez-star"></div>
              <div class="font-12 color-b evaluate_wanjia_e">非常棒的一次体验非常棒的一次体验非常棒的一次体</div>
              <div>
                <text class="float_left font-14 color-b">2017-02-08</text>
                <div class="float_right font-14 color-b">
                  <text class="float_left evaluate_wanjia_f">
                    <i>
                      <img src="../../assets/img/B/mddxq_zan_icon.png">
                    </i>23
                  </text>
                  <text class="float_left evaluate_wanjia_f">
                    <i>
                      <img src="../../assets/img/B/mddxq_pinglun_icon.png">
                    </i>250
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border_e evaluate_wanjia_z">
          <div class="evaluate_wanjia_z_a">
            <div class="evaluate_wanjia_c beijingtu float_left">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="evaluate_wanjia_d float_left">
              <text class="font-16 float_left">绿水青山</text>
              <div class="ez-star"></div>
              <div class="font-12 color-b evaluate_wanjia_e">非常棒的一次体验非常棒的一次体验非常棒的一次体</div>
              <div>
                <text class="float_left font-14 color-b">2017-02-08</text>
                <div class="float_right font-14 color-b">
                  <text class="float_left evaluate_wanjia_f">
                    <i>
                      <img src="../../assets/img/B/mddxq_zan_icon.png">
                    </i>23
                  </text>
                  <text class="float_left evaluate_wanjia_f">
                    <i>
                      <img src="../../assets/img/B/mddxq_pinglun_icon.png">
                    </i>250
                  </text>
                </div>
              </div>
            </div>
          </div>
          <!--玩家回复-->
          <div class="wanjiahuof ">
            <div class="evaluate_wanjia_c_hiu beijingtu float_left">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="evaluate_wanjia_d float_left">
              <text class="font-14 float_left">绿水青山</text>
              <text class="float_right font-12 color-b">2017-02-08</text>
              <div class="font-12 color-b evaluate_wanjia_e">非常棒</div>
              <div></div>
              <!---->
            </div>
          </div>
        </div>
        <button class="font-12 wanjiahuof_a color-b">全部评价</button>
      </div>
    </div>
    <!-- 车辆视频 -->
    <van-popup v-model="show" class="vicslit">
     <div class="vicslit">
       <video :src="carVideo" controls class='vicslit_a'></video>
     </div>
    </van-popup>
    <!--车辆查看-->
     <van-popup v-model="show1" position='bottom' class="Game_player">
           <!--点击车辆信息-->
      <div class="Game_player ">
        <div class="Game_player_a">
          <div class="sanxing_a" style="border: none!important">
            <span class="float_left font-16">{{vouchelist.carName}}</span>
            <i class="float_right Game_player_dian" @click="show1=false">
              <img src="../../assets/img/B/bjyw_close_icon@2x.png">
            </i>
          </div>
          <div class="Car_renting_ce beijingtu">
            <img :src="vouchelist.carImg">
          </div>
          <div style="margin-top: 0.5rem;">
            <ul class="Car_renting_c color-b float_left">
              <li class="font-12">
                <i class="beijingtu">
                  <img src="../../assets/img/B/bjywxzzc_zuowei_icon@2x.png">
                </i>{{vouchelist.seatNum}}座
              </li>
              <li class="font-12">
                <i class="beijingtu">
                  <img src="../../assets/img/B/bjywxzzc_xinglii_icon@2x.png">
                </i>1-{{vouchelist.bagNum}}个容量
              </li>
              <li class="font-12">
                <i class="beijingtu">
                  <img src="../../assets/img/B/bjywxzzc_shafa_icon@2x.png">
                </i>{{vouchelist.comfort | carLevelVc}}
              </li>
            </ul>
            <div
              class="float_right font-12 color-c Car_renting_e"
              style="margin-top: 0.2rem; margin-right: 0px"
            >
              <i class="Car_renting_d beijingtu">
                <img src="../../assets/img/B/bjywxzzc_shipin_icon@2x.png">
              </i>观看视屏
            </div>
          </div>
          <div class="Car_renting_ce_a font-12 color-b border_e texe_left">{{vouchelist.carTrait}}</div>
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
              <span class="color-b">{{vouchelist.commentNum}}条评论</span>
            </div>
          </div>
            <div class="border_e evaluate_wanjia_z">
          <div class="evaluate_wanjia_z_a" v-for="(list,index) in commentlistyp" :key="index">
            <div class="evaluate_wanjia_c beijingtu float_left">
              <img :src="list.memberPhoto">
            </div>
            <div class="evaluate_wanjia_d float_left">
              <div class="font-16 float_left">{{list.memberName}}</div>
              <van-rate v-model="list.level" readonly  class="ez-star"/>
              <div class="font-12 color-b evaluate_wanjia_e">{{list.content}}</div>
              <div>
                <div class="float_left font-14 color-b">{{list.createDate}}</div>
                <div class="float_right font-14 color-b">
                  <div class="float_left evaluate_wanjia_f" @click="digCommentyp(list)">
                    <i>
                      <img src="../../assets/img/B/mddxq_zan_icon.png">
                    </i>{{list.digNum}}
                  </div>
                  <div class="float_left evaluate_wanjia_f" @click="commentary(index)">
                    <i>
                      <img src="../../assets/img/B/mddxq_pinglun_icon.png">
                    </i>{{list.childNum}}
                  </div>
                </div>
              </div>
              <input v-if="list.falg" type="text" :placeholder=" '回复@'+list.memberName" class="erji_b font-12" @keyup="showtyp($event)" v-model="content">
            </div>
          </div>
            <button class="font-12 wanjiahuof_a color-b" @click="qinglunlist()">全部评价</button>
        </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<style lang="less">
.erji_b{
  background-color: #eaedf0;
  line-height: 1.5rem;
  width: 100%;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.texe_left{
  text-align: left
}
.Game_player{
  width: 100%;
}
.pingjia_a{
  overflow: hidden;
  margin-top: 0.2rem;
}
.pingjia_a span{
  margin-right: 0.5rem;
}
.queren{
  text-align: left;
  overflow: hidden;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.goods{
  text-align: left;
  margin-top:0.7rem;
  margin-left: 0.5rem;
  
}
.vicslit_a{
  width:100%;
}
.Choose_a_room_dibu_a {
  height: 2rem;
  width: 2rem;
  border-radius: 50px;
  border: 1px solid gainsboro;
  overflow: hidden;
  background-image: url(../../assets/img/B/bjyw_hotel_icon@2x.png);
  background-size: 100% 100%;
  margin-left: 0.5rem;
  margin-top: 0.25rem;
}
.ju_x {
  position: fixed !important;
  top: 4.7rem;
}
.xijiu {
  position: fixed;
  width: 100%;
  top: 2.5rem;
}
.mescrolist {
  widows: 100%;
  position: fixed;
  top: 5rem !important;
  bottom: 2.5rem;
  height: auto;
}
.vicslit{
  width: 100%;
}
</style>
<script>
import { mapState } from "vuex";
import { carLevelVc } from "@/filters/custom";
import { getCarByRentUrl,refundInforUrl,selectCommentUrl,digCommentUrl,addChildCommentUrl} from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
import { mapMutations } from "vuex";
import store from '@/vuex/index';
import { stat } from 'fs';
export default {
  name: "index",
  data() {
    return {
      carVideo:"",//视频
      show:false,
      show1:false,
      vouchelist:{},//详情车辆
      Exhibition: 1, //1不展示选中的车辆2展示选择的车辆
      comfort: "", //车辆等级
      seatNum: "", //座位数
      serviceids: [], //汽车标题id
      styser: [], //车辆列表
      typst: 0, //1展示车辆等级2座位数
      productType:1,
      refundist:[],//退款说明
      pageNo:1,//展示第一条评论
      commentlistyp:[],//评论列表
      content:'',//子评论的内容
      proType:1,//评论产品类型1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩
      digType:1,//'点赞类型：1.评论点赞2.攻略点赞'
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.vehiclelist, //回调
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
  computed: {
    ...mapState({
      pathlist: state => state.route.pathlist,
      piaylist: state => state.route.piaylist,
      vehtyple: state =>state.route.vehicledata,//选中的车辆

    }),
    //计算选中的车辆
    vehicletyplist() {
      let vehicletlist = [];
      for (let list of this.styser) {
        let img = {};
        if (list.falg == true) {
          img = list;
          vehicletlist.push(img);
        }
      }
      return vehicletlist;
    },
    //计算选中车辆的总价
    vehicleprice() {
      let price = 0;
      for (let list of this.vehicletyplist) {
        price = price + list.price;
      }
      return price;
    }
  },
  mounted() {
    console.log(this.piaylist);
    this.serviceidslist();
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
  methods: {
    ...mapMutations("route", ["vehicledata"]),
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    chioeclick(index) {
      if (this.typst != index) {
        this.typst = index;
      } else if (this.typst == index) {
        this.typst = 0;
      }
    },
    //统计汽车标题id（用，隔开）
    serviceidslist() {
      for (let test of this.piaylist) {
        this.serviceids.push(test.serviceid);
      }
      console.log(this.serviceids);
    },
    //车辆列表
    async vehiclelist(page, mescroll) {
      let data = await getCarByRentUrl(
        this.pathlist.cityid, //城市id
        this.comfort,
        this.seatNum,
       this.serviceids.toString(),
        page.num
      );
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        //
        for (let telist of this.styser) {
          this.$set(telist, "falg", false);
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
    //点击选择车辆等级
    vehicleid(list) {
      if (this.comfort != list) {
        this.comfort = list;
      } else if (this.comfort == list) {
        this.comfort = "";
      }
      this.mescroll.resetUpScroll();
    },
    //点击选择座位数
    seatclick(list) {
      if (list != this.seatNum) {
        this.seatNum = list;
      } else if (this.seatNum == list) {
        this.seatNum = "";
      }
      this.mescroll.resetUpScroll();
    },
    //点击添加预订车辆
    joinclick(list) {
      if (list.falg == false) {
        this.$set(list, "falg", true);
      } else if (list.falg == true) {
        this.$toast("已添加");
      }
    },
    //点击展示选中的车辆
    Exhibitionclick: function() {
      if (this.Exhibition == 1) {
        this.Exhibition = 2;
      } else if (this.Exhibition == 2) {
        this.Exhibition = 1;
      }
    },
    //上一页
    Previous: function() {
      this.$router.push({
        path: "/B_rent"
      });
    },
    //点击预订
    booklist: function() {
      if (this.vehicleprice == 0) {
        this.$toast("请选择车辆");
        return;
      } else if (this.vehicleprice != 0) {
        this.vehicledata(this.vehicletyplist);
        this.$router.push({
          path: "/B_rent"
        });
      }
    },
    //点击删除选中的车辆
    deletd(list) {
      list.falg = false;
    },
    //点击观看视频
    videolist(list){
     this.carVideo=list.carVideo;
     this.show=true;
    },
    //点击查看详情
    details(list){
     this.show1=true;
     this.vouchelist=list;
     this.refund(list);
     this.commentlist(this.vouchelist)
    },
    //获取退款说明
    async refund(list){
      let data = await refundInforUrl(
        list.id,
        this.productType,
      );
      if(data){
        this.refundist=data;
      }
    },
    //selectCommentUrl获取评论
    async commentlist(list){
      let data = await selectCommentUrl(
       this.pageNo,
       list.id,
       this.proType,
      )
    if(data){
      this.commentlistyp=data.list;
      for(let test of this.commentlistyp){
        this.$set(test,'falg',false);
      }
    }
    },
    //评论点赞
    async digCommentyp(list){
       if(store.state.loginUid!=0){
        let data = await digCommentUrl(
        list.commentid,
        this.digType,
      )
      this.commentlist(this.vouchelist)
       }
       if(store.state.loginUid==0){
        this.$toast("请先登录")
       }
    },
    //点击查看更多评论
    qinglunlist(){
       this.$router.push({
        path: "/comment/"+this.vouchelist.id+this.proType
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
  }
  }
};
</script>


<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">预订</i>
    </div>
    <div class="dingjia_jia">
      <div class="font-14 business_affairs_d text_left">{{Liner.linerline.name}}</div>
      <!--预订列表日历-->
      <div class="ezslis">
        <div class="date-box_jia">
          <div class="ht-rili-querybox">
            <div class="ht-rili-datebox">
              <span class="ht-rili-leftarr" @click="monthLeftClick"></span>
              <span class="ht-rili-date">{{calendarDate.year}}年{{calendarDate.month}}月</span>
              <span class="ht-rili-rightarr" @click="monthRightClick"></span>
            </div>
          </div>
          <div class="ht-rili-entirety floatl">
            <div class="ht-rili-head">
              <div class="ht-rili-th">日</div>
              <div class="ht-rili-th">一</div>
              <div class="ht-rili-th">二</div>
              <div class="ht-rili-th">三</div>
              <div class="ht-rili-th">四</div>
              <div class="ht-rili-th">五</div>
              <div class="ht-rili-th">六</div>
            </div>
            <div class="ht-rili-body">
              <div
                :class="[list.flag?'ht-rili-onclick':'ht-rili-td-disabled','ht-rili-td',list.check?'ht-rili-td-active':'']"
                v-for="(list, index) in dataList"
                :key="index"
                @click="dayClick(index)"
              >
                <span class="ht-rili-day">
                  {{list.day}}
                  <!-- 1 -->
                  <i data-state="100" v-if="list.flag">余{{list.state}}</i>
                </span>
                <span class="ht-rili-money" v-if="list.flag">￥{{list.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" rom_d"  v-for="(list,index) in fanlistyp" :key="index">
        <div v-if="list.Room==false">
        <div class="business_affairs_d_a" @click.stop="fancliak(index)">
          <div class>
            <div class="Choose_a_room_d beijingtu float_left">
              <img :src="list.imgUrl">
            </div>
            <div class="Choose_a_room_d_a float_left">
              <i class="font-14 text_left" style="display: block;">{{list.name}}</i>
              <div class="business_affairs_d_b text_left">
                <i class="font-12 color-b text_left" v-if="list.checkInType==1">{{list.spec}}   {{list.checkInType |chifunt}} {{list.minPeopleNumber}}-{{list.maxPeopleNumber}}人 {{list.floor}}层</i>
                <i class="font-12 color-b text_left" v-if="list.checkInType==2">{{list.spec}}   {{list.checkInType |chifunt}} {{list.peopleNumber}}人 {{list.floor}}层</i>
                <li class="business_affairs_d_c_z float_right">
                  <i class="business_affairs_d_c">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                  <i class="business_affairs_d_c yinc_a">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                </li>
              </div>

              <div style="margin-top: -0.2rem;" class="text_left">
                <i class="font-12 color-h">￥</i>
                <i class="font-16 color-h">{{list.price}}</i>
                <i class="font-14">/起</i>
              </div>
            </div>
          </div>
        </div>
        <div class="font-14 rom_c" v-if="list.falg">
          <div class="rom_c_a" v-if="list.checkInType==1">
            <div class="text_left">选择数量</div>
            <div class="float_left room_a">
              <div class="float_left font-12 room_a_text">成年</div>
               <van-stepper v-model="list.adultNum" :min="list.adultmin" :max="list.adultmax"  :disable-input="falg" :change="fanchulick(list)" class="float_right vanstyle"/>
            </div>
            <div class="float_right room_a">
             <div class="float_left font-12 room_a_text">儿童</div>
              <van-stepper v-model="list.childNum" :min="list.childmin" :max="list.childmax" :disable-input="falg" :change="fanchulick_a(list)" class="float_right vanstyle"/>
            </div>
          </div>
           <div class="rom_c_a" v-if="list.checkInType==2">
            <div class="text_left">选择数量</div>
            <div class="float_left room_a">
              <div class="float_left font-12 room_a_text">成年</div>
               <van-stepper v-model="list.adultNum" :min="0" :max="list.peopleNumber" :disable-input="falg" :change="fanchulick(list)" class="float_right vanstyle"/>
            </div>
            <div class="float_right room_a">
             <div class="float_left font-12 room_a_text">儿童</div>
              <van-stepper v-model="list.childNum" :min="0" :max="list.peopleNumber" :disable-input="falg" :change="fanchulick(list)" class="float_right vanstyle"/>
            </div>
          </div>
          <div class="rom_c_a">
            <div class="text_left">选择房间</div>
              <van-stepper v-model="list.roomNum" :min="0" :disable-input="falg" class="float_left vanstyle" style=" margin-top: 0.5rem;"/>
            <div class="float_right">
              <div class="color-h float_right">
                <i class="font-12">总价:￥</i>
                <i class="font-16">{{(list.price*list.adultNum+list.price*list.childNum)*list.roomNum}}</i>
              </div>
              <div class="float_right room_c_b">
                <i class="font-10 color-b float_left room_c_b_a">人均：￥{{list.price}}</i>
                <button class="font-14 room_c_b_b" @click="wanclick(list)">完成</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <!--房间-->
      </div>
      <div class="Choose_a_room_dibu">
        <div class="Choose_a_room_dibu_a float_left" @click="xunclick()">
          <i class="Choose_a_room_dibu_b font-12 background-g">{{this.roomzong.length}}</i>
        </div>
        <div class="Choose_a_room_dibu_c font-16 float_left">已选{{this.roomzong.length}}件房间</div>
        <button class="Choose_a_room_dibu_d float_right background-d font-14" @click="nextstep()">￥{{estimatedprice}}预订</button>
      </div>
    </div>
    <!--已选择酒店-->
    <div class="brijtan yinc" @click="yinclick()"></div>
    <div class="Choose_a_room_dibu_tan yinc">
      <div class="kuandu Choose_a_room_dibu_tan_z">
        <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c" v-for="(list,index) in roomzong" :key="index">
          <div class="Choose_a_room_d beijingtu float_left">
            <img :src="list.imgUrl">
          </div>
          <div class="Choose_a_room_d_a float_left">
            <i class="font-14 text_left" style="display: block;">{{list.name}}</i>
            <div class="business_affairs_d_b">
               <i class="font-12 color-b text_left float_left" >{{list.roomNum}}间/ {{list.adultNum}}/成年人{{list.childNum}}/儿童</i>
              <button class="room_c_b_delete float_right font-14" @click="shanclick(list)">删除</button>
            </div>
            <div class="color-h float_left" style="margin-top: -0.5rem;">
              <i class="font-12">总价:￥</i>
              <i class="font-16">{{list.totalprice}}</i>
              <i class="font-10 color-b">人均：￥{{list.price}}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.room_a_text{
 margin-right: 0.5rem;
 display: block;
 line-height:1.5rem;
}
.vanstyle{
    overflow: hidden;
    border-radius: 50px;
}
.van-stepper__minus{
    background-color: white;
}
.van-stepper__input{
     background-color: white!important;
     color: #444!important;
}
.van-stepper__plus{
     background-color: white;
}
.text_left {
  text-align: left;
}
.ezslis {
  width: 95%;
  margin: 0.5rem auto;
  overflow: hidden;
}
.jiagefan ul {
  width: 95%;
  margin: auto;
  overflow: hidden;
}
.jiagefan ul li {
  margin-top: 0.5rem;
  width: 20%;
  height: 3rem;
  float: left;
  background: linear-gradient(0, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-90deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-180deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-270deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat;
  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
  background-position: left top, right top, right bottom, left bottom;
}
.jiagefan ul li i {
  font-size: 12px;
  text-align: center;
  line-height: 1rem;
}
.room_a {
  overflow: hidden;
  padding-bottom: 0.5rem;
}
.room {
  overflow: hidden;
  margin-top: 0.5rem;
}
.room_b {
  margin-top: 0.5rem;
  overflow: hidden;
  padding-bottom: 1.5rem;
}
.roomjia {
  width: 95%;
  margin-top: 1rem;
  margin: auto;
  left: 2.5%;
  overflow: hidden;
  margin-bottom: 3rem;
}
//
.date-box_jia {
  overflow: hidden;
  background: #f2f2f2;
  border: 1px solid #e6e8eb;
  box-shadow: 2px 5px 10px 2px #ccc;
  padding-bottom: 30px;
}
.calendar-box * {
  box-sizing: border-box;
}
.ht-rili-head {
  overflow: hidden;
  padding: 0 20px;
}
.ht-rili-querybox {
  overflow: hidden;
  position: relative;
  margin: auto;
}
.ht-rili-title {
  padding: 10px;
  display: inline-block;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}
.ht-rili-datebox {
  width: 70%;
  vertical-align: middle;
  padding: 10px;
  margin: 0 auto;
}
.ht-rili-close {
  position: absolute;
  width: 25px;
  height: 25px;
  line-height: 25px;
  top: 5px;
  right: 10px;
  padding: 0;
  font-size: 10px;
  color: #fff;
  opacity: 0.2;
  border-radius: 100%;
  background: #f60;
}
.ht-rili-close:hover {
  color: #fff;
  opacity: 0.4;
}
.ht-rili-date {
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 24px;
  line-height: 25px;
  vertical-align: middle;
  font-size: 13px;
}
.ht-rili-leftarr {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/img/C/ic_arrow_left@2x.png) left center no-repeat;
  background-size: contain;
  vertical-align: middle;
  cursor: pointer;
}
.ht-rili-rightarr {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/img/C/ic_arrow_right@2x.png) right center
    no-repeat;
  background-size: contain;
  vertical-align: middle;
  cursor: pointer;
}
.ht-rili-th {
  width: 14.25%;
  float: left;
  text-align: center;
  height: 45px;
  line-height: 45px;
  color: #737373;
}
.ht-rili-td-disabled {
  height: 3rem;
}

.ht-rili-td {
  width: 14.25%;
  float: left;
  text-align: center;
  height: 50px;
  background: #eef5fd;
  cursor: pointer;
  background: linear-gradient(0, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-90deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-180deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat,
    linear-gradient(-270deg, #dcdcdc 1px, #dcdcdc 1px) no-repeat;
  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
  background-position: left top, right top, right bottom, left bottom;
}
.ht-rili-body {
  overflow: hidden;
  padding: 0 20px;
}
.ht-rili-day {
  font-size: 10px;
  font-weight: 700;
  display: inline-block;
  width: 100%;
}
.ht-rili-day > i {
  font-size: 10px;
  padding-left: 3px;
  color: #888;
}
.ht-rili-money {
  display: inline-block;
  width: 95%;
  margin: auto;
  font-size: 10px;
  color: #f60;
  background: #fdefe5;
}
.ht-rili-onclick {
  color: #444;
}
.ht-rili-td-disabled {
  color: #bfc4ca;
}
.ht-rili-td-active {
  background: #3682e5;
  color: #fff;
}
.ht-rili-td-active .ht-rili-day > i {
  color: #fff;
}
.ht-rili-td-active .ht-rili-money {
  background: #3682e5;
}
.ht-custom {
  padding: 20px;
}
.ht-custom-left {
  float: left;
  width: 125px;
  height: 50px;
  font-size: 10px;
}
.ht-custom-right {
  float: left;
  width: 300px;
  height: 170px;
}
.ht-custom-right > div {
  width: 100%;
  float: left;
}
.ht-custom-right > .btn-group > button {
  width: 105px;
  height: 34px;
  border-radius: 25px;
  color: #fff;
  border: 1px solid #f60;
  outline: 0;
}
.ht-custom-right > .btn-group > button:focus {
  outline: 0;
}
.ht-custom-right > .btn-group > .total-price {
  color: #f60;
  background: #fff;
}
.ht-custom-right > .btn-group > .ht-btn-cart {
  background: #f60;
}
.ht-custom-right .counter-label {
  line-height: 40px;
  margin-right: 50px;
  margin-bottom: 20px;
}
.ht-rili-head .ht-rili-th {
  font-size: 10px !important;
}
.Choose_a_room_dibu_a{
	height:2rem;
	width: 2rem;
	border-radius:50px;
	border: 1px solid gainsboro;
	overflow:hidden;
    background: url(../../assets/img/B/bjyw_hotel_icon@2x.png);
	background-size: 100% 100%;
	margin-left: 0.5rem;
	margin-top: 0.25rem;
}
</style>
<script>
import { getLinePriceDetailsUrl,linerRoomListUrl} from "@/utils/getData";
import $ from "jquery";
import { async } from "q";
import store from "@/vuex/index";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {
      //选中价格
      pricetyps:0,//油轮路线价格
      listyp: "",
      lineid: this.$route.params.lineid,
      priceDate: "",
      priceDatejie: "",
      price: "", //价格
      calendarDate: {},
      currencySign: "",
      opt: [],
      dataList: [],
      date: "" ,//选择的日期
      fanlistyp:[],//房间列表
      falg:true,
      estimatedprice:0,//预计总价
      luestimatedprice:"",//路线总价格
      children_z:'',//儿童总人数
      adult_z:'',//成年人总人数

    };
  },
  //计算属性
  computed: {
    ...mapState({
      Liner: state => state.route.Liner
    }),
    //计算选好的房间
    roomzong(){
     let roomtyp=[];
     for(const textle of this.fanlistyp){
       if(textle.Room){
         roomtyp.push(textle);
       }
     }
     return roomtyp;
    }
  },
  filters:{
      chifunt:function(value){
       if(value==1){
           return "可入住";
       }
       if(value==2){
           return "必须入住";
       }
      }
  },
  created() {
    this.calendarDateInit();
    this.getIndexDay();
  },
  mounted() {
    this.timtslit();
  },

  methods: {
    ...mapMutations("route", ["Tanker"]),
    //日期接口
    async timtslit() {
      console.log(this.priceDate);
      let data = await getLinePriceDetailsUrl(this.lineid, this.priceDate);
      if (data) {
        let lists = [];
        for (const test of data) {
          let img = {};
          this.$set(img, "date", test.date);
          this.$set(img, "price", test.price);
          lists.push(img);
        }
        this.opt = lists;
        this.getIndexDay();
        console.log(this.opt);
        return;
      }
    },
    //点击左边月份
    monthLeftClick() {
      if (this.calendarDate.month <= 1) {
        this.calendarDate.year -= 1;
        this.calendarDate.month = 12;
      } else {
        this.calendarDate.month -= 1;
      }
      this.getIndexDay();
      this.timtslit();
      console.log(this.date);
    },
    //点击右边月份
    monthRightClick() {
      if (this.calendarDate.month == 12) {
        this.calendarDate.year += 1;
        this.calendarDate.month = 1;
      } else {
        this.calendarDate.month += 1;
      }
      this.getIndexDay();
      this.timtslit();
      console.log(this.date);
    },
    //点击日期
    dayClick(index) {
      this.date = this.dataList[index].date;
      if (this.dataList[index].flag) {
        this.activeChange();
      }
    },
    //改变选中的日期
    activeChange() {
      this.dataList.map(list => {
        this.$set(list, "check", false);
        if (list.flag && this.date && this.checkDate(this.date, list.date)) {
          this.$set(list, "check", true);
        }
        //获取选中的价格
        if (list.check == true) {
          this.listyp = list;
          this.pricetyps= this.listyp.price
         this.fanlist();
         this.yujiclick();
        }
      });
    },
    //日期初始化
    calendarDateInit() {
      this.calendarDate.today = new Date();
      this.calendarDate.year = this.calendarDate.today.getFullYear();
      this.calendarDate.month = this.calendarDate.today.getMonth() + 1;
      this.calendarDate.date = this.calendarDate.today.getDate();
      this.calendarDate.day = this.calendarDate.today.getDay();
    },
    //天数初始化
    getIndexDay() {
      this.isLeapYear();
      this.getDays();
      let dataList = [];
      this.calendarDate.monthStart = new Date(
        this.calendarDate.year + "/" + this.calendarDate.month + "/1"
      ).getDay();
      if (this.calendarDate.monthStart == 0) {
        this.calendarDate.monthStart = 7;
      }
      for (let i = this.calendarDate.monthStart; i > 0; i--) {
        let map = {};
        map.flag = false;
        map.day = this.calendarDate.lastDays - i + 1;
        map.date =
          this.calendarDate.lastYear +
          "-" +
          this.calendarDate.lastMonth +
          "-" +
          (this.calendarDate.lastDays - i + 1);
        dataList.push(map);
      }
      //循环调用接口
      this.priceDate =
        this.calendarDate.lastYear + "-" + this.calendarDate.month;
      // this.timtslit();
      for (var k = 0; k < this.calendarDate.days; k++) {
        let map = {};
        map.flag = false;
        map.day = k + 1;
        map.date =
          this.calendarDate.year +
          "-" +
          this.calendarDate.month +
          "-" +
          (k + 1);
        for (let d in this.opt) {
          map.price = this.opt[d].price; //价格
          map.flag = this.checkDate(map.date, this.opt[d].date);
          if (map.flag) {
            break;
          }
        }
        dataList.push(map);
      }
      for (
        let j = 0;
        j < 42 - this.calendarDate.days - this.calendarDate.monthStart;
        j++
      ) {
        let map = {};
        map.flag = false;
        map.day = j + 1;
        map.date =
          this.calendarDate.nextYear +
          "-" +
          this.calendarDate.nextMonth +
          "-" +
          (j + 1);
        dataList.push(map);
      }
      this.dataList = dataList;
      if (this.data) {
        this.activeChange();
      }
      console.log(dataList);
      console.log(this.calendarDate);
    },
    //判断是否是闰年
    isLeapYear() {
      if (
        this.calendarDate.year % 4 == 0 &&
        (this.calendarDate.year % 100 != 0 || this.calendarDate.year % 400 == 0)
      ) {
        this.calendarDate.isLeapYear = true;
      } else {
        this.calendarDate.isLeapYear = false;
      }
    },
    //获取上个月下个月天数
    getDays() {
      if (parseInt(this.calendarDate.month) == 1) {
        this.calendarDate.lastDays = new Date(
          this.calendarDate.year - 1,
          12,
          0
        ).getDate();
        this.calendarDate.lastMonth =
          new Date(this.calendarDate.year - 1, 12, 0).getMonth() + 1;
        this.calendarDate.lastYear = new Date(
          this.calendarDate.year - 1,
          12,
          0
        ).getFullYear();
      } else {
        this.calendarDate.lastDays = new Date(
          this.calendarDate.year,
          this.calendarDate.month - 1,
          0
        ).getDate();
        this.calendarDate.lastMonth =
          new Date(
            this.calendarDate.year,
            this.calendarDate.month - 1,
            0
          ).getMonth() + 1;
        this.calendarDate.lastYear = new Date(
          this.calendarDate.year,
          this.calendarDate.month - 1,
          0
        ).getFullYear();
      }
      if (parseInt(this.calendarDate.month) == 12) {
        this.calendarDate.nextDays = new Date(
          this.calendarDate.year + 1,
          1,
          0
        ).getDate();
        this.calendarDate.nextMonth =
          new Date(this.calendarDate.year + 1, 1, 0).getMonth() + 1;
        this.calendarDate.nextYear = new Date(
          this.calendarDate.year + 1,
          1,
          0
        ).getFullYear();
      } else {
        this.calendarDate.nextDays = new Date(
          this.calendarDate.year,
          this.calendarDate.month + 1,
          0
        ).getDate();
        this.calendarDate.nextMonth =
          new Date(
            this.calendarDate.year,
            this.calendarDate.month + 1,
            0
          ).getMonth() + 1;
        this.calendarDate.nextYear = new Date(
          this.calendarDate.year,
          this.calendarDate.month + 1,
          0
        ).getFullYear();
      }
      this.calendarDate.days = new Date(
        this.calendarDate.year,
        this.calendarDate.month,
        0
      ).getDate();
    },
    //判断日期是否相等
    checkDate(dateStr1, dateStr2) {
      let date1 = dateStr1.split("-");
      let date2 = dateStr2.split("-");
      if (date1[1] < 10 && date1[1].length < 2) {
        date1[1] = "0" + date1[1];
      }
      if (date1[2] < 10 && date1[2].length < 2) {
        date1[2] = "0" + date1[2];
      }
      if (date2[1] < 10 && date2[1].length < 2) {
        date2[1] = "0" + date2[1];
      }
      if (date2[2] < 10 && date2[2].length < 2) {
        date2[2] = "0" + date2[2];
      }
      date1 = date1.join("-");
      date2 = date2.join("-");
      return date1 == date2;
    },
    //房间列表接口
    async fanlist(){
        let data = await linerRoomListUrl(this.lineid);
        if(data){
            this.fanlistyp=data;
            for(const teseli of this.fanlistyp){
                if(teseli.checkInType==1){
                //可入住
                this.$set(teseli,'adultNum',teseli.minPeopleNumber);//大人
                this.$set(teseli,'childNum',0);//小孩
                this.$set(teseli,'adultmax',teseli.maxPeopleNumber-teseli.childNum);//默认成年人最大直
                this.$set(teseli,'adultmin',teseli.minPeopleNumber-teseli.childNum);//默认成年最小值
                this.$set(teseli,'childmax',teseli.maxPeopleNumber-teseli.adultNum);//默认小孩最大直
                 this.$set(teseli,'childmin',teseli.minPeopleNumber-teseli.adultNum);//默认小孩最小直
                } else if(teseli.checkInType==2){
                //必须入住
                this.$set(teseli,'adultNum',teseli.peopleNumber);//大人
                this.$set(teseli,'childNum',0);//小孩
                }
                this.$set(teseli,'roomNum',1);//房间数量
                this.$set(teseli,"falg",false);
                this.$set(teseli,"Room",false)
            }
        }
    },
   //点击房间
   fancliak :function(index){
   this.fanlistyp[index].falg=!this.fanlistyp[index].falg;
   },
   //判断选择人数的最大最小
   fanchulick:function(list){
     if(list.checkInType==1){
      if(list.minPeopleNumber-list.childNum>=0){
       this.$set(list,'adultmax',list.maxPeopleNumber-list.childNum);
      this.$set(list,'adultmin',list.minPeopleNumber-list.childNum);
      return;
     }
     if(list.minPeopleNumber-list.childNum<0){
       this.$set(list,'adultmax',list.maxPeopleNumber-list.childNum);
      this.$set(list,'adultmin',0);
      return;
     }
     }else if(list.checkInType==2){
          this.$set(list,'childNum',list.peopleNumber-list.adultNum);//小孩
     }
   },
    fanchulick_a:function(list){
      if(list.checkInType==1){
      if(list.minPeopleNumber-list.adultNum>=0){
       this.$set(list,'childmax',list.maxPeopleNumber-list.adultNum);
      this.$set(list,'childmin',list.minPeopleNumber-list.adultNum);
      return;
      }
     if(list.minPeopleNumber-list.adultNum<0){
       this.$set(list,'childmax',list.maxPeopleNumber-list.adultNum);
      this.$set(list,'childmin',0);
      return;
      }
      }else if(list.checkInType==2){
         this.$set(list,'adultNum',list.peopleNumber-list.childNum);//大人
    
      }
   },
   //计算预计总价
   yujiclick(){
    //estimatedprice
    if(this.roomzong.length!=0){
      //每次重新选房间人数重新计算
      this.luestimatedprice=0;
      this.estimatedprice=0;
      this.adult_z=0;
      this.children_z=0;
      for(const tesrt of this.roomzong){
        this.estimatedprice=this.estimatedprice+tesrt.totalprice;
        this.adult_z=(this.adult_z+tesrt.adultNum)*tesrt.roomNum;//计算成年总人数
        this.children_z=(this.children_z+tesrt.childNum)*tesrt.roomNum;//计算儿童总人数
      }
        this.estimatedprice= this.estimatedprice+this.pricetyps*this.adult_z+this.pricetyps*this.children_z;
        this.luestimatedprice= this.pricetyps*this.adult_z+this.pricetyps*this.children_z;//路线总价格
    }
    if(this.roomzong.length==0){
      this.estimatedprice=this.pricetyps;
    }
   },
   //点击完成选择房间
   wanclick:function(list){
     if(list.roomNum!=0){
       list.Room=true;
     this.$set(list,'totalprice',(list.price*list.adultNum+list.price*list.childNum)*list.roomNum);//总价格
     this.yujiclick();
     }
     if(list.roomNum==0){
       this.$toast("选择房间")
     }
   },
   shanclick:function(list){
    list.Room=false;
     this.yujiclick();
   },
 //点击展示选择的房间
 xunclick:function(){
   $(".brijtan").toggleClass("yinc");
    $(".Choose_a_room_dibu_tan").toggleClass("yinc");
    console.log(this.roomzong);
 },
 yinclick:function(){
   $(".brijtan").addClass("yinc");
    $(".Choose_a_room_dibu_tan").addClass("yinc");
 },
 //点击下一步
 nextstep:function(){
  this.$router.push({
    path:'/K_orderlist_a/'+this.lineid+"/"+this.date+"/"+this.estimatedprice+"/"+this.adult_z+"/"+ this.children_z+"/"+this.luestimatedprice
  })
  this.Tanker(this.roomzong);
 },
  }
};
</script>


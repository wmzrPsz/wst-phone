   
   <template>
       <div class="index">
        <div class="her_a font-20 background-a">
            <i class="her_a_left float_left"  onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
            <i class="her_a_zong color float_zhong">预订</i>
           </div>
                       <!--预订列表日历-->
     	    <div class="date-box">
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


          <!-- <div class="ht-rili-td ht-rili-td-disabled" data-date="2019-4-30">
            <span class="ht-rili-day">30</span>
            <span class="ht-rili-money"></span>
          </div> -->
          <div :class="[list.flag?'ht-rili-onclick':'ht-rili-td-disabled','ht-rili-td',list.check?'ht-rili-td-active':'']" 
          v-for="(list, index) in dataList" :key="index" @click="dayClick(index)">
            <span class="ht-rili-day">{{list.day}}
              <!-- 1 -->
              <i data-state="100" v-if="list.flag">余{{list.state}}</i>
            </span>
            <span class="ht-rili-money" v-if="list.flag">￥{{list.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
     <!--房间价格-->
           <div class="jiagefan" v-if="listyp!=0">
             <ul>
                 <li><i>单人房</i><i style="color:#f60">￥{{listyp.oneCost}}</i></li>
                 <li><i>双人房</i><i style="color:#f60">￥{{listyp.twoCost}}</i></li>
                 <li><i>三人房</i><i style="color:#f60">￥{{listyp.threeCost}}</i></li>
                 <li><i>四人房</i><i style="color:#f60">￥{{listyp.fourCost}}</i></li>
                 <li><i>配房</i><i style="color:#f60">￥{{listyp.arrangeCost}}</i></li>
             </ul>
           </div>
           <div class="roomjia">
           <div class="room_a ">
            <p class="font-14 float_left famjian_b">成年人</p>
             <van-stepper v-model="adult" :min='0'  class="float_right"/>
           </div>
            <div class="room_a ">
            <p class="font-14 float_left famjian_b">儿童</p>
             <van-stepper v-model="child" :min='0'  class="float_right"/>
           </div>
           <div class="font-14 border_e room_b">
                <div>选择房间</div>
                <div class="room float_left">
                <p class="font-14 float_left famjian_b ">单人房</p>
                <van-stepper v-model="One" :min='0'  class="float_left"/>
                </div>
                 <div class="room float_right">
                <p class="font-14 float_left famjian_b ">双人房</p>
                <van-stepper v-model="two" :min='0'  class="float_left"/>
                </div>
                  <div class="room float_left" style=" clear: both;">
                <p class="font-14 float_left famjian_b ">三人房</p>
                <van-stepper v-model="three" :min='0'  class="float_left"/>
                </div>
                  <div class="room float_right">
                <p class="font-14 float_left famjian_b ">四人房</p>
                <van-stepper v-model="four" :min='0'  class="float_left"/>
                </div>

                <div class="room float_left" style=" clear: both; margin-left:1.3rem;">
                <p class="font-14 float_left famjian_b ">配</p>
                <van-stepper v-model="arrange" :min='0'  class="float_left"/>
                </div>
           </div>
         <div class="Choose_a_room_dibu " >
              <div class="Choose_a_room_dibu_c font-16 float_left">总计:<span  class="color-h font-12">￥
                  <i class="font-20" v-if="listyp==0">{{adult*mejiage+child*mejiage}}</i>
                  <i class="font-20" v-if="listyp!=0">{{One*listyp.oneCost+two*listyp.twoCost+three*listyp.threeCost+four*listyp.fourCost+arrange*listyp.arrangeCost+adult*mejiage+child*mejiage}}</i>
                  </span></div>
              <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g" @click="nextclick()">下一步</button>
           </div>
         </div>
      
       </div>
   </template>
   <style lang="less">
   .jiagefan ul{
       width: 95%;
       margin: auto;
       overflow: hidden;

   }
   .jiagefan ul li{
       margin-top: 0.5rem;
     width: 20%;
     height: 3rem;
     float: left;
      background: linear-gradient(0, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-90deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-180deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-270deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat;
                  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
    background-position: left top, right top, right bottom, left bottom;
   }
   .jiagefan ul li i{
       font-size: 12px;
       text-align: center;
       line-height: 1rem;
       
   }
   .room_a{
       overflow: hidden;
       padding-bottom: 0.5rem;
   }
   .room{
       overflow: hidden;
       margin-top: 0.5rem;
   }
   .room_b{
       margin-top: 0.5rem;
       overflow: hidden;
       padding-bottom: 1.5rem;
   }
   .roomjia{
       width: 95%;
       margin-top:1rem;
       margin: auto;
       left: 2.5%;
       overflow: hidden;
       margin-bottom: 3rem;
   }
   //
  .date-box {
    overflow:hidden;
    background:#f2f2f2;
    border:1px solid #e6e8eb;
     box-shadow: 2px 5px 10px 2px #ccc;
    padding-bottom: 30px;
    margin-top: 2.5rem;
}
.calendar-box * {
    box-sizing:border-box
}
.ht-rili-head {
    overflow:hidden;
    padding: 0 20px;
}
.ht-rili-querybox {
    overflow:hidden;
    position: relative;
    margin: auto;
}
.ht-rili-title {
    padding:10px;
    display:inline-block;
    max-width:200px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    vertical-align:middle
}
.ht-rili-datebox {
    width:70%;
    vertical-align:middle;
    padding:10px;
    margin: 0 auto;
}
.ht-rili-close{
    position: absolute;
    width: 25px;
    height: 25px;
    line-height: 25px;
    top:5px;
    right: 10px;
    padding: 0;
    font-size:10px;
    color: #fff;
    opacity: .2;
    border-radius: 100%;
    background: #f60;
}
.ht-rili-close:hover{
    color: #fff;
    opacity: .4;
}
.ht-rili-date {
    text-align:center;
    display:inline-block;
    width:150px;
    height:24px;
    line-height:25px;
    vertical-align:middle;
    font-size: 13px;
}
.ht-rili-leftarr {
    display:inline-block;
    width:20px;
    height:20px;
    background:url(../../assets/img/C/ic_arrow_left@2x.png) left center no-repeat;
    background-size:contain;
    vertical-align:middle;
    cursor:pointer
}
.ht-rili-rightarr {
    display:inline-block;
    width:20px;
    height:20px;
    background:url(../../assets/img/C/ic_arrow_right@2x.png) right center no-repeat;
    background-size:contain;
    vertical-align:middle;
    cursor:pointer
}
.ht-rili-th {
    width:14.25%;
    float:left;
    text-align:center;
    height:45px;
    line-height:45px;
    color:#737373;
}
.ht-rili-td-disabled{
   height: 3rem;
}

.ht-rili-td {
    width:14.25%;
    float:left;
    text-align:center;
    height:50px;
    background:#eef5fd;
    cursor:pointer;
    background: linear-gradient(0, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-90deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-180deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat, 
                linear-gradient(-270deg, #DCDCDC 1px, #DCDCDC 1px) no-repeat;
                  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
    background-position: left top, right top, right bottom, left bottom;
}
.ht-rili-body {
    overflow:hidden;
    padding: 0 20px;
}
.ht-rili-day {
    font-size:10px;
    font-weight:700;
    display:inline-block;
    width:100%
}
.ht-rili-day >i{
    font-size:10px;
    padding-left: 3px;
    color: #888;
}
.ht-rili-money {
    display:inline-block;
    width:95%;
    margin: auto;
    font-size:10px;
    color:#f60;
    background: #fdefe5;
}
.ht-rili-onclick{
    color: #444;
}
.ht-rili-td-disabled {
    color:#bfc4ca
}
.ht-rili-td-active {
    background:#3682e5;
    color: #fff;
}
.ht-rili-td-active .ht-rili-day >i{
    color: #fff;
}
.ht-rili-td-active .ht-rili-money{
    background:#3682e5;
}
.ht-custom{
    padding: 20px;

}
.ht-custom-left{
    float: left;
    width: 125px;
    height: 50px;
    font-size: 10px;
}
.ht-custom-right{
    float: left;
    width: 300px;
    height: 170px;
}
.ht-custom-right>div{
    width: 100%;
    float: left;
}
.ht-custom-right>.btn-group>button{
    width: 105px;
    height: 34px;
    border-radius: 25px;
    color: #fff;
    border: 1px solid #f60;
    outline: 0;
}
.ht-custom-right>.btn-group>button:focus{
    outline: 0;
}
.ht-custom-right>.btn-group>.total-price{
    color: #f60;
    background: #fff;
}
.ht-custom-right>.btn-group>.ht-btn-cart{
    background: #f60;
}
.ht-custom-right .counter-label{
    line-height: 40px;
    margin-right: 50px;
    margin-bottom: 20px;
}
.ht-rili-head .ht-rili-th{
    font-size:10px!important;
}
   </style>
   
   <script>
   import {getRoutePriceDetailsUrl} from "@/utils/getData";
   import $ from 'jquery';
   import { async } from 'q';
   import store from '@/vuex/index';
   export default {
       name:'index',
       data(){
           return{
            //  fonid:store.fonid.routeid,
             //选中价格
             pricetyps:'',
             listyp:'',
             mejiage:this.$route.params.price,//门票价格
             routeid:this.$route.params.routeid,
             priceDate:'',
             priceDatejie:'',
              adult:0,//大人
              child:0,//小孩
              One:0,//默认单人房数
              two:0,//双人房
              three:0,//三人房
              four:0,//四人房
              arrange:0,//配房
              date:'',
              price:'',//价格
              //
             calendarDate: {},
             currencySign: "$",
            //  opt:[{"oneCost":3999.0,"twoCost":3999.0,"threeCost":3999.0,"fourCost":3999.0,"arrangeCost":3999.0,"state":"-1","date":"2019-04-15","price":3999.00},],
            opt:[],
             dataList: [],
             date: "",  //选择的日期
           }
       },
       //计算属性
       computed:{
       },
         created() {
        this.calendarDateInit();
        this.getIndexDay();
        console.log(this.fonid);
      },
       mounted(){
       },

      methods: {
    //下一步
    nextclick:function(){
    if(this.listyp==0){
    this.$toast("请选择日期");
    return;
    }
    this.pricetyps=this.One*this.listyp.oneCost+this.two*this.listyp.twoCost+this.three*this.listyp.threeCost+this.four*this.listyp.fourCost+this.arrange*this.listyp.arrangeCost+this.adult*this.mejiage+this.child*this.mejiage
    console.log(this.pricetyps);
    if(this.pricetyps!=0){
      this.$router.push({
     path: '/orderlist/'+this.date+"/"+this.adult+"/"+this.child+"/"+this.One+"/"+this.two+"/"+this.three+"/"+this.four+"/"+this.arrange+"/"+this.pricetyps+'/'+this.$route.params.dayNum+'/'+this.$route.params.endCityContent,
     })
    }
    },
    //日期接口
   async timtslit(){
     console.log(this.priceDate);
    let data = await getRoutePriceDetailsUrl(
     this.routeid,
     this.priceDate,
    )
    if(data){
        let lists=[];
        for(const test of data){
        let img={};
         this.$set(img, "oneCost", test.oneCost);
         this.$set(img, "twoCost", test.twoCost);
         this.$set(img, "threeCost", test.threeCost);
         this.$set(img, "fourCost", test.fourCost);
         this.$set(img, "arrangeCost", test.arrangeCost);
         this.$set(img, "state", test.state);
         this.$set(img, "date", test.date);
         this.$set(img, "price", test.price);
         lists.push(img);
        }
       this.opt=lists;
       console.log(this.opt);
       return;
    } 
    },
    //点击左边月份
    monthLeftClick(){
        if (this.calendarDate.month <= 1) {
            this.calendarDate.year -= 1;
            this.calendarDate.month = 12;
        } else {
            this.calendarDate.month -= 1;
        }
        this.getIndexDay();
         console.log(this.date)
    },
    //点击右边月份
    monthRightClick(){
        if (this.calendarDate.month == 12) {
            this.calendarDate.year += 1;
            this.calendarDate.month = 1;
        } else {
            this.calendarDate.month += 1;
        }
        this.getIndexDay();
        console.log(this.date)
    },
    //点击日期
    dayClick(index) {
      this.date = this.dataList[index].date
      if(this.dataList[index].flag){
          this.activeChange();
      }
    },
    //改变选中的日期
    activeChange(){
      this.dataList.map((list)=>{
        this.$set(list, "check", false);
        if(list.flag && this.date && this.checkDate(this.date,list.date)){
             this.$set(list, "check", true);
        }
        //获取选中的价格
        if(list.check==true){
         this.listyp=list;
         console.log(this.listyp);
        }
      })
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
        this.calendarDate.monthStart = new Date(this.calendarDate.year + "/" + this.calendarDate.month + "/1").getDay();
        if (this.calendarDate.monthStart == 0) {
            this.calendarDate.monthStart = 7;
        }
        for (let i = this.calendarDate.monthStart; i > 0; i--) {
            let map = {};
            map.flag = false;
            map.day = this.calendarDate.lastDays - i + 1;
            map.date = this.calendarDate.lastYear + "-" + this.calendarDate.lastMonth + "-" + (this.calendarDate.lastDays - i +
                1);
            dataList.push(map);
        }
        for (var k = 0; k < this.calendarDate.days; k++) {
            let map = {};
            map.flag = false;
            map.day = k + 1;
            map.date = this.calendarDate.year + "-" + this.calendarDate.month + "-" + (k + 1);
            for (let d in this.opt) {
                map.state = this.opt[d].state;//房间数量情况
                map.price = this.opt[d].price;//价格
                map.oneCost = this.opt[d].oneCost;//1价格
                map.twoCost = this.opt[d].twoCost;//2价格
                map.threeCost = this.opt[d].threeCost;//3价格
                map.fourCost = this.opt[d].fourCost;//4价格
                map.arrangeCost = this.opt[d].arrangeCost;//配价格
                map.flag = this.checkDate(map.date, this.opt[d].date);
                if (map.flag) {
                    break;
                }

            }
            dataList.push(map);
        }
        for (let j = 0; j < (42 - this.calendarDate.days - this.calendarDate.monthStart); j++) {
            let map = {};
            map.flag = false;
            map.day = j + 1;
            map.date = this.calendarDate.nextYear + "-" + this.calendarDate.nextMonth + "-" + (j + 1);
            dataList.push(map);
        }
        this.dataList = dataList;
        if(this.data){
          this.activeChange();
        }
        console.log(dataList)
        console.log(this.calendarDate)
        //循环调用接口
        this.priceDate=this.calendarDate.lastYear+"-"+this.calendarDate.month;
        this.timtslit();
        return;
    },
    //判断是否是闰年
    isLeapYear() {
        if ((this.calendarDate.year % 4 == 0) && (this.calendarDate.year % 100 != 0 || this.calendarDate.year % 400 == 0)) {
            this.calendarDate.isLeapYear = true;
        } else {
            this.calendarDate.isLeapYear = false;
        }
    },
    //获取上个月下个月天数
    getDays() {
        if (parseInt(this.calendarDate.month) == 1) {
            this.calendarDate.lastDays = new Date(this.calendarDate.year - 1, 12, 0).getDate();
            this.calendarDate.lastMonth = new Date(this.calendarDate.year - 1, 12, 0).getMonth() + 1;
            this.calendarDate.lastYear = new Date(this.calendarDate.year - 1, 12, 0).getFullYear();
        } else {
            this.calendarDate.lastDays = new Date(this.calendarDate.year, this.calendarDate.month - 1, 0).getDate();
            this.calendarDate.lastMonth = new Date(this.calendarDate.year, this.calendarDate.month - 1, 0).getMonth() + 1;
            this.calendarDate.lastYear = new Date(this.calendarDate.year, this.calendarDate.month - 1, 0).getFullYear();
        }
        if (parseInt(this.calendarDate.month) == 12) {
            this.calendarDate.nextDays = new Date(this.calendarDate.year + 1, 1, 0).getDate();
            this.calendarDate.nextMonth = new Date(this.calendarDate.year + 1, 1, 0).getMonth() + 1;
            this.calendarDate.nextYear = new Date(this.calendarDate.year + 1, 1, 0).getFullYear();
        } else {
            this.calendarDate.nextDays = new Date(this.calendarDate.year, this.calendarDate.month + 1, 0).getDate();
            this.calendarDate.nextMonth = new Date(this.calendarDate.year, this.calendarDate.month + 1, 0).getMonth() + 1;
            this.calendarDate.nextYear = new Date(this.calendarDate.year, this.calendarDate.month + 1, 0).getFullYear();
        }
        this.calendarDate.days = new Date(this.calendarDate.year, this.calendarDate.month, 0).getDate();
    },
    //判断日期是否相等
    checkDate(dateStr1, dateStr2){
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
  }
       
   }

   </script>
   

    <template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" @click="Previous ()">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">包车/租车</i>
      <i class="her_a_rigth float_right">
        <img src="../../assets/img/A/head_car_icon@2x.png">
      </i>
    </div>
    <div class="dingjia">
      <div class="xuanbao font-14">
        <span>
          <i :class="[type==1? '':'yinc']" @click="exhibition(2)">展开</i>
          <i :class="[type==2? '':'yinc']" @click="exhibition(1)">收起</i>
          <i :class="[type==1? 'xuanbao_a':'xuanbao_a yinc']">
            <img src="../../assets/img/A/sign_open_icon@2x.png">
          </i>
          <i :class="[type==2? 'xuanbao_a':'xuanbao_a yinc']">
            <img src="../../assets/img/A/sign_open_icon@3x.png">
          </i>
        </span>
      </div>
      <div class="xuanbao_b" v-if="type==2">
        <div class="bao_her_c font-14">
          <ul>
            <li>
              <i class="float_left">出发城市</i>
              <i class="float_right color-b">
                {{pathlist.quecity}}{{pathlist.startAddress}}
                <i class="bao_her_d">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </i>
            </li>

            <li class="bao_her_z">
              <i class="float_left">出发时间</i>
            </li>
            <div class="float_right color-b" style="width: 60%">
              <ul>
                <li>
                  <i class="float_right color-b">
                    {{pathlist.certValidDate}}
                    <i class="bao_her_d">
                      <img src="../../assets/img/A/more_icon@2x.png">
                    </i>
                  </i>
                </li>
                <li>
                  <i class="float_right color-b">
                    {{pathlist.birthday}}
                    <i class="bao_her_d">
                      <img src="../../assets/img/A/more_icon@2x.png">
                    </i>
                  </i>
                </li>
              </ul>
            </div>
            <li style="clear: both;">
              <i class="float_left">
                <i class="bao_her_e">{{pathlist.adultNum}}/成年人,{{pathlist.childNum}}/儿童</i>
              </i>
              <i class="float_right">
                行李箱
                <i class="bao_her_e"></i>
                {{pathlist.luggage}}
              </i>
            </li>
          </ul>
        </div>
        <button class="color background-d font-14 xiayi">共{{pathlist.datet}}天下一步</button>
      </div>

      <div class="xuanbao_c font-14">
        <ul>
          <li>
            <div class="youw_s_jia text_left">选择城市和目的地</div>
          </li>

          <li class="youw_s" v-for="(list,index) in daylist" :key="index">
            <div class="youw_s_jia">
              <i class="float_left">
                第{{list.day}}天
                <i class="font-12 color-b">({{list.date}})</i>
              </i>
              <i class="float_right color-b">
                <i class="xuanbao_e" v-if="list.cityName!=null">
                  <img src="../../assets/img/A/home_lydz_adres2_icon@2x.png">
                </i>
                <i v-if="list.cityName!=null">{{list.cityName}}>{{list.endCityName}}</i>
              </i>
              <span class="float_right xuanbao_d">
                <button class="color-d youw" @click="typeclick(index)">选择游玩类型</button>
                <button class="color-d" @click="roomclick(list,index)">选择酒店</button>
              </span>
            </div>

            <!--选择游玩类型-->
            <div class="dianj_bao font-14" v-if="list.falg">
              <div class="dianj_bao_a">
                <ul v-for="(list,index) in businesslist" :key="index" @click="flstclick(index)">
                  <li class="dianj_bao_z" v-if="list.range==1">
                    <span :class="[list.falg==true? 'dianj_bao_c dianj_bao_c_jia':'dianj_bao_c']"></span>
                    <i class="text_left">接机</i>
                    <input class="dianj_bao_b color-b" type="text" placeholder="请输入航班号" v-model="airNo">
                    <p class="color-g font-12 dianj_bao_d text_left">当地时间12:50降临在白云机场</p>
                  </li>

                  <li class="dianj_bao_z" v-if="list.range==2">
                    <span :class="[list.falg==true? 'dianj_bao_c dianj_bao_c_jia':'dianj_bao_c']"></span>
                    <i class="text_left float_left">{{list.title}} {{list.radius}}km</i>
                    <p class="color-g font-12 dianj_bao_d text_left">
                      参考景点:
                      <i v-for="(list,index) in spotlist" :key="index">{{list.name}},</i>
                    </p>
                  </li>
                  <li class="dianj_bao_z" v-if="list.range==3">
                    <span :class="[list.falg==true? 'dianj_bao_c dianj_bao_c_jia':'dianj_bao_c']"></span>
                    <i class="text_left float_left">{{list.title}} {{list.radius}}km</i>
                    <p class="color-g font-12 dianj_bao_d text_left">
                      <i v-for="(list,index) in citylist" :key="index">{{list.cityName}},</i>
                    </p>
                    <div class="dianj_bao_jia color-b" @click="show= true">{{citychenclis}}</div>
                  </li>
                </ul>
              </div>
            </div>
            <!---->
          </li>
          <li @click="vehicleclick()">
            <div class="youw_s_jia">
              <i class="float_left">选择车辆</i>
              <i class="zinan_b float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </div>
          </li>
          <li @click="guide()">
            <div class="youw_s_jia">
              <i class="float_left">选择导游</i>
              <i class="zinan_b float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </div>
          </li>
        </ul>

        <button class="color background-d font-14 xiayi" @click="bookclick()">共￥{{Generalroomprice+vehicledataprice+guidetyplistyprice}}预订</button>
      </div>

      <div class="xuanbao_f">
        <ul>
          <li>
            <i class="float_left xuanbao_f_a">
              <img style="width: 100%;" src="../../assets/img/B/3.png">
            </i>
            <i class="float_left xuanbao_f_b">
              <p class="font-14 text_left" style="margin:0px!important ">注意事项</p>
              <p
                class="font-12 color-b text_left"
              >是多家无论大酒店还是小酒店是多家无论大酒店还是小酒店是多家无论大酒店还是小酒店大酒店还是小酒店酒店大酒店还是小酒店</p>
            </i>
          </li>
        </ul>
      </div>

      <!--尾部-->
      <div class="w_b">
        <div class="zinan">
          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>

          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">用户中心</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>

          <div class="zinan_a font-16">
            <ul>
              <li style="padding-left: 0px!important">
                <i class="float_left">帮助中心</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b zinan_bd">
                    <img src="../../assets/img/A/sign_open_icon@3x.png">
                  </i>
                  <i class="zinan_b zinan_bd_a yinc">
                    <img src="../../assets/img/A/sign_open_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>

              <li>
                <i class="float_left">订单指南</i>
                <span class="float_right zinan_c">
                  <i class="zinan_b">
                    <img src="../../assets/img/A/more_icon@2x.png">
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="wan_zo">
          <div class="font-12 wan">
            <ul>
              <li class="wan_a">
                <img src="../../assets/img/A/sign_logo_icon@2x.png">
              </li>
              <li class="wan_b">
                <i>万事同美国</i>
                <i>eaiusa.com</i>
              </li>
            </ul>
          </div>
          <div class="wan_c font-12">
            <i>
              <img src="../../assets/img/B/7.png">
            </i>
            <i class="wan_d">关注微信公众号</i>
          </div>
        </div>

        <div class="wan_e">
          <img style="width: 100%;" src="../../assets/img/B/8.png">
        </div>
      </div>
      <p class="dib_w font-12 color-b">万事同美国eaiusa.com万事同美国eaiusa.com万事同美国eaiusa.com</p>
    </div>
    <!--选择到达城市-->
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        title="选择到达城市"
        :columns="citychen"
        @cancel="show=false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
    <style lang="less">
.xuanbao_a img {
  width: 0.5rem;
  height: 0.5rem;
}
.text_left {
  text-align: left;
}
.dianj_bao_c {
  margin-top: 0.5rem;
  float: left;
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  background-image: url(../../assets/img/A/home_choice_unche@2x.png);
  background-size: 100% 100%;
}
.dianj_bao_c_jia {
  background-image: url(../../assets/img/A/home_choice_check@2x.png);
}
.xuanbao_e img {
  width: 0.6rem;
  height: 0.6rem;
}
.dianj_bao_d {
  margin-bottom: 0.5rem;
}
.dianj_bao_jia {
  clear: both;
  text-align: left;
  width: 5rem;
  height: 1rem;
  line-height: 1rem;
  border: 1px slategray solid;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  padding-left: 0.5rem;
}
</style>
    <script>
import { mapState } from "vuex";
import { copy } from "@/utils/common";
import {
  selectCarServiceUrl,
  getScenicByCity,
  getNearbyCityUrl
} from "@/utils/getData";
import { mapMutations } from "vuex";
import { stat } from 'fs';
export default {
  name: "index",
  data() {
    return {
      show: false,
      type: 1, //1收起2展示
      daylist: [], //天数列表
      time: "", //每天时间
      businesslist: [], //获取车辆业务类型
      spotlist: [], //路途景天列表
      citylist: [], //附近城市列表
      citychen: [], //到达城市
      citychenclis: "", //选择到达的城市
      citychenclisid: "", //选择到达的城市id
      typelist: "",
      airNo:'',//航班号
      hotelInforDetailsimg:{},
    };
  },
  computed: {
    ...mapState({
      pathlist: state => state.route.pathlist,//包车租车index页填写的信息
      piaylist_a:state => state.route.piaylist,//游玩列表
      Generalroom: state => state.route.roomlist,//获取总选择的房间列表
      vehicledata:state => state.route.vehicledata,//获取总选择的车辆列表
      guidetyplistyp:state => state.route.guidetyplistyp,//获取选择的导游
    }),
    //计算酒店房间的总价格
    Generalroomprice(){
      let pricezong=0;
      if(this.Generalroom.length!=0){
       for(let price of this.Generalroom){
         for(let testpric of price.room){
           pricezong=pricezong+(testpric.price*testpric.Number);
         }
       }
       return pricezong
      }else if(this.Generalroom.length==0){
        return pricezong
      }
       return pricezong
    },
    //计算车辆的总价格
     vehicledataprice(){
      let pricezong=0;
      if(this.vehicledata.length!=0){
       for(let price of this.vehicledata){
        pricezong=pricezong+price.price;
       }
       return pricezong*this.pathlist.datet
      }else if(this.vehicledata.length==0){
        return pricezong
      }
    },
    //计算导游的价格
    guidetyplistyprice(){
      let pricezong=0;
      if(this.guidetyplistyp.length!=0){
       return this.guidetyplistyp.price*this.pathlist.datet;
      }else if(this.guidetyplistyp.length==0){
        return pricezong
      }
    }
  },
  mounted() {
    console.log(this.Generalroom);
    console.log(this.vehicledata);
    console.log(this.guidetyplistyp);
    console.log(this.piaylist_a);
    console.log(this.pathlist);
    this.daytyp();
    this.business();
    let piaylist_a = this.copy(this.piaylist_a);
    if(this.piaylist_a.length!=0){
      this.daylist= piaylist_a;
    }
    this.Splicing();
  },
  methods: {
    ...mapMutations("route", ["piaylist"]),
    exhibition(index) {
      this.type = index;
    },
    onConfirm(value, index) {
      this.show = false;
      this.citychenclis = value;
      //获取选择城市的id
      for (const test of this.citylist) {
        if (test.cityName == this.citychenclis) {
          this.citychenclisid = test.id;
        }
      }
      this.$set(this.daylist[this.typelist], "endCityName", this.citychenclis);
      this.$set(this.daylist[this.typelist],"endCityid", this.citychenclisid );
      if(this.typelist!=this.daylist.length-1){
      this.$set(this.daylist[this.typelist + 1],"cityName",this.citychenclis);
      this.$set(this.daylist[this.typelist + 1], "cityid", this.citychenclisid);
      }
    },
    daytyp: function() {
      this.time = new Date(this.pathlist.certValidDate).getTime() - 86400000;
      for (let i = 1; i <= this.pathlist.datet; i++) {
        let img = {};
        this.time = this.time + 86400000;
         let endtime_y = new Date(this.time).getFullYear(); //年
         let endtime_m = new Date(this.time).getMonth() + 1; //月
         let endtime_x = new Date(this.time).getDate(); //日
         let endtime = endtime_y + "-" + endtime_m + "-" + endtime_x;
        this.$set(img, "day", i);
        this.$set(img, "date", endtime);
        this.$set(img, "falg", false);
        this.daylist.push(img);
      }
      this.$set(this.daylist[0], "cityName", this.pathlist.quecity), //第一天的出发城市
      this.$set(this.daylist[0], "cityid", this.pathlist.cityid); //第一天出发城市id
    },
    //获取获取车辆业务类型成功
    async business() {
      selectCarServiceUrl({}).then(data => {
        this.businesslist = data;
        for (const test of this.businesslist) {
          this.$set(test, "falg", false);
        }
      });
    },
    //点击游玩类型
    typeclick(index) {
      if (
        this.daylist[index].cityName != null &&
        this.daylist[index].endCityName == null 
      ) {
        this.airNo="";
        this.citychenclis="";
        this.$set(this.daylist[index], "falg", true);
        if (index >= 1) {
          this.$set(this.daylist[index - 1], "falg", false);
        }
        this.business();
        this.scenic(index);
        this.chenshi(index);
        this.typelist = index;
      }
      if (
        this.daylist[index].cityName != null &&
        this.daylist[index].endCityName != null
      ) {
        if(this.daylist[index].range==1){
          if( this.airNo==0){
            this.$toast("请输入航班号");
            return;
          }
          if( this.airNo!=0){
             this.$set(this.daylist[index], "falg", false);
             this.$set(this.daylist[index], "airNo", this.airNo);

             this.piaylist(JSON.parse(JSON.stringify(this.daylist)))
          }
        }else if(this.daylist[index].range!=1){
           this.$set(this.daylist[index], "falg", false);
           this.piaylist(JSON.parse(JSON.stringify(this.daylist)))
        }
      }
    },
    //点击选择
    flstclick(index) {
      this.businesslist.map(elem => {
        elem.falg = false;
      });
      this.businesslist[index].falg = !this.businesslist[index].falg;
      if (this.businesslist[index].range !=3) {

        this.$set(
          this.daylist[this.typelist],
          "endCityName",
          this.daylist[this.typelist].cityName
        );
        this.$set(
          this.daylist[this.typelist],
          "endCityid",
          this.daylist[this.typelist].cityid
        );
        this.$set(
          this.daylist[this.typelist],
          "serviceid",
          this.businesslist[index].id
        );
        this.$set(
          this.daylist[this.typelist],
          "range",
          this.businesslist[index].range
        );
        this.$set(
          this.daylist[this.typelist],
          "serviceTitle",
          this.businesslist[index].title
        );
        if(this.typelist!=this.daylist.length-1){
          this.$set(
          this.daylist[this.typelist + 1],
          "cityName",
          this.daylist[this.typelist].cityName
        );
        this.$set(
          this.daylist[this.typelist + 1],
          "cityid",
          this.daylist[this.typelist].cityid
        );
         }
      } 
       if (this.businesslist[index].range == 3) {
          this.$set(
          this.daylist[this.typelist],
          "endCityName",
          null
        );
        this.$set(
          this.daylist[this.typelist],
          "endCityid",
          null
        );
         this.$set(
          this.daylist[this.typelist],
          "serviceid",
         this.businesslist[index].id
        );
        this.$set(
          this.daylist[this.typelist],
          "range",
          this.businesslist[index].range
        );
        this.$set(
          this.daylist[this.typelist],
          "serviceTitle",
          this.businesslist[index].title
        );
       }
    },
    //获取路途景点
    async scenic(index) {
      let cityid = this.daylist[index].cityid;
      let data = await getScenicByCity(cityid);
      if (data) {
        this.spotlist = data;
      }
    },
    //获取附近城市
    async chenshi(index) {
      let cityid = this.daylist[index].cityid;
      let data = await getNearbyCityUrl(cityid);
      if (data) {
        this.citylist = data;
        let img = [];
        for (const test of this.citylist) {
          img.push(test.cityName);
        }
        this.citychen = img;
      }
    },
    //点击选择酒店
    roomclick(list,index){
      if(list.endCityName!=null){
       if(this.Generalroom.length>index){
         if(this.Generalroom[index].date!=null){
             this.$toast("已选择好了酒店");
              return;
         }
      }
        if(list.falg==false){
           this.$router.push({
        path:'/B_room/'+list.date+"/"+list.endCityid,
      })
        }else if(list.falg==true){
           this.$toast("完善游玩类型");
        }
      }else if(list.endCityName==null){
       this.$toast("完善游玩类型");
      }
    },
    //上一页
    Previous:function(){
    this.$router.push({
        path:'/B_index',
      })
    },
    //选择车辆
    vehicleclick:function(){
    this.$router.push({
      path:'/B_vehicle',
    })
    },
    //选择导游
    guide:function(){
     this.$router.push({
       path:'/B_game',
     })
    },
    //点击预订
    bookclick(){
      let manni=this.Generalroomprice+this.vehicledataprice+this.guidetyplistyprice
      if(this.piaylist_a.length!=this.Generalroom.length){
        this.$toast("完善游玩信息");
        return;
      }
      if(this.vehicledataprice==0){
        this.$toast("选择车辆");
        return;
      }
      
      this.$router.push({
        path:'/B_orderlist_a/'+manni,
      })
    },
    //拼接数据
    Splicing(){
     for(let i=0;i<this.Generalroom.length;i++){
        let hotelInforDetails=[];
       for(let list of this.Generalroom[i].room){
        this.hotelInforDetailsimg={};
         this.$set(this.hotelInforDetailsimg,"hotelid",list.hotelid);
         this.$set(this.hotelInforDetailsimg,"roomid",list.id);
         this.$set(this.hotelInforDetailsimg,"num",list.Number);
       }
       hotelInforDetails.push(this.hotelInforDetailsimg);
       this.$set(this.daylist[i],'hotelInforDetails',JSON.stringify(hotelInforDetails));
     }
     this.piaylist(JSON.parse(JSON.stringify(this.daylist)))
    }
  }
};
</script>
    
    
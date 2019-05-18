
    <template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/head_fenlei_icon@2x.png">
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
                人数
                <i class="bao_her_e">{{pathlist.people}}</i>
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
                第{{list.daty}}天
                <i class="font-12 color-b">({{list.time | shijian}})</i>
              </i>
              <i class="float_right color-b">
                <i class="xuanbao_e">
                  <img src="../../assets/img/A/home_lydz_adres2_icon@2x.png">
                </i>
                <i>华盛顿>洛杉矶</i>
              </i>
              <span class="float_right xuanbao_d">
                <button class="color-d youw">选择游玩类型</button>
                <button class="color-d">选择酒店</button>
              </span>
            </div>

            <!--选择游玩类型-->
            <div class="dianj_bao font-14">
              <div class="dianj_bao_a">
                <ul>
                  <li class="dianj_bao_z">
                    <span class="dianj_bao_c dianj_bao_c_jia"></span>
                    <i>接机</i>
                    <input class="dianj_bao_b color-b" type="text" value="请输入航班号">
                  </li>

                  <li class="dianj_bao_z">
                    <span class="dianj_bao_c"></span>
                    <i class="text_left float_left">#广州市民一日游#</i>
                    <p class="color-b font-12 dianj_bao_d">范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶</p>
                    <text class="dianj_bao_e yinc">洛杉矶</text>
                  </li>

                  <li class="dianj_bao_z">
                    <span class="dianj_bao_c"></span>
                    <i>#广州市民一日游#</i>
                    <p class="color-b font-12 dianj_bao_d">范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶</p>
                    <text class="dianj_bao_e yinc">洛杉矶</text>
                  </li>

                  <li class="dianj_bao_z">
                    <span class="dianj_bao_c"></span>
                    <i>#广州市民一日游#</i>
                    <p class="color-b font-12 dianj_bao_d">范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶范围洛杉矶</p>
                    <text class="dianj_bao_e yinc">洛杉矶</text>
                  </li>
                </ul>
              </div>
            </div>
            <!---->
          </li>
          <li>
            <div class="youw_s_jia">
              <i class="float_left">选择车辆</i>
              <i class="zinan_b float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </div>
          </li>
          <li>
            <div class="youw_s_jia">
              <i class="float_left">选择导游</i>
              <i class="zinan_b float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </div>
          </li>
        </ul>

        <button class="color background-d font-14 xiayi">共￥4596.0预订</button>
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
.dianj_bao_c{
	margin-top: 0.5rem;
	float:left;
	display: block;
	width: 20px;
	height: 20px;
	margin-right: 0.5rem;
	background-image:url(../../assets/img/A/home_choice_unche@2x.png);
	background-size:100% 100%;
}
.dianj_bao_c_jia{
	background-image:url(../../assets/img/A/home_choice_check@2x.png);
}
.xuanbao_e img{
  width:0.6rem;
  height:0.6rem;
}
</style>
    <script>
import { mapState } from "vuex";
import {selectCarServiceUrl} from "@/utils/getData";
export default {
  name: "index",
  data() {
    return {
      type: 1 ,//1收起2展示
      daylist:[],//天数列表
      time:"",//每天时间
      businesslist:[],//获取车辆业务类型
    };
  },
  computed: {
    ...mapState({
      pathlist: state => state.route.pathlist
    })
  },
  filters:{
    shijian:function(value){
      let endtime_y = new Date(value).getFullYear(); //年
      let endtime_m = new Date(value).getMonth() + 1; //月
      let endtime_x = new Date(value).getDate(); //日
      let endtime = endtime_y + "-" + endtime_m + "-" + endtime_x;
      return endtime;
    }
  },
  mounted() {
    console.log(this.pathlist);
    this.daytyp();
    this.business();
  },
  methods: {
    exhibition(index) {
      this.type = index;
    },
    daytyp:function(){
    this.time=new Date(this.pathlist.certValidDate).getTime()-86400000;
    for(let i=1;i<=this.pathlist.datet;i++){
     let img={};
      this.time=this.time+86400000;
      this.$set(img,'daty',i)
      this.$set(img,'time',this.time);
      this.daylist.push(img);
    }
    console.log(this.daylist)
    },
    //获取
   async business(){
    selectCarServiceUrl({

    }).then(data=>{
     this.businesslist=data;
    })
    },
  }
};
</script>
    
    
<template>
  <div class="index" style="background-color:#F5F5F5">
    <div class="dingjia_b">
      <div class="sou_her background-a sou_her_jia">
        <ul class="sou_her_a">
          <li class="float_left font-16">
            <button class="color-f" style="margin-top: 0.3rem;">取消</button>
          </li>
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
          <li>
            <i class="color-g">常规旅行</i>
            <i class="sou_her_q_a"></i>
          </li>
          <li>
            <i>当地参团</i>
            <i></i>
          </li>
          <li>
            <i>当地玩家</i>
            <i></i>
          </li>
          <li>
            <i>油轮</i>
            <i></i>
          </li>
          <li>
            <i>景点</i>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="brijtan_b" v-if="type!=0"></div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>日期</i>
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
              <i>行程</i>
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
              <i>全部筛选</i>
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
        <!--日期-->
        <div class="ong_z" v-if="type==1">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">筛选日期</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list, index) in dataList"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click.stop="monthClick(index)"
              >{{list.month}}月</li>
            </ul>
          </div>
          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding(1)"
          >确定</button>
        </div>

        <!--行程天数-->
        <div class="ong_z" v-if="type==2">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">行程天数</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li class="float_left">1天</li>
            </ul>
          </div>
          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding(2)"
          >确定</button>
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
              <li class="float_left">0-99</li>
              <li class="float_left">1000-2999</li>
              <li class="float_left">3000-4999</li>
              <li class="float_left">5000-6999</li>

              <samp class="jg_c">
                <li class="float_left">
                  <input type="number" placeholder="请输入数值">
                </li>
                <li class="float_left">
                  <input type="number" placeholder="请输入数值">
                </li>
                <li class="float_left" style="margin-right: 0px!important">
                  <input type="number" placeholder="请输入数值">
                </li>
              </samp>
            </ul>
          </div>

          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding(3)"
          >确定</button>
        </div>
        <!--全部筛选-->
        <div class="qyuanb ong_z" v-if="type==4">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">筛选日期</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li class="float_left">1月</li>
              <li class="float_left">2月</li>
              <li class="float_left">3月</li>
              <li class="float_left">4月</li>
              <li class="float_left">5月</li>
              <li class="float_left">6月</li>
              <li class="float_left">7月</li>
              <li class="float_left">8月</li>
              <li class="float_left">9月</li>
              <li class="float_left">10月</li>
              <li class="float_left">11月</li>
              <li class="float_left">12月</li>
            </ul>
          </div>

          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">行程天数</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li class="float_left">1天</li>
              <li class="float_left">2天</li>
              <li class="float_left">3天</li>
              <li class="float_left">4天</li>
              <li class="float_left">5天</li>
              <li class="float_left">6天</li>
              <li class="float_left">7天</li>
              <li class="float_left">8天</li>
              <li class="float_left">9天</li>
              <li class="float_left">10天</li>
              <li class="float_left">11天</li>
              <li class="float_left">12天</li>
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
              <li class="float_left">0-99</li>
              <li class="float_left">1000-2999</li>
              <li class="float_left">3000-4999</li>
              <li class="float_left">5000-6999</li>

              <samp class="jg_c">
                <li class="float_left">
                  <input type="number" placeholder="请输入数值">
                </li>
                <li class="float_left">
                  <input type="number" placeholder="请输入数值">
                </li>
                <li class="float_left" style="margin-right: 0px!important">
                  <input type="number" placeholder="请输入数值">
                </li>
              </samp>
            </ul>
          </div>

          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">途径景点</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li class="float_left">休士顿火箭球馆</li>
              <li class="float_left">休士顿火箭球馆</li>
              <li class="float_left">休士顿火箭球馆</li>
              <li class="float_left">休士顿火箭球馆</li>
            </ul>
          </div>

          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding(4)"
          >确定</button>

          <div class="di_s_b_dengl_chonz font-16">
            <button class="float_left di_s_b_dengl_chonz_a color-d">重置</button>
            <button class="float_right di_s_b_dengl_chonz_b border_b color-b" @click="queding(5)">取消</button>
          </div>
        </div>
      </div>
    </div>

    <div class="dingjia_a">
      <div class="dingjia_a_ajia">
        <ul class="sou_her_www font-14">
          <li @click="sertey(1)" :class="[srtype==1?'sou_her_www_a':'']">
            <button>销量</button>
          </li>
          <li @click="sertey(4)" :class="[srtype==4?'sou_her_www_a':'']">
            <button>好评</button>
          </li>
          <li @click="sertey(2)" :class="[srtype==2?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon.png">
              </i>
            </span>
          </li>
          <li @click="sertey(3)" :class="[srtype==3?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon - 1.png">
              </i>
            </span>
          </li>
        </ul>
      </div>

      <div class="ze_x">
        <div class="ze_x_a" v-for="(sert,index) in styser" :key="index">
          <div style="overflow:hidden;">
            <div class="float_left ze_x_le">
              <img :src="imgtep[1]">
            </div>
            <div class="float_left ze_x_ril">
              <div class="font-14 ze_x_ril_jia">{{sert.title}}</div>
              <ul class="font-12 ze_x_ril_a color-b">
                <li>限时特卖</li>
                <li>限时特卖</li>
              </ul>
              <div class="font-12 ze_x_ril_b color-c">{{sert.subtitle}}</div>
            </div>
          </div>
          <div class="font-12 color-b ze_x_ril_c">{{sert.infor}}</div>
          <div>
            <ul class="ze_x_ril_d float_right">
              <li class="font-14">
                <i class="color-h">￥{{sert.price}}</i>
                <i>/元起</i>
              </li>
              <li class="font-12">{{sert.commentNum}}条评论</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { seledin } from "@/utils/getData";
export default {
  name: "index",
  data() {
    return {
      type: "", //1日期，2行程，3价格，4全部，
      srtype: 1, //1综合，2销量，3降价格，4升价格
      styser: [], //
      imgtep: [],
      dataList: [], //日期
      ttpt: "",
      day: "", //天
      sypind: ""
    };
  },
  //计算属性
  computed:{
    //获取选择的日期
    date(){
      let lists = [];
        for (const list of this.dataList) {
            if(list.flag){
              lists.push(list);
            }
        }
      return lists;
    },
  },
  mounted() {
    this.LopTime(); //获取当前一年的月份和天数
    this.routine(); //一进去默认常规没有筛选数据
    this.LopTime_list(); //12个月循环
  },
  methods: {
    teypex(index) {
      if (this.type != 0 && this.type == index) {
        this.type = "";
      } else {
        this.type = index;
      }
    },
    //销售量和价格的切换
    sertey(index) {
      this.srtype = index;
      this.routine();
    },
    //月份点击
    monthClick(index) {
      this.dataList[index].flag = !this.dataList[index].flag;
      if (this.dataList) return; //多选 当datalist[index].flag=true//为选中月分
    },
    queding(index) {
      this.ttpt = index;
      //点击月份确定
      if (this.ttpt == 1) {
         let selectate = [];
        for (var i=0; i<12 ;i++) {
          let map = {};
          if (this.dataList[i].flag==true) {
            this.$set(map, "year", dataList.year);
            this.$set(map, "month", dataList.month);
            this.$set(map, "days", dataList.days);
          }
        }
         this.selectate.push(map);
         this.dataList = selectate;
         this.routine();
      }
      //////
    },
    LopTime(year = new Date().getFullYear(), month = new Date().getMonth()) {
      //计算这个月多少天
      let day = new Date(year, month, 0).getDate(); //当月总天数
      console.log("这个月共" + day + "天");
      return day;
    },
    LopTime_list() {
      let currentDate = new Date();
      let year = currentDate.getFullYear(); //年
      let month = currentDate.getMonth() + 1; //月
      let list = []; //创建要传的数组
      //开始循环12个月
      for (let i = 0; i < 12; i++) {
        if (month > 12) {
          month = 1; //1月
          year++; //加年
        }
        //  //把年月set进去map{}字符窜
        let map = {}; //创建
        this.$set(map, "year", year);
        this.$set(map, "month", month);
        this.$set(map, "flag", false);
        let day = this.LopTime(year, month);
        let days = [];
        for (let k = 1; k <= day; k++) {
          //这个月有多少天循环多少
          days.push(k);
        }
        this.$set(map, "days", days.toString());
        list.push(map); //List[{year,month,{day}},{}]
        month++; //每循环一次加一月
      }
      console.log(list);
      this.dataList = list;
    },
    ////////////////
    async routine() {
      let data = await seledin(this.dataList, this.day, this.srtype);
      if (data) {
        this.styser = data.list;
        this.imgtep = data.list[0].carImg.split(",");
      }
    }
  }
};
</script>

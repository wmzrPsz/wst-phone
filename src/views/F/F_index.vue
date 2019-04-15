<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left">
        <img src="../../assets/img/A/head_fenlei_icon@2x.png">
      </i>
      <i class="he_t_baoc color">详情页</i>
      <i class="her_a_rigth float_right">
        <img src="../../assets/img/A/head_car_icon@2x.png">
      </i>
    </div>
    <div class="dingjia">
      <div class="baoc">
        <img src="../../assets/img/B/1.png">
      </div>
      <div class="Route">
        <text class="font-14" style="font-weight: 600">常规路线</text>
        <div class="Route_b">
          <i class="Route_a">
            <img src="../../assets/img/B/bczc_adress_icon@2x.png">
          </i>
          <span class="font-14 color-b float_left">广州</span>
          <input class="float_left font-14 color-b" type="text" placeholder="输入你要搜索的城市" name>
        </div>
        <!--出发日期-->
        <div class="border_e" style="overflow: hidden; padding-bottom: 1rem;">
          <div class="Route_z">
            <div class="font-14 float_left Route_c">出发日期</div>
            <div class="float_right Route_c_a">
              <dl class="font-14 color-b">
                <dd
                  v-for="(list, index) in dataList"
                  :key="index"
                  :class="list.flag?'yue':''"
                  @click.stop="monthClick(index)"
                >{{list.month}}月</dd>
              </dl>
            </div>
          </div>
          <div class="Route_z">
            <div class="font-14 float_left Route_c">行程天数</div>
            <div class="float_right Route_c_a">
              <dl class="font-14 color-b">
                <dd>1天</dd>
                <dd>2天</dd>
                <dd>3天</dd>
                <dd>4天</dd>
                <dd>5天</dd>
                <dd>6天</dd>
                <dd>7天</dd>
                <dd>8天</dd>
                <dd>9天</dd>
                <dd>10天</dd>
                <dd>11天</dd>
                <dd>更多</dd>
              </dl>
            </div>
          </div>
          <div class="Route_z">
            <div class="font-14 float_left Route_c">预算价格</div>
            <div class="float_right Route_c_a Route_c_a_jia" style="border:none;">
              <dl class="font-14 color-b">
                <dd>0-999</dd>
                <dd>1K-3K</dd>
                <dd>3K-5K</dd>
                <dd>5K-8K</dd>
                <input class="font-14 color-d" type="text" value="2000" name>
                <span class="float_left font-18">-</span>
                <input class="font-14 color-d" type="text" value="2000" name>
              </dl>
            </div>
          </div>
        </div>
        <div class="bao_her_c font-14 jieji_c_a" style="overflow: hidden;">
          <ul>
            <li>
              <i class="float_left">路途景点</i>
              <i class="bao_her_d float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            <li>
              <i class="float_left">制定标签</i>
              <i class="bao_her_d float_right">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
          </ul>
        </div>
      </div>
      <button class="color background-d font-14 xiayi" style="margin-top:2rem!important;">搜索</button>
    </div>
    <!--点击选择月份-->
    <div class="brijtan " v-if="yue==2"></div>
    <div class="Route_x " v-if="yue==2">
      <div class="font-16">{{listpryue.month}}月</div>
      <div class="Route_x_a">
        <dl class="font-12">
          <dd>
            1号
          </dd>
        </dl>
      </div>

      <button
      @click="yuetpy()"
        class="color background-d font-14 xiayi"
        style="margin-top:2rem!important; margin-bottom:1rem!important;"
      >确定</button>
    </div>
  </div>
</template>
<style lang="less">
.yue{
	color: white;
	background-color: #FF8C00;
}
</style>
<script>
export default {
  name: "index",
  data() {
    return {
      dataList: [], //日期
      day: "", //日期的天
      daylist: [], //行程的天
      yue:1,//表示月份隐藏
      listpryue:'',
    };
  },
  created() {
    this.LopTime_list();
  },
  //计算属性
  computed: {
    //获取选择的日期
    date() {
      let lists = [];
      for (const list of this.dataList) {
        if (list.flag) {
          lists.push(list);
        }
      }
      return lists;
    }
  },

  methods: {
    //确定月份
    yuetpy(){
    this.yue=1;
    },
    //月份点击
    monthClick(index) {
    this.yue=2;
     if(this.dataList[index].flag==false){
        this.dataList.map(elem => {
        elem.flag = false;
      });
      }
    this.dataList[index].flag = !this.dataList[index].flag;
   for (const listpr of this.dataList) {
        if(listpr.flag==true){
         this.listpryue=listpr;
        }
      }
	},
    LopTime(year = new Date().getFullYear(), month = new Date().getMonth()) {
      //计算这个月多少天
      let day = new Date(year, month, 0).getDate(); //当月总天数
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
          let map = {};
          this.$set(map, "day", k);
          this.$set(map, "flag", false);
          days.push(map);
        }
        this.$set(map, "days", days);
        list.push(map); //List[{year,month,{day}},{}]
        month++; //每循环一次加一月
      }
      console.log(list);
      this.dataList = list;
    }
  }
};
</script>

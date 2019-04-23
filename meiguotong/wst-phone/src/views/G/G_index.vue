<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"><img src="../../assets/img/A/head_fenlei_icon@2x.png"></i>
      <i class="he_t_baoc color">详情页</i>
       <i class="her_a_rigth float_right"><img src="../../assets/img/A/head_car_icon@2x.png"></i>
      </div>
      <div class="dingjia">

      <div class="baoc">
      	<img src="../../assets/img/B/1.png">
      </div>

      <div class="group">
        <text class="font-14 Order_d_b">当地参团</text>
        <input class="font-14 group_a color-b" type="text" value="输入搜索目的地" name="">
        <div class="group_b">
          <i class="float_left"><img src="../../assets/img/C/ddct_huo_icon@2x.png"></i>
          <span class="float_left font-14">热门目的地</span>
        </div>
      </div>

      <div class="group_c font-14 color-b">
       <router-link to="/G_details">
        <ul>
          <li>奥克兰</li>
          <li>奥克兰</li>
          <li>缅因州.波特兰</li>

          <li>奥克兰</li>
          <li>奥克兰</li>
          <li>缅因州.波特兰</li>

          <li>奥克兰</li>
          <li>奥克兰</li>
          <li>缅因州.波特兰</li>
        </ul>
       </router-link>
      </div>

  </div>
  </div>
</template>
<script>
import { HotCityList} from "@/utils/getData";
export default {
  name:'index',
  data(){
    return{

    }
  },
  mounted(){
    this.stycli();
  },
  methods:{
  async stycli(){
    let data= await HotCityList();
  }
  },
}
</script>

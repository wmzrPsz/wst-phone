<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick=" window.history.go(-1);">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">出游人信息</i>
      <router-link to="/p_contacts_a/1">
        <i class="float_right color her_a_zong_a font-14">添加</i>
      </router-link>
    </div>
    <div class="dingjia">
      <div class="Edinz_zz">
        <ul class="Edinz_b font-16">
          <li v-for="(list,index) in lianthis" :key="index" @click="xuanclick(index)">
            <span class="Edinz_c float_left Add_to" v-if="list.flag==false"><img src="../../assets/img/A/home_choice_unche@2x.png"></span>
            <span class="Edinz_c float_left Add_to"  v-if="list.flag==true"><img src="../../assets/img/A/home_choice_check@2x.png"></span>
            <div class="float_left">
              <span>{{list.chineseName}}<i class="ze_jia_a color-b">({{list.englishName}})</i></span>
              <span>{{list.certNo}}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="Choose_a_room_dibu">
        <div class="Choose_a_room_dibu_c font-16 float_left">确认选择({{number}})人</div>
        <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g" @click="qudinclick()">确定人数</button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.Edinz_b li span{
  text-align: left;
}
.Add_to img{
	width: 1rem;
	height:1rem;
	float: left;
}
</style>
<script>
import { lianxir} from "@/utils/getData";
import { mapMutations } from "vuex";
export default {
  name:'index',
  data(){
    return{
    lianthis:[],//联系列表
    }
  },
  created() {
    this.lixiren();
  },
  computed:{
    number(){
    let list=0;
    for(const test of this.lianthis){
         if(test.flag){
          list=list+1;
         }
        }
     return list;
    }
  },
  methods:{
      ...mapMutations("route", ["Selection"]),
   //获取联系人
    async lixiren() {
      let data = await lianxir();
      if (data) {
        this.lianthis = data;
        for(const test of this.lianthis){
         this.$set(test,'flag',false);
        }
      }
    },
    //点击选择联系人
    xuanclick(index){
       this.lianthis[index].flag = !this.lianthis[index].flag;
    },
    //点击确定
    qudinclick :function(){
      if(this.number>this.$route.params.zonchoiceperson){
        this.$toast("选择人数过多");
        return;
      }
      let Selection=[];
      for(const testlis of this.lianthis){
         if(testlis.flag){
          Selection.push(testlis);
         }
        }
      this.Selection(Selection);
      window.history.go(-1);
      //  this.$router.push({
      //     name: '@/orderlist',
      //     params: {
      //       typsty:1
      //     }
      //   })
    }
  }
}
</script>


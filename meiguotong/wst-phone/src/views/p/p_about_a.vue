<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"  onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
      <i class="her_a_zong color float_zhong" v-if="this.styp==1">{{gongsi.title}}</i>
      <i class="her_a_zong color float_zhong" v-if="this.styp==2">{{womensty.title}}</i>
    </div>
  <div v-html="gongsi.content" class="a_guany" v-if="this.styp==1">
    <div>{{gongsi}}</div>
  </div>

  <div v-html="womensty.content" class="b_guany" v-if="this.styp==2">
    <div>{{womensty.content}}</div>
  </div>
  </div>
</template>
<script>
import { guanyusty } from "@/utils/getData";
export default {
  name:'index',
  data(){
    return{
    gongsi:'',//公司
    womensty:'',//我们
    styp:'',//1是公司2是我们
    }
  },
  created(){
   this.stypxian();
  },
  methods:{
   async stypxian(){
     this.styp=this.$route.params.type;
     let data = await guanyusty();
     if(data){
      this.gongsi=data[0];
      this.womensty=data[1];
      console.log(this.styp);
     }
   }
  }
}
</script>

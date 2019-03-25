<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left"  onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">个人中心</i>
	  <router-link to="/p_news">
      <i class="her_a_rigth float_right">
        <img src="../../assets/img/D/grzx_messa_icon@2x.png">
      </i>
	  </router-link>
    </div>
    <div class="dingjia">
	 <router-link to="/p_information">
      <div class="centrality" :style="backgroundDiv">
        <div class="centrality_a">
          <div class="centrality_aa beijingtu">
            <img :src="zhiliao.photo">
          </div>
          <div class="centrality_ab color-b font-12">
            <ul>
              <li class="font-14">{{zhiliao.nickName}}</li>
              <LI>手机号:
                <i>{{zhiliao.phone}}</i>
              </LI>
              <li>{{zhiliao.sex | sexVc}}
                <i>{{zhiliao.birthday}}</i>
              </li>
            </ul>
          </div>
          <div class="centrality_ac beijingtu">
            <img src="../../assets/img/A/more_icon@2x.png">
          </div>
        </div>
      </div>
	 </router-link>

      <div class="centrality_zz">
        <div class="centrality_b">
		 <router-link to="/p_order">
          <div class="centrality_b_a border_f">
            <div class="centrality_b_b beijingtu">
              <img src="../../assets/img/D/grzx_wddd_icon@2x.png">
            </div>
            <i class="font-14">我的订单</i>
          </div>
		 </router-link>
          <div class="centrality_b_a">
            <div class="centrality_b_b beijingtu">
              <img src="../../assets/img/D/grzx_tkdd_icon@2x.png">
            </div>
            <i class="font-14">退款订单</i>
          </div>
        </div>

        <div class="centrality_c color-b font-14">
          <ul>
            <router-link to="/p_collection">
            <li>我的收藏
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            </router-link>
            <router-link to="/p_draft">
            <li>我的草稿
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            </router-link>
            <router-link to="p_finance">
            <li>财务管理
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            </router-link>
            <router-link to="/p_contacts">
            <li>常用联系人
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            </router-link>
            <router-link to="/p_about">
            <li>关于我们
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
            </router-link>
          </ul>
        </div>
      </div>

      <button class="font-14 centrality_d" @click="liog">退出登录</button>
    </div>
  </div>
</template>
<script>
import {
  Material //个人质料
} from "@/utils/getData";
import { mapState, mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/D/grzx_bg@2x.png") + ")"
	  },
	  zhiliao:"",//个人中心质料
    };
  },
  created(){
   this.Material();
  },
  computed: {
    
  },
  components: {},
   filters:{
	 sexVc:function(value){
		 	if(value == 1){
				return "男";
			}
			return "女";
	 }
 },
  methods: {
    ...mapMutations(["removeLogin"]),
    //个人质料
    async Material() {
      let data = await Material();
      if (data) {
        this.zhiliao = data;
      }
    },
    //退出登登陆
   async liog(){
     this.removeLogin();
     this.$router.push("/login");
    }
  }
};
</script>
<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <router-link to="/p_index">
      <i class="her_a_left float_left" >
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      </router-link>
      <i class="her_a_zong color float_zhong">常用联系人</i>
      <router-link to="/p_contacts_a/1">
        <i class="float_right color her_a_zong_a font-14">添加</i>
      </router-link>
    </div>
    <div class="ztjiao">
      <div class="Edinz_zz">
        <ul class="Edinz_b font-16">
          <li v-for="(list,index) in lianthis" :key="index" style=" margin-top:0.5rem">
            <div class="ze_jia">
              <span>
                {{list.chineseName}}
                <i class="ze_jia_a color-b">({{list.englishName}})</i>
              </span>
              <span>{{list.certNo}}</span>
            </div>
            <div class="float_right refundxin_e_d_z">
              <button class="font-12 refundxin_e_d refundxin_e_d_jia" @click="chancfly(index)">删除</button>
              <button class="font-12 refundxin_e_d" @click="xuigaiclick(list)">修改</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.ztjiao{
 margin-top: 2.5rem;
}
.ze_jia span {
  text-align: left;
}
.Edinz_zz {
  width: 95%;
  margin: auto;
}
.ze_jia_a {
  margin-left: 0.5rem;
}
.refundxin_e_d_z {
  padding: 0px;
  margin-top: 0px;
}
.refundxin_e_d_z button {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  margin-top: 0px;
}
</style>
<script>
import { lianxir, shangchulianx } from "@/utils/getData";
import { async } from "q";
import { mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      lianthis: [], //联系人列表
      contactid: "", //删除联系人的ID
    };
  },
  created() {
    this.lixiren();
  },
  methods: {
      ...mapMutations("route", ["contacts"]),
    //修改
    xuigaiclick:function(list){
       this.$router.push({
        path:'/p_contacts_a/2',
     })
     this.contacts(list);
    },
    //获取联系人
    async lixiren() {
      let data = await lianxir();
      if (data) {
        this.lianthis = data;
      }
    },
    //删除联系人
    async shanclianxi() {
      let data = await shangchulianx(this.contactid);
      if (data) {
        this.lixiren();
      }
    },
    //点击删除
    chancfly(index) {
      this.contactid = this.lianthis[index].contactid;
      this.shanclianxi();
      this.$toast("删除成功");
    },
  }
};
</script>

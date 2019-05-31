<template>
  <div class="index">
    <div class="border_e evaluate_wanjia_z">
      <div class="evaluate_wanjia_z_a" v-for="(list,index) in commentlistyp" :key="index">
        <div class="evaluate_wanjia_c beijingtu float_left">
          <img :src="list.memberPhoto">
        </div>
        <div class="evaluate_wanjia_d float_left">
          <div class="font-16 float_left">{{list.memberName}}</div>
          <van-rate v-model="list.level" readonly class="ez-star"/>
          <div class="font-12 color-b evaluate_wanjia_e">{{list.content}}</div>
          <div>
            <div class="float_left font-14 color-b">{{list.createDate}}</div>
            <div class="float_right font-14 color-b">
              <div class="float_left evaluate_wanjia_f" @click="digCommentyp(list)">
                <i>
                  <img src="../../assets/img/B/mddxq_zan_icon.png">
                </i>
                {{list.digNum}}
              </div>
              <div class="float_left evaluate_wanjia_f" @click="commentary(index)">
                <i>
                  <img src="../../assets/img/B/mddxq_pinglun_icon.png">
                </i>
                {{list.childNum}}
              </div>
            </div>
          </div>
          <input
            v-if="list.falg"
            type="text"
            :placeholder=" '回复@'+list.memberName"
            class="erji_b font-12"
            @keyup="showtyp($event)"
            v-model="content"
          >
        </div>
      </div>
      <button class="font-12 wanjiahuof_a color-b" @click="qinglunlist()">全部评价</button>
    </div>
  </div>
</template>
<style lang="less">
</style>   
<script>
import { getRoutePriceDetailsUrl } from "@/utils/getData";
import $ from "jquery";
import { async } from "q";
import store from "@/vuex/index";
export default {
  name: "index",
  data() {
    return {
      carVideo:"",//视频
      pageNo:1,//展示第一条评论
      commentlistyp:[],//评论列表
      content:'',//子评论的内容
      proType:1,//评论产品类型1.包车租车2.短程接送3.接送机4常规路线5.当地参团6.游轮7.景点门票8.当地玩
      digType:1,//'点赞类型：1.评论点赞2.攻略点赞'
    };
  },
  methods: {
    //selectCommentUrl获取评论
    async commentlist(list) {
      let data = await selectCommentUrl(this.pageNo, list.id, this.proType);
      if (data) {
        this.commentlistyp = data.list;
        for (let test of this.commentlistyp) {
          this.$set(test, "falg", false);
        }
      }
    },
    //评论点赞
    async digCommentyp(list) {
      if (store.state.loginUid != 0) {
        let data = await digCommentUrl(list.commentid, this.digType);
        this.commentlist(this.vouchelist);
      }
      if (store.state.loginUid == 0) {
        this.$toast("请先登录");
      }
    },
    //点击查看更多评论
    qinglunlist() {
      this.$router.push({
        path: "/comment/" + this.vouchelist.id + this.proType
      });
    },
    //子评论
    showtyp: function(ev) {
      if (ev.keyCode == 13) {
        let commentid = "";
        for (let test of this.commentlistyp) {
          if (test.falg == true) {
            commentid = test.commentid;
          }
        }
        this.zipingluntyp(commentid);
      }
    },
    //点击展示子评论input
    commentary(index) {
      if (this.commentlistyp[index].falg == false) {
        this.commentlistyp.map(elem => {
          elem.falg = false;
        });
      }
      this.commentlistyp[index].falg = !this.commentlistyp[index].falg;
    },
    //
    async zipingluntyp(commentid) {
      let data = await addChildCommentUrl(commentid, this.content);
      if (data) {
        this.commentlist(this.vouchelist);
        this.content = "";
      }
    }
  }
};
</script>
<template>
  <div class="indexlis">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="her_a_zong color float_zhong">确认订单</i>
    </div>
    <div class="dingjia">
      <div class="Order">
        <div class="gou font-12">
          <div class="gou_a float_left">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
            </i>
            <i class="gou_c">确认订单</i>
          </div>

          <div class="gou_aa">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
            </i>
            <i class="gou_c">确认付款</i>
          </div>

          <div class="gou_a float_right">
            <i class="gou_b">
              <img src="../../assets/img/A/sjzc_wancheng_icon@2x.png">
            </i>
            <i class="gou_c color-b">完成订单</i>
          </div>
          <p class="gou_xian"></p>
        </div>
      </div>
      <div class="Success">
        <div class="beijingtu Success_a">
          <img src="../../assets/img/A/zccg_succes_icon@2x.png">
        </div>
        <div class="font-16 color-d">预订行程成功</div>
        <div class="font-14 color-b">我们将安排好你的行程后已短信通知你</div>
      </div>
      <div class="Success_b">
        <button class="font-14 float_left background-d" @click="cakclick()">查看订单</button>
        <button class="font-14 float_right Success_c" @click="fanclick()">{{tyslit | Return}}</button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.indexlis {
  position: fixed;
  height: auto;
  background-color: #f5f5f5;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>
<script>
export default {
  name: "indexlis",
  data() {
    return {
      tyslit: this.$route.params.tyslit
    };
  },
  filters: {
    Return(value) {
      if (value == 1) {
        return "返回常规路线";
      }
      if (value == 2) {
        return "返回当地参团";
      }
      if (value == 3) {
        return "返回当地玩家";
      }
      if (value == 4) {
        return "返回邮轮";
      }
      if (value == 5) {
        return "返回景点";
      }
    }
  },
  methods: {
    //查看详情
    cakclick: function() {
      this.$router.push({
        path: "/orderlist_b/" + this.$route.params.routeid + "/" + this.tyslit
      });
    },
    //返回
    fanclick: function() {
      if (this.tyslit == 1) {
        this.$router.push({
          path: "//F_details"
        });
      }
      if (this.tyslit == 2) {
        this.$router.push({
          path: "/G_details"
        });
      }
      if (this.tyslit == 3) {
        this.$router.push({
          path: "/H_game"
        });
      }
      if (this.tyslit == 4) {
        this.$router.push({
          path: "/K_tanker"
        });
      }
      if (this.tyslit == 5) {
        this.$router.push({
          path: "/L_scenic"
        });
      }
    }
  }
};
</script>


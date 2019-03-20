<template>
  <div class="index">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">个人中心</i>
    </div>
    <div class="dingjia">
      <div class="centrality_zz">
        <div class="centrality_e font-14">
          <ul>
            <li>
              用户头像
              <span class="float_right" @click="showActionSheet">
                <i class="float_left centrality_e_b_gai beijingtu">
                  <img :src="zhiliao.photo">
                </i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>
            <li>
              手机号
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.phone}}</i>
              </span>
            </li>

            <li>
              邮箱
              <span class="float_right">
                <i class="float_left centrality_e_b color-b">绑定邮箱</i>
              </span>
            </li>

            <li>
              昵称
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.nickName}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>

            <li>
              性别
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.sex | sexVc}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>

            <li>
              我的地址
              <span class="float_right">
                <i class="float_left centrality_e_b">{{zhiliao.address}}</i>
                <i class="float_left centrality_e_a beijingtu">
                  <img src="../../assets/img/A/more_icon@2x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Material //个人质料
} from "@/utils/getData";
export default {
  name: "index",
  data() {
    return {
      zhiliao: "" //个人中心质料
    };
  },
  created() {
    this.Material();
  },
  components: {},
  filters: {
    sexVc: function(value) {
      if (value == 1) {
        return "男";
      }
      return "女";
    }
  },
  methods: {
    //个人质料
    async Material() {
      let data = await Material();
      if (data) {
        this.zhiliao = data;
      }
    },
    //
    //上传头像照片
    showActionSheet() {
         this.getImage();
    },
     getImage() {
          let cmr = plus.camera.getCamera();
          cmr.captureImage(function(p) {
            plus.io.resolveLocalFileSystemURL(p, function(entry) {
              compressImage(entry.toLocalURL(),entry.name);
            }, function(e) {
              plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            });
          }, function(e) {
          }, {
            filter: 'image'
          });
        },

  }
};
</script>

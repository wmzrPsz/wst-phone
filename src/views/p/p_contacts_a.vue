<template>
  <div class="index">
    <div>
      <div class="her_a font-20 background-a" onclick="window.history.go(-1)">
        <i class="her_a_left float_left">
          <img src="../../assets/img/A/back_icon@2x.png">
        </i>
        <i class="her_a_zong color float_zhong">出游人信息</i>
      </div>
      <div class="dingjia">
        <div class="information">
          <ul class="font-16">
            <li >
              <div class="float_left">
                <i class="color-a">*</i>中文姓名
              </div>
              <input
                class="color-b float_right information_a font-16"
                type="text"
                placeholder="需要与证件一至"
                name
                v-model="chineseName"
              >
            </li>
            <li class="information_a_jia_a">
              <div class="float_left">
                <i class="color-a">*</i>英文姓名
              </div>
              <input
                class="color-b float_right information_a_jia font-16"
                type="text"
                placeholder="性 (拼英或英文)"
                name
                v-model="englishName_x"
              >
               <input
                class="color-b float_right information_a_jia font-16"
                type="text"
                placeholder="名 (拼英或英文)"
                name
                v-model="englishName_m"
              >
            </li>

            <li >
              <div class="float_left">
                <i class="color-a">*</i>证件类型
              </div>
              <div class="float_right">
                <select class="float_left font-16 information_b" v-model="certType">
                  <option disabled value>证件类型</option>
                  <option value="1">身份证</option>
                  <option value="2">护照</option>
                  <option value="3">本地ID</option>
                </select>
                <i class="float_left information_c">
                  <img src="../../assets/img/B/search_cglv_open_icon@2x -a.png">
                </i>
              </div>
            </li>
            <li >
              <input
                class="color-b float_right information_a font-16"
                type="text"
                placeholder="输入身份证号"
                name
                v-model="certNo"
              >
            </li>

            <li >
              <div class="float_left">
                <i class="color-a">*</i>证件有效期
              </div>
              <div class="float_right" @click="show = true">{{certValidDate}}</div>
            </li>

            <li >
              <div class="float_left">
                <i class="color-a">*</i>出生年月日
              </div>
              <div class="float_right" @click="show1 = true">{{birthday}}</div>
            </li>

            <li >
              <div class="float_left">
                <i class="color-a">*</i>手机号码
              </div>
              <div class="float_right">
                <select class="float_left font-16 information_b" v-model="area">
                  <option disabled value>手机区域</option>
                  <option
                    v-for="(list,index) in quyustye"
                    :value="list.id"
                    :key="index"
                  >{{list.name}}</option>
                </select>
                <i class="float_left information_c">
                  <img src="../../assets/img/B/search_cglv_open_icon@2x -a.png">
                </i>
              </div>
            </li>
            <li class>
              <input
                class="color-b float_right information_a font-16"
                type="text"
                placeholder="输入手机号码"
                name
                v-model="mobile"
              >
            </li>
          </ul>
        </div>
        <button
          class="di_s_b_dengl color background-d font-16"
          style="margin-top: 3rem;"
          @click="tianjia"
        >确定</button>
      </div>
      <!--证件有效期-->
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker v-model="currentDate" type="date" @cancel="quxiao" @confirm="queding"/>
      </van-popup>
      <!--出生日期-->
      <van-popup v-model="show1" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @cancel="quxiao"
          @confirm="queding_a"
        />
      </van-popup>
    </div>
  </div>
</template>
<style lang="less" scoped>
select {
  text-align: right;
}
.information_a_jia{
	height:1.2rem;
	line-height:1.2rem;
	text-align: right;
}
.information_a_jia_a{
  margin-top: 0.2rem!important;
  margin-bottom: 0.2rem!important;
}
</style>
<script>
import { tianjialianx } from "@/utils/getData";
import { areaSelectList } from "@/utils/config";
import { mapState } from "vuex";

export default {
  name: "index",
  data() {
    return {
      show: false,
      show1: false,
      currentDate: new Date(),
      certType: "", //证件类型
      quyustye: [],
      area: "", //区域
      year: "", //年
      month: "", //月
      day: "", //日
      certValidDate: "", //传的证件日期（yyyy-mm-xxxx）
      birthday: "", //出生日期（yyyy-mm-xx）
      chineseName: "", //中文名字
      englishName: "", //英文名字
      englishName_x: "", //英文性
      englishName_m: "", //英文名
      certNo: "", //证件号码
      mobile: "", //手机号码
      contactid: ""
    };
  },
  created() {
    this.year = this.currentDate.getFullYear(); //年
    this.month = this.currentDate.getMonth() + 1; //月
    this.day = this.currentDate.getDate(); //日
    this.certValidDate = this.year + "-" + this.month + "-" + this.day;
    this.birthday = this.year + "-" + this.month + "-" + this.day;
    this.quyu();
    console.log(this.contacts);
    if (this.$route.params.typlis == 2) {
      let xinmi=[];
      this.chineseName = this.contacts.chineseName;
      xinmi = this.contacts.englishName.split("/");
      this.englishName_x=xinmi[0];
      this.englishName_m=xinmi[1];
      this.certType = this.contacts.certType;
      this.certNo = this.contacts.certNo;
      this.certValidDate = this.contacts.certValidDate;
      this.birthday = this.contacts.birthday;
      this.mobile = this.contacts.mobile;
      this.area = this.contacts.area;
      this.contactid = this.contacts.contactid;
    }
  },
  computed: {
    ...mapState({
      contacts: state => state.route.contacts
    })
  },
  methods: {
    //拿区域
    async quyu() {
      let data = await areaSelectList();
      if (data) {
        this.quyustye = data; //区域
        console.log(data);
      }
    },
    //取消
    quxiao() {
      this.show = false;
    },
    //确定获取证件有效期
    queding() {
      this.show = false;
      this.year = this.currentDate.getFullYear(); //年
      this.month = this.currentDate.getMonth() + 1; //月
      this.day = this.currentDate.getDate(); //日
      this.certValidDate = this.year + "-" + this.month + "-" + this.day;
    },
    //确定出生日期
    queding_a() {
      this.show1 = false;
      this.year = this.currentDate.getFullYear(); //年
      this.month = this.currentDate.getMonth() + 1; //月
      this.day = this.currentDate.getDate(); //日
      this.birthday = this.year + "-" + this.month + "-" + this.day;
    },
    //点击确定添加联系人
    tianjia() {
      if (this.chineseName == 0) {
        this.$toast("请输入中文姓名");
        return;
      }
      if (this.englishName_x == 0) {
        this.$toast("请输入英文姓");
        return;
      }
      if (this.englishName_m == 0) {
        this.$toast("请输入英文名");
        return;
      }
      if (this.certType == 0) {
        this.$toast("请选择证件类型");
        return;
      }
      if (this.certNo == 0) {
        this.$toast("请输入证件号");
        return;
      }
      if (this.area == 0) {
        this.$toast("请选择手机区域");
        return;
      }
      if (this.mobile == 0) {
        this.$toast("请输入正确手机号码");
        return;
      }
      this.tianjiatype();
      this.$toast("添加成功");
      window.history.go(-1);
    },
    async tianjiatype() {
      this.englishName=this.englishName_x+"/"+this.englishName_m
      let data = await tianjialianx(
        this.chineseName,
        this.englishName,
        this.certType,
        this.certNo,
        this.certValidDate,
        this.birthday,
        this.area,
        this.mobile,
        this.contactid
      );
    }
  }
};
</script>
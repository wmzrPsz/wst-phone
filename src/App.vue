<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
import { getLanguage, getProtocol, getCurrency, Material } from '@/utils/getData';
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })

    this.getProtocol();
    this.getLanguage();
    this.getCurrency();
    this.getMember();
  },
  computed: {
      ...mapState([ "loginType" ]),
  },
  methods: {
    ...mapMutations(["languageListChange", "currencyListChange", "setComProtocol", "setMember"]),
    //获取网站基本参数
    async getProtocol() {
      this.setComProtocol(await getProtocol());
    },
    //获取语言
    async getLanguage() {
       this.languageListChange(await getLanguage())
    },
    //获取货币
    async getCurrency() {
      this.currencyListChange(await getCurrency())
    },
    //获取会员信息
    async getMember() {
        if (this.loginType == 2) {
            this.setMember(await Material());
        }
    },
  }
}
</script>


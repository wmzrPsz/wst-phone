import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  //**不要在发布环境下启用严格模式！**严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: debug,
  state: {
      loginUid: "",
      loginKey: "",
      loginTime: "",
      loginType: 1,  //1游客2.会员
      languageid: 1, //语言ID
      currencyid: 1,  //货币ID
      pageSize: 2,  //页数
      comProtocol: {},  //网站基本信息
      languageList: [],  //语言集合
      currencyList: [],  //货币集合
      member: {},  //会员信息
  },
  getters: {

  },
  mutations: {
    //登录
    addLogin(state,data){
      [state.loginUid, state.loginKey, state.loginTime, state.loginType] = [data.uid, data.key, data.time, 2];
      console.log(state.loginUid,state.loginKey,state.loginTime);
    },
    //退出登录
    removeLogin(state){
      console.log("退出登录");
      [state.loginUid, state.key, state.loginTime, state.loginType] = ['','','',1];
      console.log(state.loginUid,state.loginKey,state.loginTime);
    },
    //语言改变
    changeLanguage(state, languageid){
      state.languageid = languageid;
      console.log(state.languageid );
    },
    //货币改变
    changeCurrency(state, currencyid){
      state.currencyid = currencyid;
      console.log(state.currencyid );
    },
    //设置网站基本参数
    setComProtocol(state, comProtocol) {
      state.comProtocol = comProtocol;
    },
    //语言list改变
    languageListChange(state,  languageList) {
      state.languageList = languageList
    },
    //货币集合改变
    currencyListChange(state, currencyList){
      state.currencyList = currencyList;
    },
    //设置会员信息
    setMember(state, member) {
      state.member = member;
    },
  },
  actions: {

  },
  modules: {

  },
  // plugins: debug ? [myPluginWithSnapshot] : []
})

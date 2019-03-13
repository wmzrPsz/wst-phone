import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  //**不要在发布环境下启用严格模式！**严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: debug,
  state: {
      uid: "",
      key: "",
      time: "",
      type:1,  //1.游客 2.会员
      languageid: 1, //语言ID
      currencyid: 1,  //货币ID
  },
  getters: {

  },
  mutations: {
    //登录
    addLogin(state,data){
      [state.uid, state.key, state.time, state.type] = [data.uid, data.key, data.time, 2];
      console.log(state.uid,state.key,state.time);
    },
    //退出登录
    removeLogin(state){
      console.log("退出登录");
      [state.uid, state.key, state.time, state.type] = ['','','',1];
      console.log(state.uid,state.key,state.time);
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
  },
  actions: {

  },
  modules: {

  },
  // plugins: debug ? [myPluginWithSnapshot] : []
})

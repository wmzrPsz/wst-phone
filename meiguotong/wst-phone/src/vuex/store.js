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
  },
  actions: {

  },
  modules: {

  },
  // plugins: debug ? [myPluginWithSnapshot] : []
})

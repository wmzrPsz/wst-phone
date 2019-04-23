// import Vue from 'vue'
// import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


const state = {
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
}


const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


const store = new Vuex.Store({
  strict: debug,
  state,
  getters,
  mutations,
  actions,
  modules,
})

export default store

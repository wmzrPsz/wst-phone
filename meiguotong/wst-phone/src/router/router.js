import Vue from 'vue'
import Router from 'vue-router'

const error = r => require.ensure([], () => r(require('../views/error/error')), 'error')
const login = r => require.ensure([], () => r(require('../views/index/login')), 'login')//登陆首页
const register = r => require.ensure([], () => r(require('../views/index/register')), 'register')//注册
const forget = r => require.ensure([], () => r(require('../views/index/forget')), 'forget')//忘记密码
const indexher = r => require.ensure([], () => r(require('../views/index/indexher')), 'indexher')//登陆进去的首页
const register_business = r => require.ensure([], () => r(require('../views/index/register_business')), 'register_business')//商家注册
const binding = r => require.ensure([], () => r(require('../views/index/binding')), 'binding')//绑定手机号码

//当地玩家
const sousuo = r => require.ensure([], () => r(require('../views/gameplayer/sousuo')), 'sousuo')//搜索当地玩家
//当地参团
const delegation = r => require.ensure([], () => r(require('../views/gameplayer/delegation')), 'delegation')//当地参团
//当地玩家
const game = r => require.ensure([], () => r(require('../views/gameplayer/game')), 'game')//当地玩家
//油轮
const Tanker = r => require.ensure([], () => r(require('../views/gameplayer/Tanker')), 'Tanker')//油轮
//景点
const Scenicspot = r => require.ensure([], () => r(require('../views/gameplayer/Scenicspot')), 'Scenicspot')//景点
//首页（弹出）
const sousuo_tan = r => require.ensure([], () => r(require('../views/gameplayer/sousuo_tan')), 'sousuo_tan')//首页（弹出）
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: error,
      meta: { "title": 404 }
    },
    {
      path: '/',
      name: 'root',
      component: indexher,
      //  redirect: 'login',
      meta: { 'title': '首页' }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { 'title': '登录' },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { 'title': '注册' }
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta: { 'title': '忘记密码' }
    },
    {
      path: '/indexher',
      name: 'indexher',
      component: indexher,
      meta: { 'title': '首页' }
    },
    {
      path: '/register_business',
      name: 'register_business',
      component: register_business,
      meta: { 'title': '商家注册' }
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding,
      meta: { 'title': '绑定' }
    },
    //当地玩家
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo,
      meta: { 'title': '搜索' }
    },
    //首页（弹出）
    {
      path: '/sousuo_tan',
      name: 'sousuo_tan',
      component: sousuo_tan,
      meta: { 'title': '首页(弹出)' }
    },
    //delegation搜索当地参团
    {
      path: '/delegation',
      name: 'delegation',
      component: delegation,
      meta: { 'title': '搜索当地参团' }
    },
    //搜索当地玩家
    {
      path: '/game',
      name: 'game',
      component: game,
      meta: { 'title': '搜索当地玩家' }
    },
    //搜索油轮
    {
      path: '/Tanker',
      name: 'Tanker',
      component: Tanker,
      meta: { 'title': '搜索油轮' }
    },

    //搜索油轮
    {
      path: '/Scenicspot',
      name: 'Scenicspot',
      component: Scenicspot,
      meta: { 'title': '搜索景点' }
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

const error = r => require.ensure([], () => r(require('../views/error/error')), 'error')
const login = r => require.ensure([], () => r(require('../views/index/login')), 'login')//登陆首页
const register = r => require.ensure([], () => r(require('../views/index/register')), 'register')//注册
const forget = r => require.ensure([], () => r(require('../views/index/forget')), 'forget')//忘记密码
const indexher = r => require.ensure([], () => r(require('../views/index/indexher')), 'indexher')//登陆进去的首页
const register_business = r => require.ensure([], () => r(require('../views/index/register_business')),'register_business')//商家注册
const binding = r => require.ensure([], () => r(require('../views/index/binding')),'binding')//绑定手机号码

//当地玩家
const sousuo = r => require.ensure([], () => r(require('../views/gameplayer/sousuo')),'sousuo')//搜索当地玩家
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: error,
      meta:{"title":404}
    },
    {
      path: '/',
      name: 'indexher',
      component: indexher,
      // redirect: 'login',
       meta:{'title': '首页'}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{'title': '登录'},
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{'title': '注册'}
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta:{'title': '忘记密码'}
    },
    {
      path: '/indexher',
      name: 'indexher',
      component: indexher,
      meta:{'title': '首页'}
    },
    {
      path: '/register_business',
      name: 'register_business',
      component: register_business,
      meta:{'title': '商家注册'}
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding,
      meta:{'title': '绑定'}
    },
//当地玩家

    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo,
      meta:{'title': '搜索'}
    },
  ]
})

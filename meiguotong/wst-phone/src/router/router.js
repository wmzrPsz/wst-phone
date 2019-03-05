import Vue from 'vue'
import Router from 'vue-router'

const error = r => require.ensure([], () => r(require('../views/error/error')), 'error')
const login = r => require.ensure([], () => r(require('../views/index/login')), 'login')
const register = r => require.ensure([], () => r(require('../views/index/register')), 'register')
const forget = r => require.ensure([], () => r(require('../views/index/forget')), 'forget')
const indexher = r => require.ensure([], () => r(require('../views/index/indexher')), 'indexher')
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
      name: 'home',
      component: login,
      // redirect: 'login',
      // meta:{'title': '登录'}
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
  ],
  scrollBehavior (to, from, savedPosition) {
        console.log(to);
        console.log(from);
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

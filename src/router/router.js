import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

 const home = r => require.ensure([], () => r(require('../views/Home')), 'home')
 const login = r => require.ensure([], () => r(require('../views/my/login')), 'login')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: login
    }
  ]
})

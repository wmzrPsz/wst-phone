import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/index'
import {Toast,Popup,Picker,DatetimePicker,Swipe,SwipeItem,Rate,Stepper,Pagination } from 'vant'
import "./style/inde.css";
import VueLazyload from 'vue-lazyload'  
 //生产环境提示，这里设置成了false
Vue.config.productionTip = false

 Vue.use(Toast).use(Popup).use(Picker).use(DatetimePicker).use(Swipe).use(SwipeItem).use(Rate).use(Stepper).use(Pagination);

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if(to.meta.requireAuth){ // 判断该路由是否需要登录权限
    if(store.state.loginUid){ // 通过vuex state获取当前的loginUid是否存在
      next();
    }else{
      next({
        path: '/login',  // 跳转到登录页面
        query: { redirect: to.fullPath}, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
      });
    }
  }else{
    next();
  }
})

import * as custom from './filters/custom'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})


Vue.use(VueLazyload,{
  attempt: 3,
  error: store.state.comProtocol.defaultImg,
  listenEvents: ['scroll'],
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  filter: {
    //实现渐近式加载图片（先加载模糊的图）
    progressive(listener, opts) {
      listener.el.setAttribute('lazy-progressive', 'true')
      listener.loading = listener.src + '?imageView2/1/w/10/h/10'
    }
  },
  adapter: {
    error (listender, Init) {
      listender.error = store.state.comProtocol.defaultImg;
      // console.log(listender)
    }
}
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

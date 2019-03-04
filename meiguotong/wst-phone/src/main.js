import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import {Toast} from 'vant'
 //生产环境提示，这里设置成了false
Vue.config.productionTip = false


 Vue.use(Toast);


 import "./style/inde.css";



 router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next();
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

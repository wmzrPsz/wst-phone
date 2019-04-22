import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import {Toast,Popup,Picker,DatetimePicker,Swipe,SwipeItem,Rate} from 'vant'
import "./style/inde.css";
 //生产环境提示，这里设置成了false
Vue.config.productionTip = false

 Vue.use(Toast).use(Popup).use(Picker).use(DatetimePicker).use(Swipe).use(SwipeItem).use(Rate);


 router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next();
})

import * as custom from './filters/custom'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

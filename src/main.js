import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

 //生产环境提示，这里设置成了false
Vue.config.productionTip = false

import "./style/inde.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
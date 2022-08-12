import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
import router from '../src/assets/router.js'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

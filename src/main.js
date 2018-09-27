import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import filters from './filters'
import './registerServiceWorker'

Vue.config.productionTip = false

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
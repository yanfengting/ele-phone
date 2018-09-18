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

new Vue({
  router,
  store,
  filters,
  render: h => h(App)
}).$mount('#app')
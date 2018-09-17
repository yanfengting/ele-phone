import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import './registerServiceWorker'

Vue.config.productionTip = false

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import Filters from './filters'
Vue.filter('distince', Filters.distince)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
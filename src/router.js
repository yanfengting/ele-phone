import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Order from './views/Order.vue'
import Mine from './views/Mine.vue'
import SelectAddress from './views/SelectAddress.vue'
import SelectCity from './views/SelectCity.vue'
import SearchProduct from './views/SearchProduct.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/selectAddress',
      name: 'selectAddress',
      component: SelectAddress
    },
    {
      path: '/selectCity',
      name: 'selectCity',
      component: SelectCity
    },
    {
      path: '/searchProduct',
      name: 'searchProduct',
      component: SearchProduct
    }
  ]
})
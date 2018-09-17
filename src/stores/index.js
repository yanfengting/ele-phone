import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'
import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    base,
    cart,
    product
  }
})
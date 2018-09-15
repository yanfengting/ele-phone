<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/icons/iconfont.css';
body{
  margin: 0;
  padding: 0;
}
#app {

}

a{
  text-decoration: none;
}

.clear::after{
  clear: both;
  display: inline-block;
  content: '';
  visibility: hidden;
  height: 0;
}

.address .mint-searchbar, .address .mint-search-list{
    background-color: #fff !important;
}

.address .mint-search-list{
  margin-top: 50px;
}

.address .mint-searchbar-inner, .mint-searchbar-inner input{
  background-color: #f2f2f2 !important;
}

</style>

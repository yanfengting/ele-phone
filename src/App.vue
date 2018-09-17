<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import { mapMutations } from "vuex";
import { SET_LOCATION, SET_LOCATION_DETAIL } from "./stores/modules/base/mution-types";
export default {
  name: "App",
  components: {
    Footer
  },
  created() {
    this.geoLocation();
    this.timer = setInterval(() => {
      this.geoLocation();
    }, 1000 * 60 * 5);
  },
  methods: {
    ...mapMutations([SET_LOCATION, SET_LOCATION_DETAIL]),
    geoLocation() {
      $.get("/api/restapi/shopping/v1/cities/guess").done(res => {
        this[SET_LOCATION](res);
        $.get(`/api/restapi/bgs/poi/reverse_geo_coding?latitude=${res.latitude}&longitude=${res.longitude}`).done((res)=>{
          this[SET_LOCATION_DETAIL](res);
        })
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
@import "./assets/icons/iconfont.css";
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.clear::after {
  clear: both;
  display: inline-block;
  content: "";
  visibility: hidden;
  height: 0;
}

.address .mint-searchbar,
.address .mint-search-list {
  background-color: #fff !important;
}

.address .mint-search-list {
  margin-top: 50px;
}

.address .mint-searchbar-inner,
.mint-searchbar-inner input {
  background-color: #f2f2f2 !important;
}
</style>

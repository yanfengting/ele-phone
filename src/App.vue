<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import { mapMutations, mapState } from "vuex";
import {
  SET_LOCATION,
  SET_LOCATION_DETAIL
} from "./stores/modules/base/mution-types";
export default {
  name: "App",
  components: {
    Footer
  },
  computed: {
    ...mapState({
      location: state => state.base.location,
      locationDetail: state => state.base.locationDetail
    })
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
      if (!this.location) {
        $.get("/api/restapi/shopping/v1/cities/guess").done(res => {
          this[SET_LOCATION](res);
          $.get(
            `/api/restapi/bgs/poi/reverse_geo_coding?latitude=${
              res.latitude
            }&longitude=${res.longitude}`
          ).done(res => {
            this[SET_LOCATION_DETAIL](res);
          });
        });
      } else {
        $.get(
          `/api/restapi/bgs/poi/reverse_geo_coding?latitude=${
            this.location.latitude
          }&longitude=${this.location.longitude}`
        ).done(res => {
          this[SET_LOCATION_DETAIL](res);
        });
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
@import "./assets/icons/iconfont.css";
html {
  font-size: 37.5px;
}
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

.address .mint-searchbar-inner,
.mint-searchbar-inner input {
  background-color: #f2f2f2 !important;
}

.city .mint-indexlist-nav {
  justify-content: flex-start;
  border: none;
}

.city ul p {
  font-weight: bold;
}

.city .mint-indexlist-navlist li {
  color: #999;
}

.swiper .mint-swipe-indicator.is-active {
  background-color: #000;
  opacity: 0.6;
}

.swiper .mint-swipe-indicators {
  position: absolute;
  bottom: 0;
}

.swiper .mint-swipe-indicator {
  width: 0.213333rem;
  height: 0.213333rem;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
  margin: 0 0.08rem;
}

.shoplist .el-rate__icon {
    font-size: 0.32rem !important;
    margin-right: 0 !important;
}

.city .mint-search-list, .city .mint-cell-wrapper{
  font-size: .373333rem;
}
</style>

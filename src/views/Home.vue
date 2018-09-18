<template>
  <div class="home">
    <mt-header>
      <router-link to="/selectAddress" slot="left">
        <i class="icon iconfont icon-location"></i>
        <span style="font-weight:bold;">{{locationDetail.name}}</span>
        <i class="icon iconfont icon-jiantouarrow486"></i>
      </router-link>
    </mt-header>
    <div class="searchbox">
      <div class="content" @click="goSearchProduct">
        <i class="mintui mintui-search"></i>
        搜索饿了么商家、商品名称
      </div>
    </div>
    <!-- 轮播图 -->
    <Swiper></Swiper>
  </div>
</template>

<script>
import { Header, Button } from "mint-ui";
import { mapState } from "vuex";
import Swiper from '../components/Swiper.vue'
export default {
  name: "home",
  computed: {
    ...mapState({
      locationDetail: state => state.base.locationDetail
    })
  },
  components: {
    Swiper
  },
  data() {
    return {
      entries: []
    };
  },
  methods: {
    goSearchProduct() {
      this.$router.push("/searchProduct");
    },
    
  }
};
</script>

<style scoped>
.searchbox {
  margin-top: -1px;
  padding: 10px 0;
  background-color: #26a2ff;
}
.content {
  width: 90%;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  background-color: #fff;
  color: #999;
  text-align: center;
  font-size: 14px;
}
</style>


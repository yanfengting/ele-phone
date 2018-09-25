<template>
  <div class="home">
    <mt-header>
      <router-link to="/selectAddress" slot="left">
        <span class="address">
          <i class="icon iconfont icon-location"></i>
          {{locationDetail.name}}
          <i class="icon iconfont icon-jiantouarrow486" style="font-size:12px;"></i>
        </span>
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
    <!-- 推荐套餐 -->
    <Recommand></Recommand>
    <!-- 广告图 -->
    <Banner></Banner>
    <!-- 推荐商家 -->
    <div id="shoplist-title" class="shoplist-title">推荐商家</div>
    <div class="shoplist">
      <ShopItem v-for="(si,i) in shopItems" :key="i" :item="si.restaurant"></ShopItem>
    </div>
  </div>
</template>

<script>
import { Header, Button } from "mint-ui";
import { mapState } from "vuex";
import Swiper from "../components/Swiper.vue";
import Recommand from "../components/Recommand.vue";
import Banner from "../components/Banner.vue";
import ShopItem from "../components/ShopItem.vue";
export default {
  name: "home",
  computed: {
    ...mapState({
      location: state => state.base.location,
      locationDetail: state => state.base.locationDetail
    })
  },
  data() {
    return {
      shopItems: [],
      // 偏移量（本质是页码）
      offset: 0,
      // 限制的条数（本质是每页显示的数据个数）
      limit: 8,
      // 是否正在加载（防止下拉加载过多）
      loading: false,
      // 是否到最后一页
      end: false
    };
  },
  created() {
    this.getShopItems();
    window.addEventListener("scroll", this.handler);
  },
  components: {
    Swiper,
    Recommand,
    Banner,
    ShopItem
  },
  methods: {
    handler() {
      // 当前可视的页面高度
      var clientHeight = document.documentElement.clientHeight;
      // 滚动条距离顶部的高度
      var scrollTop = document.documentElement.scrollTop;
      // 页面的总高度
      var offsetHeight = document.documentElement.offsetHeight;
      if (
        clientHeight + scrollTop >= offsetHeight - 50 &&
        !this.loading &&
        !this.end
      ) {
        // 0, 8, 16, 24
        this.offset = this.offset + this.limit;
        this.getShopItems();
      }
    },
    goSearchProduct() {
      this.$router.push("/searchProduct");
    },
    getShopItems() {
      this.loading = true;
      $.get(
        `/api/restapi/shopping/v3/restaurants?latitude=${
          this.location.latitude
        }&longitude=${this.location.longitude}&offset=${this.offset}&limit=${
          this.limit
        }&extras[]=activities&extras[]=tags&extra_filters=home&order_by=0&rank_id=&terminal=h5`
      ).done(res => {
        if (!res || !res.items || res.items.length == 0) {
          this.end = true;
        }
        this.loading = false;
        this.shopItems = this.shopItems.concat(res.items);
      });
    }
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

.address {
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  padding-left: 5px;
  max-width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
  line-height: 30px;
}

.shoplist-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  color: #000;
}

.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "";
  width: 20px;
  height: 1px;
  background-color: #999;
}

.shoplist-title:before {
  margin-right: 10px;
}

.shoplist-title:after {
  margin-left: 10px;
}
</style>
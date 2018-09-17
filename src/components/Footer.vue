<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="home">
      <img slot="icon" :src="icons.home">首页
    </mt-tab-item>
    <mt-tab-item id="find">
      <img slot="icon" :src="icons.find">发现
    </mt-tab-item>
    <mt-tab-item id="order">
      <img slot="icon" :src="icons.order">订单
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" :src="icons.mine">我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "Footer",
  data() {
    return {
      selected: "home",
      icons: {
        home: require("../assets/footer/home-selected.svg"),
        find: require("../assets/footer/find.svg"),
        order: require("../assets/footer/order.svg"),
        mine: require("../assets/footer/mine.svg")
      }
    };
  },
  mounted(){
    this.selected = localStorage.getItem('selected') || "home";
  },
  watch: {
    selected(newValue, oldValue) {
      this.icons[oldValue] = require(`../assets/footer/${oldValue}.svg`);
      this.icons[
        newValue
      ] = require(`../assets/footer/${newValue}-selected.svg`);
      localStorage.setItem('selected', newValue);
      this.$router.push({ name: newValue });
    }
  }
};
</script>

<style scoped>
.mint-tabbar,
.mint-tab-item {
  background-color: #fff !important;
}
</style>



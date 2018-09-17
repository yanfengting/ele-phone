<template>
  <div class="home">
    <mt-header>
      <router-link to="/address" slot="left">
        <i class="icon iconfont icon-location"></i>
        {{address}}
        <i class="icon iconfont icon-jiantouarrow486"></i>
      </router-link>
    </mt-header>

  </div>
</template>

<script>
import { Header, Button } from "mint-ui";
export default {
  name: "home",
  created(){
    localStorage.setItem('address', this.$route.params.address  || '太原市人民政府')
  },
  data(){
    return {
      address: this.$route.params.address || localStorage.getItem('address')
    }
  }
};
</script>

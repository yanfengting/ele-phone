<template>
  <div class="home">
    <mt-header>
      <router-link to="/selecteAddress" slot="left">
        <i class="icon iconfont icon-location"></i>
        {{locationDetail.name}}
        <i class="icon iconfont icon-jiantouarrow486"></i>
      </router-link>
    </mt-header>

  </div>
</template>

<script>
import { Header, Button } from "mint-ui";
import { mapState } from 'vuex'
export default {
  name: "home",
  computed: {
    ...mapState({
      locationDetail: state => state.base.locationDetail
    })
  }
};
</script>

<template>
    <!-- 广告图 -->
    <div class="banner" v-if="banners.length != 0">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="(b,i) in banners" :key="i">
                <img :src="utils.formatImagePath(b.image_hash)" :alt="b.id">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { mapState } from "vuex";
import utils from "../modules/utils";
export default {
  name: "Banner",
  computed: {
    ...mapState({
      location: state => state.base.location
    })
  },
  data() {
    return {
      utils: utils,
      banners: []
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      $.get(
        `/api/restapi/shopping/v2/banners?consumer=1&type=1&latitude=${
          this.location.latitude
        }&longitude=${this.location.longitude}`
      ).done(res => {
        this.banners = res;
      });
    }
  }
};
</script>

<style scoped>
.banner {
  height: 28vw;
  overflow: hidden;
}

.banner img {
  width: 100%;
  max-width: 100%;
}
</style>

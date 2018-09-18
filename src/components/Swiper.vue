<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(s,i) in swiper" :key="i">
        <a href="javascript:void(0)" v-for="(item,i) in s" :key="i">
          <div class="container">
            <img :src="utils.formatImagePath(item.image_hash)">
          </div>
          <span class="title">{{item.name}}</span>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { mapState } from "vuex";
import utils from '../modules/utils'
export default {
  name: "Swiper",
  data() {
    return {
      utils: utils,
      swiper: []
    };
  },
  computed: {
    ...mapState({
      locationDetail: state => state.base.locationDetail
    })
  },
  created() {
    this.getEntries();
  },
  methods: {
    // 类型和限量抢购数据
    getEntries() {
      var url = `/api/restapi/shopping/openapi/entries?latitude=${
        this.locationDetail.latitude
      }&longitude=${
        this.locationDetail.longitude
      }&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5`;
      $.get(url).done(res => {
        this.swiper = utils.chunk(res[0].entries, 10)
      });
    }
  }
};
</script>

<style scoped>
.swiper {
  overflow: hidden;
  height: 47.2vw;
  background-color: #fff;
  text-align: center;
  position: relative;
}

.swiper .mint-swipe-item a {
  position: relative;
  float: left;
  margin-top: 2.933333vw;
  width: 20%;
}

.swiper .mint-swipe-item a .container {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}

.swiper .mint-swipe-item a .container img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.swiper .mint-swipe-item a .title {
  display: block;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  color: #666;
  font-size: 0.32rem;
}
</style>

<template>
  <div class="select-address">
    <mt-header title="请选择收货地址" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <Address :city="location.name" :result.sync="cities" @input="getInfo" class="address">
      <div class="city-item" v-for="(item,index) in cities" :key="index" @click="back(item.latitude, item.longitude)">
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="city">{{item.address}}</p>
        </div>
        <div class="distance">
          {{item.distance}}
        </div>
      </div>
    </Address>
  </div>
</template>

<script>
import Address from "../components/Address.vue";
import { mapState, mapMutations } from "vuex";
import { SET_LOCATION_DETAIL } from "../stores/modules/base/mution-types.js";
export default {
  name: "SelectAddress",
  computed: {
    ...mapState({
      location: state => state.base.location,
      locationDetail: state => state.base.locationDetail
    })
  },
  data() {
    return {
      cities: []
    };
  },
  components: {
    Address
  },
  methods: {
    ...mapMutations([SET_LOCATION_DETAIL]),
    getInfo(value) {
      $.get(
        `/api/restapi/bgs/poi/search_poi_nearby_alipay?keyword=${value}&offset=0&limit=20&latitude=${
          this.location.latitude
        }&longitude=${this.location.longitude}`
      ).done(res => {
        this.cities = res;
      });
    },
    back(lat, lng) {
      $.get(
        `/api/restapi/bgs/poi/reverse_geo_coding?latitude=${lat}&longitude=${lng}`
      ).done(res => {
        this[SET_LOCATION_DETAIL](res);
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.address {
  margin-top: 1.066666rem;
  height: calc(100vh - 2.933333rem) !important;
  background-color: #f4f4f4;
}

.address a {
  display: block;
  color: #000;
}

.city-item {
  padding: 0.266666rem;
  display: flex;
  justify-content: space-between;
  font-size: .32rem;
}

.city-item .info p {
  margin: 0;
}

.city-item .name {
  font-weight: 700;
  font-size: 0.4rem;
}
</style>



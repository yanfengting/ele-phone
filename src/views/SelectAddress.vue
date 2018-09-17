<template>
  <div class="select-address">
    <mt-header title="请选择收货地址">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <Address :city="location.name" :result.sync="citys" @input="getInfo" class="address">
      <div class="city-item" v-for="(item,index) in citys" :key="index" @click="back(item.name)">
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
import { Header, Cell } from "mint-ui";
import Address from "../components/Address.vue";
import { mapState, mapMutations } from "vuex";
import { SET_LOCATION_DETAIL } from '../stores/modules/base/mution-types.js'
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
      citys: []
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
        this.citys = res;
      });
    },
    back(name){
      this.locationDetail.name = name;
      this[SET_LOCATION_DETAIL](this.locationDetail);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.address {
  height: calc(100vh - 100px) !important;
  background-color: #f4f4f4;
}

.address a {
  display: block;
  color: #000;
}

.city-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.city-item .info p {
  margin: 0;
}

.city-item .name {
  font-weight: 700;
}

.city-item .city {
  font-size: 12px;
}
</style>



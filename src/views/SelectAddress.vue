<template>
    <div class="select-address">
        <mt-header title="请选择收货地址">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <Address city="太原" :result.sync="citys" class="address">
            <router-link :to="{name:'home', params: {address: item.name}}" v-for="(item,index) in citys" :key="index">
                <div class="city-item">
                    <div class="info">
                        <p class="name">{{item.name}}</p>
                        <p class="city">{{item.city}}</p>
                    </div>
                    <div class="distince">
                        {{item.distince | distince}}
                    </div>
                </div>
            </router-link>
        </Address>
    </div>
</template>

<script>
import { Header, Cell } from "mint-ui";
import Address from "../components/Address.vue";
export default {
  name: "SelectAddress",
  data() {
    return {
      citys: [
        {
          id: 1,
          name: "阿瓦山寨(兴华店)",
          city: "山西省太原市尖草坪区兴华街329号",
          distince: 3.2
        },
        {
          id: 2,
          name: "奥斯卡国际影城(能源中心店)",
          city: "山西省太原市万柏林区迎泽西大街与千峰南路交汇处能源中心裙楼7层",
          distince: 3.2
        }
      ]
    };
  },
  components: {
    Address
  }
};
</script>

<style scoped>
.address{
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

.city-item .city{
    font-size: 12px;
}
</style>



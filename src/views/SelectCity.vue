<template>
  <div class="city">
    <mt-header title="城市选择" fixed>
      <router-link to="/selectAddress" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <Search :value="value" @input="input" placeholder="输入城市名称、拼音查询" show autofocus>
      <mt-index-list style="margin-top:50px;" v-if="value==''">
        <div class="current">
          <div class="title">当前定位城市</div>
          <div class="content">{{location.name}}</div>
        </div>
        <mt-index-section :index="cl.idx" v-for="(cl,i) in cityList" :key="i" style="justify-content: flex-start">
          <mt-cell :title="c.name" v-for="(c,i) in cl.cities" :key="i" @click.native="back(c)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
      <div style="margin-top:50px;" v-else>
        <div class="name" v-for="(c,i) in cities" :key="i" @click="back(c)">{{c.name}}</div>
      </div>
    </Search>
  </div>
</template>

<script>
import Search from "../components/Search";
import { mapState, mapMutations } from "vuex";
import { SET_LOCATION } from "../stores/modules/base/mution-types";
export default {
  name: "city",
  computed: {
    ...mapState({
      location: state => state.base.location
    })
  },
  data() {
    return {
      value: "",
      cityList: [],
      cities: []
    };
  },
  created() {
    this.initialData();
  },
  methods: {
    ...mapMutations([SET_LOCATION]),
    initialData() {
      var data = null;
      if (localStorage.getItem("data") != "undefined") {
        data = JSON.parse(localStorage.getItem("data"));
      } else {
        // 懒加载
        data = require("../modules/data");
      }
      console.log(data)
      this.cityList = data.default.cityList;
      localStorage.setItem("data", JSON.stringify(data));

      if (localStorage.getItem("cities") != "undefined") {
        this.cities = JSON.parse(localStorage.getItem("cities"));
      } else {
        this.cityList.forEach(v => {
          v.cities.forEach(v => {
            this.cities.push(v);
          });
        });
        localStorage.setItem("cities", JSON.stringify(this.cities));
      }
    },
    input(value) {
      this.value = value;
      if (this.value) {
        this.cities = this.cities.filter(v => {
          return (
            v.name.indexOf(this.value) > -1 ||
            v.pinyin.indexOf(this.value) > -1 ||
            this.value.indexOf(v.pinyin) > -1
          );
        });
      } else {
        this.cities = JSON.parse(localStorage.getItem("cities"));
      }
    },
    back(c) {
      var l = {
        id: c.id,
        latitude: c.latitude,
        longitude: c.longitude,
        name: c.name,
        pinyin: c.pinyin
      };
      this[SET_LOCATION](l);
      this.$router.push("/selectAddress");
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped>
.current .title,
.current .content {
  padding: 10px 0 10px 10px;
}
.current .title {
  background-color: #fafafa;
}
.name {
  margin-left: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
</style>



<template>
  <div class="home">
    <mt-header>
      <router-link to="/selectAddress" slot="left">
        <span class="address">
          <i class="icon iconfont icon-location"></i>
          {{locationDetail.name}}
          <i class="icon iconfont icon-jiantouarrow486" style="font-size:0.32rem;"></i>
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
    <div class="nav">
      <div>
        <aside class="filter">
          <div class="filter-header">
            <a href="javascript:" class="filter-nav">
              <span>综合排序</span>
              <svg viewBox="0 0 72 32" class="dropdown-icon">
                <path d="M36 32l36-32h-72z"></path>
              </svg>
            </a>
            <a href="javascript:" class="filter-nav">
              <span>距离最近</span>
            </a>
            <a href="javascript:" class="filter-nav">
              <span>品质联盟</span>
            </a>
            <a href="javascript:" class="filter-nav-more">
              <span>筛选</span>
              <svg viewBox="0 0 26 26" id="more-filter" width="100%" height="100%" class="filter-nav-more__icon">
                <path d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"></path>
              </svg>
            </a>
          </div>
          <section class="filter-extend filter-sort">
            <ul>
              <li class="">
                <span>综合排序</span><img src="../assets/ok.png" alt="综合排序" class="selected"></li>
              <li class="">
                <span>好评优先</span><img src="../assets/ok.png" alt="好评优先" class="selected"></li>
              <li class="">
                <span>销量最高</span><img src="../assets/ok.png" alt="销量最高" class="selected"></li>
              <li class="">
                <span>起送价最低</span><img src="../assets/ok.png" alt="起送价最低" class="selected"></li>
              <li class="">
                <span>配送最快</span><img src="../assets/ok.png" alt="配送最快" class="selected"></li>
              <li class="">
                <span>配送费最低</span><img src="../assets/ok.png" alt="配送费最低" class="selected"></li>
              <li class="">
                <span>人均从低到高</span><img src="../assets/ok.png" alt="人均从低到高" class="selected"></li>
              <li class="">
                <span>人均从高到低</span><img src="../assets/ok.png" alt="人均从高到低" class="selected"></li>
            </ul>
          </section>
          <section class="filter-extend">
            <div class="morefilter">
              <dl>
                <dt>商家服务 (可多选)</dt>
                <dd>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info"><img class="morefilter-service-img" src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png">
                      <span>蜂鸟专送</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info"><img class="morefilter-service-img" src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png">
                      <span>品牌商家</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info"><img class="morefilter-service-img" src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png">
                      <span>食安保</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info"><img class="morefilter-service-img" src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png">
                      <span>新店</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info"><img class="morefilter-service-img" src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png">
                      <span>开发票</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>优惠活动 (单选)</dt>
                <dd>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>新用户优惠</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>特价商品</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>下单立减</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>赠品优惠</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>下单返红包</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>进店领红包</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>人均消费</dt>
                <dd>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥20以下</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥20 - ¥40</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥40 - ¥60</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥60 - ¥80</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥80 - ¥100</span>
                    </div>
                  </div>
                  <div class="morefilter-service">
                    <div class="morefilter-service-info">
                      <span>¥100以上</span>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="morefilter-operate">
              <span class="morefilter-clear">清空</span>
              <span class="morefilter-ok morefilter-ok-color">确定</span>
            </div>
          </section>
        </aside>
      </div>
    </div>
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

      this.fixedSearchBox(scrollTop);
      this.fixedNav(scrollTop);
    },
    fixedSearchBox(scrollTop) {
      if (scrollTop > 50) {
        $('.searchbox').addClass('fixTop');
      } else {
        $('.searchbox').removeClass('fixTop');
      }
    },
    fixedNav(scrollTop) {
      if (scrollTop > 350) {
        $('.nav').addClass('fixTopNav');
      } else {
        $('.nav').removeClass('fixTopNav');
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
  margin-top: -0.026666rem;
  padding: 0.266666rem 0;
  background-color: #26a2ff;
}
.content {
  width: 90%;
  height: 0.933333rem;
  line-height: 0.933333rem;
  margin: 0 auto;
  background-color: #fff;
  color: #999;
  text-align: center;
  font-size: 0.373333rem;
}

.address {
  font-weight: bold;
  font-size: 0.426666rem;
  display: inline-block;
  padding-left: 0.133333rem;
  max-width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 0.8rem;
  line-height: 0.8rem;
}

.shoplist-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.533333rem;
  font-size: .4rem;
  color: #000;
}

.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "";
  width: 0.533333rem;
  height: 0.026666rem;
  background-color: #999;
}

.shoplist-title:before {
  margin-right: 0.266666rem;
}

.shoplist-title:after {
  margin-left: 0.266666rem;
}

.fixTop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}

.fixTopNav {
  position: fixed;
  top: 1.44rem;
  left: 0;
  width: 100vw;
  z-index: 100;
}

.filter {
    position: relative;
    border-bottom: 0.026666rem solid #ddd;
    line-height: 10.4vw;
    z-index: 101;
    height: 10.666667vw
}

.filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 10.533333vw;
    display: flex;
    z-index: 4;
    background-color: #fff
}

.filter-nav {
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .373333rem;
    z-index: 101;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.filter-nav.active {
    color: #333;
    font-weight: 700
}

.filter-nav.active .dropdown-icon {
    fill: currentColor
}

.filter-nav.open {
    color: #3190e8;
    font-weight: 700
}

.filter-nav.open .dropdown-icon {
    fill: currentColor
}

.filter-nav .dropdown-icon {
    width: 1.6vw;
    height: .8vw;
    margin-left: 1.333333vw;
    margin-bottom: .533333vw;
    fill: #333;
    will-change: transform;
    transition: transform .3s,-webkit-transform .3s
}

.filter-nav-more {
    width: 21.333333vw;
    height: 10.666667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    font-size: .373333rem;
    position: relative
}

.filter-nav-more.open {
    color: #3190e8;
    font-weight: 700
}

.filter-nav-more.open .filter-nav-more__icon {
    fill: currentColor
}

.filter-nav-more.active {
    color: #333;
    font-weight: 700
}

.filter-nav-more.active .filter-nav-more__icon {
    fill: currentColor
}

.filter-nav-more__icon {
    margin-left: .533333vw;
    width: 3.466667vw;
    height: 3.466667vw;
    fill: #666
}

.filter-nav-arrow {
    display: inline-block;
    vertical-align: middle;
    width: 2.4vw
}

.filter-extend {
    left: 0;
    right: 0;
    top: 10.533333vw;
    border-top: 0.026666rem solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 4
}

.filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1500%
}

.filter-nav__icon {
    width: 3.466667vw;
    height: 2.933333vw;
    margin-right: .533333vw
}

.morefilter-2etYY_0 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10em;
    color: #999
}

.morefilter {
    overflow: auto;
    height: 100%;
    padding: 0 2.666667vw;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    line-height: normal
}

.morefilter dl {
    margin: 2.666667vw 0;
    overflow: hidden
}

.morefilter dt {
    margin-left: 1%;
    margin-bottom: 2vw;
    color: #666
}

.morefilter dd {
    flex-wrap: wrap;
    background: #fff;
    position: relative
}

.morefilter dd,.morefilter-service {
    display: flex
}

.morefilter-service {
    align-items: center;
    justify-content: center;
    flex: 0 0 31.33%;
    height: 9.333333vw;
    font-size: .346667rem;
    margin: .8vw 1%;
    background: #fafafa
}

.morefilter-service .morefilter-service-info {
    white-space: nowrap
}

.morefilter-service span {
    margin-left: 2%;
    vertical-align: middle
}

.morefilter-service .morefilter-service-img {
    width: 3.466667vw;
    height: 3.466667vw;
    vertical-align: middle;
    margin-right: .8vw
}

.morefilter-service.morefilter-3emCs_0 {
    font-weight: 700;
    color: #3190e8;
    background-color: #edf5ff
}

.morefilter-operate {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fafafa;
    box-shadow: 0 -.266667vw .533333vw 0 #ededed;
    line-height: 11.466667vw
}

.morefilter-operate .morefilter-ok,.morefilter-operate .morefilter-clear {
    font-size: .426667rem;
    text-align: center;
    text-decoration: none;
    flex: 1
}

.morefilter-operate .morefilter-clear {
    background-color: #fff;
    color: #ddd
}

.morefilter-operate .morefilter-clear.morefilter-ok-color {
    color: #333
}

.morefilter-operate .morefilter-ok {
    opacity: .5;
    color: #fff;
    background-color: #00d762;
    border: .133333vw solid #00d762
}

.morefilter-operate .morefilter-ok.morefilter-ok-color {
    opacity: 1
}

.morefilter-operate i,.morefilter-operate i:after,.morefilter-operate i:before {
    display: inline-block;
    width: 1.333333vw;
    height: 1.333333vw;
    border-radius: 50%;
    background: #fff;
    opacity: .8;
    position: relative
}

.morefilter-operate i:after,.morefilter-operate i:before {
    content: "";
    position: absolute;
    top: 0
}

.morefilter-operate i:before {
    left: -2.666667vw;
    opacity: .5
}

.morefilter-operate i:after {
    right: -2.666667vw;
    opacity: 1
}

ul[data-v-52820b2e] {
    list-style: none;
    margin: 0;
    padding: 0
}

.filter-sort[data-v-52820b2e] {
    padding-top: 2.133333vw;
    padding-bottom: 3.2vw;
    font-size: .373333rem;
    color: #333
}

.filter-sort li[data-v-52820b2e] {
    position: relative;
    padding-left: 5.333333vw;
    line-height: 10.666667vw
}

.filter-sort li.active[data-v-52820b2e] {
    color: #3190e8;
    font-weight: 700
}

.filter-sort li.active .selected[data-v-52820b2e] {
    display: block
}

.filter-sort .selected[data-v-52820b2e] {
    position: absolute;
    right: 3.733333vw;
    top: 50%;
    width: 4vw;
    height: 4vw;
    display: none;
    transform: translateY(-50%)
}
</style>
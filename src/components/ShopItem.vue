<template>
  <section class="item">
    <div class="shopinfo">
      <div class="logo-container">
        <div class="logo-main">
          <img :alt="item.name" class="logo" :src="utils.formatImagePath(item.image_path)">
        </div>
      </div>

      <div class="main">
        <section class="line2">
          <h3 class="shopname">
            <i content="品牌" class="premium" v-show="item.is_premium">品牌</i>
            <span>{{item.name}}</span>
          </h3>
          <ul class="support" style="list-style:none;margin:0;padding:0">
            <li v-if="item.recommend.is_ad" :content="item.recommend.reason" class="ad"></li>
            <!-- <li :content="f.icon_name" v-for="(f,i) in item.supports" :key="i"></li> -->
            <!-- <span class="fav">···</span> -->
            <span class="fav">&#8;&#183;&#183;&#183;</span>
          </ul>
        </section>

        <section class="line2">
          <div class="rate">
            <div class="rating">
              <div class="gray">

              </div>
              <div class="actived">

              </div>
            </div>
            <span class="rate">{{item.rating}}</span>
            <span>月售{{item.recent_order_num}}单</span>
          </div>
        </section>

        <section class="line2">
          <div class="moneylimit">
            <span>¥{{item.float_minimum_order_amount}}起送</span>
            <span>{{item.piecewise_agent_fee.description}}</span>
          </div>
          <div class="timedistance">
            <span class="distanc">{{item.distance+'m'}}</span>
            <span>{{item.order_lead_time}}分钟</span>
          </div>
        </section>

        <section class="index-tagLine">
          <span class="mini-tag-tag index-tag">
            <span class="index-tag-ghost" v-for="(t,i) in item.support_tags" :key="i" v-if="t.type"
            :style="{border: '0.026666rem solid #' + t.border, color: '#' + t.color}">{{t.text}}</span>
          </span> 
          <span class="index-recommend-tag">
            <img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?"> 
            <span>口碑人气好店</span>
          </span>
        </section>
      </div>
    </div>

    <div class="activity">
      <span>
        <img src="../assets/dashed.svg" class="dashedline">
      </span>
      <section class="activities">
        <div class="activity-list">
          <div class="act-row" v-for="(al,i) in item.activities" :key="i" :style="i>1 ? 'display: none;': ''" ref="actRow">
            <span class="icon-wrap">
              <!-- <span class="icon" :style="randomColor()"> -->
              <span class="icon" :style="{ 'background-color': '#' + al.icon_color}">
                {{al.icon_name}}
              </span>
            </span>
            <span class="desc">{{al.description}}</span>
          </div>
        </div>
        <div class="activity-btn">
          <span @click="toggle($event)">{{item.activities.length}}个活动</span>
          <img src="../assets/down2.svg" ref="down">
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import utils from "../modules/utils";
export default {
  name: "ShopItem",
  props: ["item"],
  data() {
    return {
      utils: utils
    };
  },
  methods: {
    toggle(ev) {
      var img = ev.target.parentNode.getElementsByTagName("img")[0];
      var isShow = this.$refs.actRow.some(ar => {
        return ar.hasAttribute("myClass");
      });
      if (isShow) {
        this.$refs.actRow.forEach(ar => {
          ar.classList.remove("show");
          ar.removeAttribute("myClass");
        });
        img.style.transform = "rotate(0)";
      } else {
        this.$refs.actRow.forEach(ar => {
          ar.classList.add("show");
          ar.setAttribute("myClass", "");
        });
        img.style.transform = "rotate(180deg)";
      }
    }
  }
};
</script>

<style scoped>
.item {
  position: relative;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 4vw 0;
  list-style: none;
  font-size: 0.293333rem;
  line-height: normal;
}

.shopinfo {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0 2.666667vw;
}

.shopinfo .logo-container {
  position: relative;
  flex: none;
  z-index: 0;
}

.shopinfo .logo-container .logo-main {
  position: relative;
  width: 17.333333vw;
  height: 17.333333vw;
}

.shopinfo .logo-container .logo-main .logo {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}

.shopinfo .main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2.666667vw;
  user-select: none;
  overflow: hidden;
  width: 100%;
}

.shopinfo .main .line2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.shopinfo .main .line2 .shopname {
  display: flex;
  margin: 0;
  padding: 0;
  color: #333;
  font-weight: 700;
  font-size: 0.4rem;
  overflow: hidden;
}

.shopinfo .main .line2 .shopname .premium {
  position: relative;
  margin-right: 1.333333vw;
  padding: 0.266667vw 0.666667vw;
  color: transparent;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.293333rem;
  font-style: normal;
  line-height: normal;
}

.shopinfo .main .line2 .shopname .premium:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  content: attr(content);
  padding: 1.333333vw 1.333333vw;
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.586667rem;
  border-radius: 1.066667vw;
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  white-space: nowrap;
  transform: scale(0.5);
  transform-origin: 0 0;
}

.shopinfo .main .line2 .shopname span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shopinfo .main .line2 .support {
  display: flex;
  align-items: center;
  margin-left: 2.666667vw;
}

.shopinfo .main .line2 .support > li {
  position: relative;
  height: 3.466667vw;
  width: 3.466667vw;
  margin-left: 0.8vw;
}

.shopinfo .main .line2 .support > li.ad {
  height: 2.933333vw;
  width: 4.8vw;
}

.shopinfo .main .line2 .support > span.fav {
  margin-left: 2.666667vw;
}

.shopinfo .main .line2 .support > li:after {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  font-size: 0.373333rem;
  color: #999;
  content: attr(content);
  border-radius: 0.266667vw;
  width: 6.933333vw;
  height: 6.933333vw;
  line-height: normal;
  border: 0.133333vw solid #ddd;
  transform: scale(0.5);
  transform-origin: 0 0;
}

.shopinfo .main .line2 .support > li:last-child {
  margin-right: 0.133333vw;
}

.shopinfo .main .line2 .rate {
  display: flex;
  align-items: center;
}

.shopinfo .main .line2 .rate .rating {
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.shopinfo .main .line2 .rate .rating .gray,
.shopinfo .main .line2 .rate .rating .actived {
  display: flex;
}

.shopinfo .main .line2 .rate .rating .gray .gray img,
.shopinfo .main .line2 .rate .rating .actived img {
  width: 14.933333vw;
  height: 2.666667vw;
  flex: none;
  max-width: none;
}

.shopinfo .main .line2 .rate .rate {
  margin: 0 1.066667vw;
}

.shopinfo .main .line2 .moneylimit {
  display: flex;
  align-content: center;
}

.shopinfo .main .line2 .moneylimit span + span:before {
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.shopinfo .main .line2 .timedistance {
  display: flex;
  align-items: center;
  color: #999;
}

.shopinfo .main .line2 .timedistance span:first-child:after {
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}

.index-tagLine {
    display: flex;
    align-items: center;
    margin: 2.666667vw 2.666667vw 0 0
}

.index-tagLine>span {
    margin-right: 1.333333vw
}

.mini-tag-tag {
    position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}
.index-tagLine {
    padding: 0 1.066667vw;
}

.mini-tag-ghost, .NoDataTip-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
.mini-tag-ghost {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    transform: scale(.5);
    transform-origin: 0 0;
    font-size: .533333rem;
}
.index-tag-ghost {
    border: .266667vw solid #ddd;
    border-radius: .533333vw;
    padding: 0 2.133333vw;
}

.index-recommend-tag {
    display: flex;
    align-items: center;
    border-radius: .133333vw;
    font-size: .266667rem;
    color: #666;
    height: 4vw;
    padding: 0 1.066667vw;
    color: #e8470b;
}

.index-recommend-tag img {
    margin-top: .4vw;
    height: 2.666667vw;
    width: 2.666667vw;
    margin-right: .8vw;
}

img {
    max-width: 100%;
}

.activity {
  padding-left: 22.666667vw;
}

.activity .dashedline {
  width: 100%;
  height: 0.133333vw;
}

.activity .activities {
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.activity .activities .activity-list {
  flex: 1;
  padding-right: 2.666667vw;
  overflow: hidden;
}

.activity .activities .activity-list .act-row {
  display: flex;
  align-items: center;
  font-size: 0.293333rem;
  line-height: 4.8vw;
}

.activity .activities .activity-list .act-row .icon-wrap {
  display: inline-block;
  position: relative;
  margin-right: 1.6vw;
  height: 3.733333vw;
  width: 3.733333vw;
  vertical-align: middle;
}

.activity .activities .activity-list .act-row .icon-wrap .icon {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  height: 7.466667vw;
  width: 7.466667vw;
  font-size: 0.56rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.066667vw;
  transform: scale(0.5);
  transform-origin: 0 0;
  background-color: rgb(240, 115, 115);
}

.activity .activities .activity-list .act-row .desc {
  display: inline-block;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.activity .activities .activity-btn {
  padding: 0.8vw 2.666667vw 0 0;
  color: #999;
  text-align: right;
  font-size: 0.266667rem;
  line-height: 1;
}

.activity .activities .activity-btn span {
  vertical-align: middle;
}

.activity .activities .activity-btn img {
  width: 1.733333vw;
  opacity: 0.9;
  margin-left: 1.066667vw;
  transition: all 0.3s ease-in-out;
  transform: rotate(0deg);
  fill: currentColor;
  will-change: transform;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.show {
  display: block !important;
}


</style>


<template>
    <!-- 推荐套餐 -->
    <div class="recommand">
        <section>
            <div class="item" v-for="(item,i) in recommands" :key="i">
                <h3>{{item.name}}</h3>
                <div class="sub">{{item.desc}}</div>
                <div class="buy">
                    <span>{{item.count == null ? '' : item.count + '人'}}</span>立即抢购 &gt;</div>
                <img :src="item.img">
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "Recommand",
  data() {
    return {
      recommands: []
    };
  },
  created() {
      this.getRecommands();
  },
  methods: {
      getRecommands(){
          $.get(`/getRecommands`, (res)=>{
              this.recommands = res.recommands;
          })
      }
  }
};
</script>

<style scoped>
.recommand {
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 2.666667vw;
}

.recommand section {
  background: #fff;
  margin-bottom: 0.8vw;
  display: flex;
}

.recommand section .item {
  margin-right: 0.8vw;
  height: 37.333333vw;
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  width: 50%;
  position: relative;
}

.recommand section .item h3 {
  font-size: 0.453333rem;
  font-weight: 700;
  margin-bottom: 1.333333vw;
  color: #333;
}

.recommand section .item:nth-last-of-type(1) h3 {
  color: #e81919;
}

.recommand section .item .sub {
  font-size: 0.346667rem;
  color: #777;
  margin-bottom: 2.4vw;
}

.recommand section .item .buy {
  font-size: 0.32rem;
  color: #af8260;
  font-weight: 700;
}

.recommand section .item:nth-last-of-type(1) .buy {
  color: #333;
}

.recommand section .item .buy span {
  color: #e81919;
}

.recommand section .item img {
  position: absolute;
  right: 0;
  bottom: -2vw;
  width: 32vw;
  height: 21.333333vw;
}
</style>

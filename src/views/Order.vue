<template>
    <div class="order">
        <mt-header title="订单">
            <router-link to="" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        <section class="nodatatipWrap NoDataTip-wrapper">
            <img src="../assets/order-bg.png">
            <h3>登录后查看外卖订单</h3>
            <button>
                立即登录
            </button>
        </section>
    </div>
</template>

<script>
export default {
  name: "Order"
};
</script>

<style scoped>
.nodatatipWrap {
  margin-top: 26.666667vw;
}
.NoDataTip-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.NoDataTip-wrapper img {
  display: block;
  width: 53.333333vw;
  max-width: 100%;
}

.NoDataTip-wrapper h3 {
    margin: 3.333333vw 0 2.666667vw;
    color: #6a6a6a;
    font-weight: 400;
    font-size: .453333rem;
}

.NoDataTip-wrapper button {
    padding: 2.666667vw;
    min-width: 32vw;
    border: none;
    border-radius: .533333vw;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
    font-family: inherit;
    outline: 0;
}
</style>
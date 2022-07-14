<template>
  <div class="slide">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/detail">详情页</router-link>
    <router-link to="/cart">购物车</router-link>
  </div>
</template>

<script>
export default {
  name: 'slide-com'
}
</script>

<style scoped>
  .slide {
    width: 150px;
    background-color: pink;
    padding: 15px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .slide > a {
    margin: 10px;
    font-size: 20px;
  }
</style>

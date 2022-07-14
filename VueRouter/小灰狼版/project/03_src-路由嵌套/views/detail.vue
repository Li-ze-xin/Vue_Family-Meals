<template>
  <div class="detail">
    <ul class="top">
      <router-link to="/detail/info">详细信息</router-link>
      <router-link to="/detail/params">规格参数</router-link>
    </ul>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-com',
  data () {
    return {
      message: '我是 Detail 组件'
    }
  }
}
</script>

<style scoped>
  .detail {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .detail > .top {
    height: 60px;
    border: 2px solid #333;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .top > li {
    list-style: none;
    cursor: pointer;
  }

  .detail > .bottom {
    flex: 1;
  }
</style>

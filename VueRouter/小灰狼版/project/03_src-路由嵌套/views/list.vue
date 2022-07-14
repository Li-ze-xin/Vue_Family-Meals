<template>
  <div class="list">
    <ul class="top">
      <router-link to="/list/page">页面数据</router-link>
    </ul>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-com',
  data () {
    return {
      message: '我是 List 组件'
    }
  }
}
</script>

<style scoped>
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .list > .top {
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

  .list > .bottom {
    flex: 1;
  }
</style>

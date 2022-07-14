<template>
  <div class="detail">
    <ul class="top">
      <router-link :to="{name: 'info'}">详细信息</router-link>
      <router-link to="/detail/params">规格参数</router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ['pageItem'],
  name: 'first-com',
  mounted () {
    if (this.pageItem) {
      const { params: { pageItem: { id, title } } } = this.$route
      console.log(id, title)
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

</style>

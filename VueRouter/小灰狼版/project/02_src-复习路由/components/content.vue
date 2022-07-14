<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'content-com'
}
</script>

<style scoped>
  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 30px;
    overflow: auto;
  }
</style>

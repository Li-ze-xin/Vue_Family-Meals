<template>
  <ul>
    <li>消息编号:{{ $route.query.id }}</li>
    <li>消息标题:{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail-com',
  mounted() {
    console.log('组件内的 $route信息:', this.$route);
  },
};
</script>

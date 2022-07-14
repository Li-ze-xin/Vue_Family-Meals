<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About-com',
  mounted() {
    console.log('About组件挂载完毕了');

    console.log('每个组件都有自己的 $route属性:', this.$route);
    console.log('整个应用只有一个  $router属性:', this.$router);
  },
  beforeDestroy() {
    console.log('About组件即将被销毁了');
  },
};
</script>

<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About-com',
  beforeRouteEnter(to, _, next) {
    if (to.meta.isAuth) { // 判断是否需要鉴权
      if (localStorage.getItem('flag')) {
        next();
      } else {
        alert('无权限查看!');
      }
    } else {
      next();
    }
  },
};
</script>

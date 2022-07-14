<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About-com',
  beforeRouteEnter(to, from, next) {
    console.group('进入组件时的路由守卫');
    console.log('to:', to);
    console.log('from:', from);
    console.groupEnd();

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
  beforeRouteLeave(to, from, next) {
    console.group('离开组件时的路由守卫');
    console.log('to:', to);
    console.log('from:', from);
    console.groupEnd();
    next();
  },
};
</script>

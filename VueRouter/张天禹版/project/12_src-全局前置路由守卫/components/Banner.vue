<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试一下go</button>
      <button @click="onAuthorization">开启权限</button>
      <button @click="offAuthorization">关闭权限</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner-com',
  methods: {
    back() {
      console.log(this.$router);
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2);
    },
    onAuthorization() {
      window.localStorage.setItem('flag', true);
    },
    offAuthorization() {
      window.localStorage.removeItem('flag');
    },
  },
};
</script>

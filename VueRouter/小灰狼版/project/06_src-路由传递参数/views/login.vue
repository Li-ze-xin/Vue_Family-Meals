<template>
  <div>
    <button @click="loginHandler">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login-com',
  methods: {
    loginHandler () {
      console.log('验证用户的用户名和密码信息是否正确 ajax')
      // 条件判断, 登录失败还是成功

      // 如果成功, 应该在这里进行路由的跳转
      // 使用 Vue 提供的语法来实现
      // 在 this(Vue 组件) 身上有一个叫做 $router 的选项

      this.$router.push('/home')
    }
  }
}
</script>

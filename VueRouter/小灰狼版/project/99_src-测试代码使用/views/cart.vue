<template>
  <div class="cart">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'first-com',
  data () {
    return {
      message: '我是 Cart 组件'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('键入组件时触发', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('离开组件时触发', to, from)
    next()
  }
}
</script>

<template>
  <div class="home">
    <p>{{message}}</p>
    <button @click="backHandler">历史回退</button>
  </div>
</template>

<script>
export default {
  name: 'home-com',
  data () {
    return {
      message: '我是 Home 组件'
    }
  },
  methods: {
    backHandler () {
      this.$router.back()
    }
  }
}
</script>

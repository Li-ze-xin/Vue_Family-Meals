<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'info-com',
  data () {
    return {
      message: '我是 info 组件, 用来显示商品详细信息'
    }
  }
}
</script>

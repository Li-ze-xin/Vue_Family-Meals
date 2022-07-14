<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'params-com',
  data () {
    return {
      message: '我是 params 组件, 用来显示商品详细信息'
    }
  }
}
</script>

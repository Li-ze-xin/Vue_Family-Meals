<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'page-com',
  data () {
    return {
      message: '我是 params 组件, 用来显示商品参数信息'
    }
  }
}
</script>

<template>
  <div>
    <p>{{message}}</p>
    <p>已知当前是第{{$route.params.current}}页,发送请求 请求第{{$route.params.current}}页的数据进行渲染即可</p>
  </div>
</template>

<script>
export default {
  name: 'page-com',
  data () {
    return {
      message: '我是 page 组件, 用来显示商品详细信息'
    }
  }
}
</script>

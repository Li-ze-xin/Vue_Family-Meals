<template>
  <div>
    <p>{{message}}</p>
    <p>已知当前是第{{$route.params.current}}页,发送请求 请求第{{$route.params.current}}页的数据进行渲染即可</p>
    <hr>
    <ol>
      <li @click="handler(item)" v-for="item in goods" :key="item.id">
        {{ item.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'page-com',
  data () {
    return {
      message: '我是 page 组件, 用来显示商品详细信息',
      goods: [
        { id: 1, title: '手机' },
        { id: 3, title: '电脑' },
        { id: 2, title: '移动硬盘' }
      ]
    }
  },
  methods: {
    // 导航的时候传递一个参数
    handler (item) {
      this.$router.push({ name: 'detail', params: { pageItem: item } })
    }
  },
  // 注意: 这个钩子, 只会在你要离开当前组件时执行.
  beforeRouteLeave (to, from, next) {
    console.group('你要离开当前组件了')
    console.log('to:到哪去?', to)
    console.log('from:从哪来?', from)
    console.groupEnd()

    // 判断一下如果你要直接跳转去到 首页, 不允许你去
    if (to.path === '/home') {
      return console.log('不允许你直接去到 home页面!')
    }
    next()
  }
}
</script>

<style scoped>
  ol {
    margin: 20px;
  }

  li {
    margin: 10px 0;
    cursor: pointer;
  }
</style>

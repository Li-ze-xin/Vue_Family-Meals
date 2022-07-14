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
        {
          id: 1,
          title: '手机',
          message: 'Apple iPhone 13 Pro Max (A2644) 1TB 远峰蓝色 支持移动联通电信5G 双卡双待手机',
          img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/140202/9/21313/97577/61411d4fE5068064d/c62a98377329d312.jpg.avif',
          price: '京 东 价: ￥ 12999.00',
          brand: ' Apple',
          tradeName: 'Apple iPhone 13 Pro Max',
          goodsStorage: '1TB',
          goodsColor: '远峰蓝色'
        },
        { id: 3, title: '电脑' },
        { id: 2, title: '移动硬盘' }
      ]
    }
  },
  methods: {
    // 导航的时候传递一个参数
    handler (item) {
      // 进行编程式导航
      // this.$router.push('/detail')

      // 导航的时候, 进行参数的传递
      // 语法: this.$router.方法名({' path: '/xxx, query: ..., params: ... '})
      // 注意: query 和 params 都可以传递参数
      // query  会以查询字符串的形式传递
      // this.$router.push({ path: '/detail', query: { pageItem: item } })

      // params 是一个暗文传递(params 不能和 path 合作 不能有效传递参数)
      // this.$router.push( { path: '/detail', params: { page: 1 } })

      // 在进行路由跳转的时候
      //    可以使用 path 进行跳转
      //    可以使用 name 进行跳转
      // 当你使用 params 进行参数的传递时,  只能使用 name 进行跳转
      this.$router.push({ name: 'detail', params: { pageItem: item } })
      // this.$router.push({name: 'detail', query: {page: 1} })
    }
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

// 该文件专门用于创建整个应用的路由器
import vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import First from '../views/first'
import Second from '../views/second'
import Third from '../views/third'
import Fourth from '../views/fourth'

// 挂载 使用插件
vue.use(VueRouter)

// 配置路由表
const routes = [
  // 在 routes 配置项里面进行所有你需要的路由配置
  { // 路由重定向
    path: '/', // 打开页面的时候, 就是一个 /
    // 自动切换到哪一个路由
    redirect: '/first'
  },
  { // 配置第一个路由
    path: '/first',
    // 选填, 你自己写一个路由名称
    name: 'first',
    // 该指令出现的时候, 使用哪一个组件去填写 router-view 标签的位置
    component: First
  },
  { // 配置第二个路由
    path: '/second',
    component: Second
  },
  { // 配置第三个路由
    path: '/third',
    component: Third
  },
  { // 配置第四个路由
    path: '/fourth',
    component: Fourth
  }
]

// 创建一个路由器
const router = new VueRouter({
  // 配置项, 配置该实例需要使用的路由表
  routes
})

// 将准备好的路由器暴露出去
export default router

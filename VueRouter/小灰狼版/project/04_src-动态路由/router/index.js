// 该文件专门用于创建整个应用的路由器
import vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/home'
import List from '../views/list'
import Detail from '../views/detail'
import Cart from '../views/cart'
import Page from '../views/page'
import Info from '../views/info'
import Params from '../views/params'

// 挂载 使用插件
vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    component: List,
    children: [
      { // 将来的路由跳转就是 /list/page/数据
        path: 'page/:current',
        component: Page
      }
    ]
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
        path: 'info',
        component: Info
      },
      {
        path: 'params',
        component: Params
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  }
]

// 创建一个路由器
const router = new VueRouter({
  // 配置项, 配置该实例需要使用的路由表
  routes
})

// 将准备好的路由器暴露出去
export default router

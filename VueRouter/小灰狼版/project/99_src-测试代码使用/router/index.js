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
import Login from '../views/login'

// 挂载 使用插件
vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'list',
    path: '/list',
    component: List,
    children: [
      { // 将来的路由跳转就是 /list/page/数据
        name: 'page',
        path: 'page/:current',
        component: Page
      }
    ]
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail,
    props: true,
    children: [
      {
        name: 'info',
        path: 'info',
        component: Info
      },
      {
        name: 'params',
        path: 'params',
        component: Params
      }
    ]
  },
  {
    name: 'cart',
    path: '/cart',
    beforeEnter (to, from, next) {
      console.log('路由内局部守卫', to, from)
      next()
    },
    component: Cart
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

// 创建一个路由器
const router = new VueRouter({
  // 配置项, 配置该实例需要使用的路由表
  routes
})

router.beforeEach((to, from, next) => {
  console.log('全局前置路由守卫', to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('全局解析路由守卫', to, from)
  next()
})

router.afterEach((to, from) => {
  console.log('全局后置路由守卫', to, from)
})

// 将准备好的路由器暴露出去
export default router

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

// 1. 配置全局前置路由守卫
router.beforeEach((to, from, next) => {
  console.group('全局前置守卫')
  console.log('to:到哪去?', to)
  console.log('from:从哪来?', from)
  console.groupEnd()

  // 放行
  // next()

  // 你要去到的页面不是购物车页面, 那么直接放行
  if (to.path !== '/cart') return next()

  // 代码能执行到这里, 表示你要去到 购物车页面
  // 验证一下你是否登录过
  console.log('发送一个 ajax 请求, 验证一下你是否登录过')
  const login = window.localStorage.getItem('login')

  // login存在, 那么直接放行, 正常打开购物车页面
  if (login) return next()

  // 如果 login 不存在, 那么跳转回到 login 路由
  console.log('你没有登录过,去登录一下吧')
  router.replace('/login')
})

// 将准备好的路由器暴露出去
export default router

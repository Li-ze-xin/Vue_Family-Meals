// 该文件专门用于创建整个应用的路由器
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Message from '../views/Message.vue';
import Detail from '../views/Detail.vue';

// 挂载 使用插件
Vue.use(VueRouter);

// 配置路由表,去管理一组一组的路由规则
const routes = [
  {
    // 给路由起一个名字 方便查找
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    // 配置子级路由
    children: [
      {
        name: 'news',
        path: 'news',
        component: News,
        meta: { isAuth: true },
      },
      {
        name: 'message',
        path: 'message',
        component: Message,
        meta: { isAuth: true },
        children: [
          {
            name: 'detail',
            path: 'detail/:id/:title', // 占位符 用来接收 params 传递来的参数
            component: Detail,
            props($route) {
              return {
                id: $route.params.id,
                title: $route.params.title,
                a: 1,
                b: 'hello',
              };
            },
          },
        ],
      },
    ],
  },
];

// 创建一个路由器
const router = new VueRouter({
  routes,
});

// 全局前置路由守卫-----初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.group('全局前置路由守卫');
  console.log('from.path:', from.path);
  console.log('to.path:', to.path);
  console.groupEnd();

  // if (to.path === '/home/news' || to.path === '/home/message') {
  // 优化一下 判断的条件
  // route属性中 有一个配置项叫做 meta
  // meta 元信息, 专门用来给 程序员提供的, 里面可以存储一些信息的,

  if (to.meta.isAuth) { // 是否需要鉴权
    if (localStorage.getItem('flag')) {
      next();
    } else {
      alert('没有权限访问');
    }
  } else {
    next();
  }
});

// 将准备好的路由器暴露出去
export default router;

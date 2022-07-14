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
    meta: { title: '关于', isAuth: true },
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: { title: '主页' },
    // 配置子级路由
    children: [
      {
        name: 'news',
        path: 'news',
        component: News,
        meta: { isAuth: true, title: '新闻' },
      },
      {
        name: 'message',
        path: 'message',
        component: Message,
        meta: { isAuth: true, title: '信息' },
        children: [
          {
            name: 'detail',
            path: 'detail/:id/:title', // 占位符 用来接收 params 传递来的参数
            component: Detail,
            meta: { title: '详情' },
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
        // 独享路由守卫
        beforeEnter(to, _, next) {
          if (to.meta.isAuth) {
            if (window.localStorage.getItem('flag')) {
              next();
            } else {
              alert('没有权限访问');
            }
          } else {
            next();
          }
        },
      },
    ],
  },
];

// 创建一个路由器
const router = new VueRouter({
  routes,
  mode: 'history', // 路由的工作模式
});

// 全局后置路由守卫-----初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to) => {
  // 改变网页标题
  document.title = to.meta.title || '硅谷系统';
});

// 将准备好的路由器暴露出去
export default router;

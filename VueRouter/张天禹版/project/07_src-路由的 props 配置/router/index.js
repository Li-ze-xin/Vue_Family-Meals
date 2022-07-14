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
      },
      {
        name: 'message',
        path: 'message',
        component: Message,
        children: [
          {
            name: 'detail',
            path: 'detail/:id/:title', // 占位符 用来接收 params 传递来的参数
            component: Detail,

            // props 的第一种写法, 值为对象, 该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件.
            // props: { a: 1, b: 'hello' },

            // props 的第二种写法, 值为布尔值, 若布尔值为真, 就会把该路由组件收到的所有 params参数, 以 props的形式传给 Detail 组件.
            // props: true,

            // props 的第三种写法, 值为函数 支持 query参数
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

// 将准备好的路由器暴露出去
export default router;

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
            path: 'detail',
            component: Detail,
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

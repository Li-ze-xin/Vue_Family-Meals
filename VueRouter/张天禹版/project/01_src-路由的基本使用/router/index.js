// 该文件专门用于创建整个应用的路由器
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import About from '../components/About.vue';
import Home from '../components/Home.vue';

// 挂载 使用插件
Vue.use(VueRouter);

// 配置路由表,去管理一组一组的路由规则
const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
  },
];

// 创建一个路由器
const router = new VueRouter({
  routes,
});

// 将准备好的路由器暴露出去
export default router;

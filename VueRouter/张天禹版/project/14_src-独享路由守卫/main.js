// 引入 Vue
import Vue from 'vue';
// 引入 App
import App from './App.vue';
// 引入路由器
import router from './router';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 创建 Vue实例(vm)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'

// 引入 router 路由器
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置项, 配置该实例需要使用的路由器
  router
}).$mount('#app')

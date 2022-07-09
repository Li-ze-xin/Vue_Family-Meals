// 该文件用于创建 Vuex 中最为核心的 Store

// 引入Vue
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';

import countOptions from './count';
import personOptions from './person';

// 挂载使用
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
});

// 默认导出
export default store;

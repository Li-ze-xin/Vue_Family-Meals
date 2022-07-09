// 该文件用于创建 Vuex 中最为核心的 Store

// 引入Vue
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';
// 挂载使用
Vue.use(Vuex);

// 准备 actions  用于响应组件中的动作
const actions = {};

// 准备 mutations 用于操作/修改数据(state)
const mutations = {};

// 准备 state 用于存储数据
const state = {};

const store = new Vuex.Store({
  actions,
  mutations,
  state,
});

// 默认导出
export default store;

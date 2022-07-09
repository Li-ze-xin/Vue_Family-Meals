// 该文件用于创建 Vuex 中最为核心的 Store

// 引入Vue
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';
// 挂载使用
Vue.use(Vuex);

// 准备 actions  用于响应组件中的动作
const actions = {
  'wait-handler': function (context, value) {
    console.log('actions 中的 WaitHandler 被调用了');
    setTimeout(() => {
      context.commit('WaitHandler', value);
    }, 1000);
  },
};

// 准备 mutations 用于操作/修改数据(state)
const mutations = {
  AddHandler(state, value) {
    console.log('mutations中的 AddHandler 被调用了');
    state.sum += value;
  },
  SubHandler(state, value) {
    console.log('mutations中的 SubHandler 被调用了');
    state.sum -= value;
  },
  OddHandler(state, value) {
    console.log('mutations中的 OddHandler 被调用了');
    if (state.sum % 2) state.sum += value;
  },
  WaitHandler(state, value) {
    console.log('mutations中的 WaitHandler 被调用了');
    state.sum += value;
  },
};

// 准备 getters 用于将 state 中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 准备 state 用于存储数据
const state = {
  sum: 0, // 当前的和
};

const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

// 默认导出
export default store;

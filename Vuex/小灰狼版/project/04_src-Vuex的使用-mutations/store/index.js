import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 500,
  },
  mutations: {
    changeNum(state, payload) {
      state.num = payload;
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 500,
  },
  getters: {
  },
  mutations: {
    changeNum(state, payload) {
      state.num = payload;
    },
  },
  actions: {
    asyncChangeNum(context) {
      setTimeout(() => {
        context.commit('changeNum', '壹佰');
      }, 1000);
    },
  },
  modules: {
  },
});

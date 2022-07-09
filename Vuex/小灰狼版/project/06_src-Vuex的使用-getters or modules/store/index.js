import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: new Date(),
  },
  getters: {
    superTime(state) {
      const t = state.time;
      const year = t.getFullYear();
      const month = t.getMonth() + 1;
      const day = t.getDate();
      const hour = t.getHours();
      const min = t.getMinutes();
      const second = t.getSeconds();

      return `${year}年${month}月${day}日  ${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
    },
  },
  mutations: {
    changeTime(state) {
      state.time = new Date();
    },
  },
  actions: {
    asyncChangeTime(context) {
      setInterval(() => {
        context.commit('changeTime');
      }, 1000);
    },
  },
  modules: {
    users: {
      state: {
        username: '张三',
      },
      mutations: {},
      actions: {},
      getters: {},
      modules: {},
    },
  },
});

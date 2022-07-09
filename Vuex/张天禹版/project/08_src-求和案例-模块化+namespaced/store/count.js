export default {
  namespaced: true,
  state: {
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject: '前端',
  },

  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },

  actions: {
    'wait-handler': function (context, value) {
      console.log('actions 中的 WaitHandler 被调用了');
      setTimeout(() => {
        context.commit('WaitHandler', value);
      }, 1000);
    },
  },

  mutations: {
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
  },
};

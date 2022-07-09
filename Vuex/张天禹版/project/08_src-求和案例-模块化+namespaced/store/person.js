export default {
  namespaced: true,
  state: {
    personList: [
      { id: '001', name: '张三' },
    ],
  },

  mutations: {
    AddPerson(state, value) {
      console.log('mutations中的 AddPerson 被调用了');
      state.personList.push(value);
    },
  },
};

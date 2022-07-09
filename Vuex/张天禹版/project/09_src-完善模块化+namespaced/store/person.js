import axios from 'axios';
import { nanoid } from 'nanoid';

export default {
  namespaced: true,
  state: {
    personList: [
      { id: '001', name: '张三' },
    ],
  },

  mutations: {
    AddPerson(state, value) {
      state.personList.push(value);
    },
  },

  actions: {
    'add-handler-wang': function (context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('AddPerson', value);
      } else {
        alert('添加的人必须姓王');
      }
    },

    'add-handler-person-server': function (context) {
      axios.get('http://api.tianapi.com/cname/index?key=9c10c04f76f947ec2e59f3284650d396')
        .then((response) => {
          console.log(response);
          context.commit('AddPerson', { id: nanoid(), name: response.data.newslist[0].naming });
        }, (error) => {
          alert(error.message);
        });
    },
  },
};

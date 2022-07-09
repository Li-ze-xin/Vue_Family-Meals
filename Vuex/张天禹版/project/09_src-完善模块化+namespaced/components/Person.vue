<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为:{{sum}}</h3>
    <label for="test">
      <input id="test" type="text" placeholder="请输入文字" v-model="name" @keydown.enter="addHandler">
    </label>
    <button @click="addHandler">添加</button>
    <button @click="addWangHandler">添加一个姓王的人</button>
    <button @click="addPersonServerHandler">添加一个人,名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'person-com',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    addHandler() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit('personOptions/AddPerson', personObj);
      this.name = '';
    },
    addWangHandler() {
      const personObj = { id: nanoid(), name: this.name };
      console.log(111);
      this.$store.dispatch('personOptions/add-handler-wang', personObj);
      this.name = '';
    },
    addPersonServerHandler() {
      this.$store.dispatch('personOptions/add-handler-person-server');
    },
  },
  computed: {
    sum() {
      return this.$store.state.countOptions.sum;
    },
    personList() {
      return this.$store.state.personOptions.personList;
    },
  },
};
</script>

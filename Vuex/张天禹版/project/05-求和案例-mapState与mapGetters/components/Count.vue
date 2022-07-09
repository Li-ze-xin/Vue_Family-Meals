<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>

    <form action="">
      <label for="test">
        <select id="test" v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    </form>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'count-com',
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  methods: {
    increment() {
      this.$store.commit('AddHandler', this.n);
    },
    decrement() {
      this.$store.commit('SubHandler', this.n);
    },
    incrementOdd() {
      this.$store.commit('OddHandler', this.n);
    },
    incrementWait() {
      this.$store.dispatch('wait-handler', this.n);
    },
  },
  computed: {
    // 靠程序员自己亲自去写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    // 借助 mapState, 从 state 中读取数据
    ...mapState(['sum', 'school', 'subject']),

    // 靠程序员自己亲自去写计算属性
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    // 借助 mapGetters, 从 getters 中读取数据
    ...mapGetters(['bigSum']),
  },

  mounted() {
    const s1 = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }); // (对象写法)
    const s2 = mapState(['sum', 'school', 'subject']); // (数组写法)
    console.log('mapState:', s1);
    console.log('mapState:', s2);

    const s3 = mapGetters({ he: 'bigSum' }); // (对象写法)
    const s4 = mapGetters(['bigSum']); // (数组写法)
    console.log('mapGetters:', s3);
    console.log('mapGetters:', s4);
  },
};
</script>

<style>
form {
  float: left;
}

button {
  margin-left: 10px;
}
</style>

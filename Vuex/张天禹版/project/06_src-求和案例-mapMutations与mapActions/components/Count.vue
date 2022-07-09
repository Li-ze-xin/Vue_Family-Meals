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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';

export default {
  name: 'count-com',
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  methods: {
    // 程序员亲自写方法
    // increment() {
    //   this.$store.commit('AddHandler', this.n);
    // },
    // decrement() {
    //   this.$store.commit('SubHandler', this.n);
    // },
    // incrementOdd() {
    //   this.$store.commit('OddHandler', this.n);
    // },

    // 借助 mapMutations, 从 mutations 中读取数据
    ...mapMutations({ increment: 'AddHandler', decrement: 'SubHandler', incrementOdd: 'OddHandler' }),

    // 程序员亲自写方法
    // incrementWait() {
    //   this.$store.dispatch('wait-handler', this.n);
    // },

    // 借助 mapActions, 从 actions 中读取数据
    ...mapActions({ incrementWait: 'wait-handler' }),
  },
  computed: {
    // 借助 mapState, 从 state 中读取数据
    ...mapState(['sum', 'school', 'subject']),

    // 借助 mapGetters, 从 getters 中读取数据
    ...mapGetters(['bigSum']),
  },

  mounted() {
    const s1 = mapMutations({ increment: 'AddHandler', decrement: 'SubHandler', incrementOdd: 'OddHandler' }); // (对象写法)
    const s2 = mapMutations(['increment', 'SubHandler', 'OddHandler']); // (数组写法)
    console.log('mapMutations:', s1);
    console.log('mapMutations:', s2);

    const s3 = mapActions({ incrementWait: 'wait-handler' }); // (对象写法)
    const s4 = mapActions(['incrementWait']); // (数组写法)
    console.log('mapActions:', s3);
    console.log('mapActions:', s4);
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

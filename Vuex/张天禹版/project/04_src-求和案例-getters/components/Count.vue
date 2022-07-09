<template>
  <div>
    <h1>当前求和为: {{$store.state.sum}}</h1>
    <h3>当前求和放大10倍为:{{$store.getters.bigSum}}</h3>

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
};
</script>

<style>
form {
  float: left;
}

button {
  margin-left: 10px
}
</style>

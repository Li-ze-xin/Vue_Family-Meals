<template>
  <div class="second">
    组件二{{num}}
    <button @click="waitHandler">异步修改 state 内的 num 数据</button>
  </div>
</template>

<script>
export default {
  name: 'second-com',
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
  methods: {
    waitHandler() {
      this.$store.dispatch('asyncChangeNum');
    },
  },
};
</script>

<template>
  <div class="first">
    组件一{{num}}
    <button @click="modificationHandler">修改 state 内的 num 数据</button>
  </div>
</template>

<script>
export default {
  name: 'first-com',
  methods: {
    modificationHandler() {
      this.$store.commit('changeNum', 100);
    },
  },
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
};
</script>

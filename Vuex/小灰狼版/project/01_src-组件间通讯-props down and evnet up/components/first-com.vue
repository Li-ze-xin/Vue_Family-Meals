<template>
  <div class="first">
    组件一{{num}}
    <button @click="handler">修改num数据</button>
  </div>
</template>

<script>
export default {
  props: ['test', 'number'],
  name: 'first-com',
  data() {
    return {
      num: 100,
    };
  },
  methods: {
    handler() {
      this.num = 200;
      this.test(this.num);
    },
  },
  watch: {
    number(newVal) {
      this.num = newVal;
    },
  },
  mounted() {
    this.test(this.num);
  },
};
</script>

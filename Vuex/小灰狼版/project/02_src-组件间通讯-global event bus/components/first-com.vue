<template>
  <div class="first">
    组件一{{num}}
    <button @click="handler">修改num数据</button>
  </div>
</template>

<script>
export default {
  name: 'first-com',
  data() {
    return {
      num: 100,
    };
  },
  methods: {
    handler() {
      this.num = 200;
      this.$bus.$emit('changeNum', this.num);
    },
  },
  mounted() {
    this.$bus.$emit('test', this.num);
    this.$bus.$on('changeNum', (value) => { this.num = value; });
  },
};
</script>

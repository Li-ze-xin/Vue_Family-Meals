<template>
  <div class="third">
    组件三{{num}}
    <button @click="handler">修改num数据</button>
  </div>
</template>

<script>
export default {
  name: 'third-com',
  data() {
    return {
      num: '',
    };
  },
  methods: {
    handler() {
      this.num = 500;
      this.$bus.$emit('changeNum', this.num);
    },
  },
  created() {
    this.$bus.$on('test', (value) => { this.num = value; });
    this.$bus.$on('changeNum', (value) => { this.num = value; });
  },
};
</script>

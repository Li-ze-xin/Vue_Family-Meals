<template>
  <div class="second">
    组件二{{num}}
  </div>
</template>

<script>
export default {
  name: 'second-com',
  data() {
    return {
      num: '',
    };
  },
  created() {
    this.$bus.$on('test', (value) => { this.num = value; });
    this.$bus.$on('changeNum', (value) => { this.num = value; });
  },
};
</script>

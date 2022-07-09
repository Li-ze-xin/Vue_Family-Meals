<template>
  <div class="first">
    组件一{{num}}
  </div>
</template>

<script>
export default {
  name: 'first-com',
  data() {
    return {
      num: this.$store.state.num,
    };
  },
};
</script>

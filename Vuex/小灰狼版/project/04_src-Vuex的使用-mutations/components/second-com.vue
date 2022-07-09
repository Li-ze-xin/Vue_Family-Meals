<template>
  <div class="second">
    组件二{{num}}
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
};
</script>

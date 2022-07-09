<template>
  <div class="third">
    组件三{{num}}
  </div>
</template>

<script>
export default {
  name: 'third-com',
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
};
</script>

<template>
  <div class="first">
    组件一 {{time}}
  </div>
</template>

<script>
export default {
  name: 'first-com',
  computed: {
    time() {
      return this.$store.getters.superTime.split(' ')[0];
    },
  },
};
</script>

<template>
  <div class="second">
    组件二 {{time}}
  </div>
</template>

<script>
export default {
  name: 'second-com',
  computed: {
    time() {
      return this.$store.getters.superTime.split('日')[1].trim();
    },
  },
};
</script>

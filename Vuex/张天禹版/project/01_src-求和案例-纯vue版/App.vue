<template>
  <div id="app">
    <count-com></count-com>
  </div>
</template>

<script>
import Count from './components/Count.vue';

export default {
  name: 'App',
  components: {
    'count-com': Count,
  },
};
</script>

<style>
</style>

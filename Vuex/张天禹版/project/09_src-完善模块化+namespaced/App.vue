<template>
  <div id="app">
    <count-com></count-com>
    <hr>
    <person-com></person-com>
  </div>
</template>

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';

export default {
  name: 'App',
  components: {
    'count-com': Count,
    'person-com': Person,
  },
};
</script>

<style>
</style>

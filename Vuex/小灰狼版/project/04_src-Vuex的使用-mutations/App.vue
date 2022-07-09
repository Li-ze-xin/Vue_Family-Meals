<template>
  <div id="app">
    <p>组件间通讯-学习{{num}}</p>
    <section>
      <my-first></my-first>
    </section>
    <hr>
    <section>
      <my-second></my-second>
    </section>
    <hr>
    <section>
      <my-third></my-third>
    </section>
  </div>
</template>

<script>
import first from './components/first-com.vue';
import second from './components/second-com.vue';
import third from './components/third-com.vue';

export default {
  name: 'App',
  components: {
    'my-first': first,
    'my-second': second,
    'my-third': third,
  },
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
};
</script>

<style lang="sass">
section
  width: 600px
  height: 200px
  border: 2px solid pink
</style>

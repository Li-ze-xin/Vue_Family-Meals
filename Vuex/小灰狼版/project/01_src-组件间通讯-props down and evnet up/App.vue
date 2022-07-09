<template>
  <div id="app">
    <p>组件间通讯-学习{{num}}</p>
    <section>
      <my-first :test="handler" :number="num"></my-first>
    </section>
    <hr>
    <section>
      <my-second :num="num"></my-second>
    </section>
    <hr>
    <section>
      <my-third :num="num" :test="handler"></my-third>
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
  data() {
    return {
      num: '',
    };
  },
  methods: {
    handler(value) {
      this.num = value;
    },
  },
  mounted() {
  },
};
</script>

<style lang="sass">
section
  width: 600px
  height: 200px
  border: 2px solid pink
</style>

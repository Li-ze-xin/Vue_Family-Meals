<template>
  <div id="app">
    <header-com></header-com>
    <section-com></section-com>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Section from './components/section.vue'
export default {
  name: 'App',
  components: {
    'header-com': Header,
    'section-com': Section
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #app {
    display: flex;
    flex-direction: column;
  }
</style>

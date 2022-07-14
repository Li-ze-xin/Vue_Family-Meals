<template>
  <div class="section">
    <slide-com></slide-com>
    <content-com></content-com>
  </div>
</template>

<script>
import Slide from './slide.vue'
import Content from './content.vue'

export default {
  name: 'section-com',
  components: {
    'slide-com': Slide,
    'content-com': Content
  }
}
</script>

<style scoped>
.section {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
</style>

<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>

    <li>news001
      <label for="a">
        <input id="a" type="text">
      </label>
    </li>
    <li>news002
      <label for="b">
        <input id="b" type="text">
      </label>
    </li>
    <li>news003
      <label for="c">
        <input id="c" type="text">
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'News-com',
  data() {
    return {
      opacity: 1,
    };
  },
  beforeMount() {
    console.log('News组件即将被挂载');
  },
  mounted() {
    console.log('News组件挂载完成');
  },
  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer);
  },
  beforeDestroy() {
    console.log('News组件即将被销毁了');
  },
};
</script>

<template>
  <ul>
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
  beforeMount() {
    console.log('News组件即将被挂载');
  },
  mounted() {
    console.log('News组件挂载完成');
  },
  beforeDestroy() {
    console.log('News组件即将被销毁了');
  },
};
</script>

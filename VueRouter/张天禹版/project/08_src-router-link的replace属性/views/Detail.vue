<template>
  <ul>
    <li>消息编号:{{id}}</li>
    <li>消息标题:{{title}}</li>
    <li>a:{{a}}</li>
    <li>b:{{b}}</li>
  </ul>
</template>

<script>
export default {
  props: ['a', 'b', 'id', 'title'],
  name: 'Detail-com',
};
</script>

<template>
  <div>
    {{message}}
    <hr>

    <!--
      <a href="#/first">显示一号组件</a> <br> <a href="#/second">显示二号组件</a>
      vue-router 不推荐使用 a 标签
        + 因为他给你提供了一个 路由跳转 标签
        + 叫做 router-link
          => to属性: 就是你要跳转的路径地址.
          => tag属性: 就是要以什么标签显示 默认是 a标签
    -->

    <ul>
      <router-link to="/first" tag="li">一号组件</router-link>
      <router-link to="/second" tag="li">二号组件</router-link>
      <router-link to="/third" tag="li">三号组件</router-link>
      <router-link to="/fourth" tag="li">四号组件</router-link>
    </ul>

    <!-- 当你将来切换路由的时候, 会把应该显示的内容去替换这个 router-view 标签位置 (挖坑)-->
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'hello Vue Router'
    }
  }
}
</script>

<style>
  body, ul, hr{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    height: 100%;
    flex: 1;
    text-align: center;
    line-height: 50px;
    background-color: orange;
    cursor: pointer;
  }

  .box {
    text-align: center;
    font-size: 30px;
  }

  .router-link-active {
    background-color: yellow;
  }
</style>

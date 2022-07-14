<template>
  <div id="app">
    <div class="row">
      <banner-com></banner-com>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">

          <!-- Vue中借助 router-link 标签实现路由的切换 -->
            <router-link
              class="list-group-item"
              active-class="active"
              to="/about"
            >About</router-link>

            <router-link
              class="list-group-item"
              active-class="active"
              to="/home"
            >Home</router-link>
        </div>
      </div>
    </div>

    <div class="col-xs-6 col-xs-offset-4">
      <div class="panel">
        <div class="panel-body">
          <!-- 指定组件的呈现位置 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 Banner 组件
import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: {
    'banner-com': Banner,
  },
};
</script>

<style lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: skyblue;
  }
</style>

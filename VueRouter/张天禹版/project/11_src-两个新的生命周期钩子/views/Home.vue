<template>
  <div>
    <h2>我是Home的内容</h2>

    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
          >News</router-link>
        </li>

        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
          >Messages</router-link>
        </li>
      </ul>
    </div>

      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"> -->

      <!-- 缓存一个路由组件 -->
      <keep-alive include="News-com">
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home-com',
};
</script>

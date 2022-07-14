<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">

        <!-- 跳转路由并携带 params参数, to的字符串写法 -->
        <!-- <router-link
          :to="`/home/message/detail/${item.id}/${item.title}`"
        >{{item.title}}</router-link> -->

        <!-- 跳转路由并携带 params参数, to的对象写法-->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title,
            }
          }"
        >{{item.title}}</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message-com',
  data() {
    return {
      list: [
        { id: '001', title: 'message001' },
        { id: '002', title: 'message002' },
        { id: '003', title: 'message003' },
      ],
    };
  },
};
</script>

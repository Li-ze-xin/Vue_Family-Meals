<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">

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

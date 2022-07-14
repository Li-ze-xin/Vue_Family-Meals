<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">

        <router-link
          replace
          :to="{
            name: 'detail',
            params: {
              id: item.id,
              title: item.title,
            }
          }"
        >{{item.title}}</router-link>

        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
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
  methods: {
    pushShow(item) {
      console.log(this.$router);
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      this.$router.replace({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

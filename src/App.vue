<template>
  <v-app>
 <router-link to="/home"></router-link>
 <router-view></router-view>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

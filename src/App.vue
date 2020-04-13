<template>
  <v-app>
 <router-link to="/" class="initial"></router-link>
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

<style lang="scss" scoped>

</style>
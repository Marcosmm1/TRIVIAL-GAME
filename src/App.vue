<template>
 <div id="app" class="container">
    <v-app id="inspire">
 <router-link to="/" class="initial"></router-link>
 <router-view />
  </v-app>
  </div>
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
<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>CATEGORY</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">QUESTION</v-card-title>
          </v-card>
        </v-col>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    questions: String
  }
};
</script>
<style lang="scss" scoped>
</style>
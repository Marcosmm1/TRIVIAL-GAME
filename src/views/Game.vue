<template>
  <div>
    {{ questionsData }}
    <Questions v-on:questions="questions" />
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card :color="item.color" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.answer"></v-card-title>
          </div>
        </div>
      </v-card>
    </v-col>
  </div>
</template>
<script>
import Questions from '@/components/Questions.vue';
import ApiService from "../services/TrivialService.js";

export default {
  components: {
    Questions
  },
  data() {
    return {
      questionsData: [],
      difficulty: ""
    };
  },
  methods: {
    questions(questionstoadd) {
      this.questionsData = questionstoadd;
    }
  },
  mounted() {
      this.difficulty = this.$route.params.difficulty;
      ApiService.getQuestions(this.difficulty).then(
      response => (this.questionsData = response))
  }
};
</script>
<style lang="scss" scoped>
</style>
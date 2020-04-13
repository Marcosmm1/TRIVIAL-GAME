<template>
  <div class="mx-auto text-align my-10">
    <h1 class="mb-5">Current Question</h1>
    <Question v-on:nextquestion="nextQuestion" :question="questionsData[currentQuestion]" />
  </div>
</template>
<script>
import Question from '../components/Question.vue';
import ApiService from "../services/TrivialService.js";

export default {
  components: {
    Question
  },
  data() {
    return {
      questionsData: null,
      currentQuestion: 0,
      totalQuestions: null,
      difficulty: null
    };
  },
  async created() {
    this.difficulty = this.$route.params.difficulty;
    this.questionsData = await ApiService.getQuestions(this.difficulty)
    this.totalQuestions = this.questionsData.length
  },
  methods: {
    nextQuestion() {
      if(this.questionsData === null){
        this.currentQuestion++
      } else {
        return this.currentQuestion++
      }
    }
  }
}
</script>
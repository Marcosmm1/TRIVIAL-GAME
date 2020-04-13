<template>
  <div class="home">

    <h1>Trivia Quizzy</h1>
    <p>Select your difficulty:</p>
    <v-btn color="success" outlined x-large v-model="difficulty">easy</v-btn>
    <v-btn color="warning" outlined x-large v-model="difficulty">medium</v-btn>
    <v-btn color="error" outlined x-large v-model="difficulty">hard</v-btn>

    <v-btn color="success" x-large bloc>Start</v-btn>


  </div>
</template>

<script>
import ApiService from "../services/TrivialService.js";

export default {
  name: 'Home',
  difficulty: "",
  create() {
    ApiService.getQuestions(this.difficulty).then(response =>(this.questions = response))
  }
};
</script>

<style lang="scss" scoped>
.home{
  text-align:center;
}
</style>

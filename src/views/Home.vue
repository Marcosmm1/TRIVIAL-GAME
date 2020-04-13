<template>
  <div class="home">
<v-container>

<h1>Trivia Quizzy</h1>
    <p>Select your difficulty:</p>
    <div>
    <v-btn class="button" color="success" outlined x-large v-model="difficulty">easy</v-btn>

    </div>
        <div>
    <v-btn class="button" color="warning" outlined x-large v-model="difficulty">medium</v-btn>

    </div>
        <div>
    <v-btn class="button" color="error" outlined x-large v-model="difficulty">hard</v-btn>

    </div>

    <v-btn color="success" x-large block>Start</v-btn>

</v-container>



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
  max-width: 70%;
}
 .button {
    width: 150px;
    margin: 8px;
  }
</style>

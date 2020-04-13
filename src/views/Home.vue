<template>
<v-row class="mx-auto my-10">
   <div>
      <h1>Trivia Quizzy</h1>
      <p>Select your difficulty:</p>
      <div>
        <v-btn class="button" @click="easyMode" color="success" outlined x-large>easy</v-btn>
      </div>
      <div>
        <v-btn
        class="button"
          @click="mediumMode"
          color="warning"
          outlined
          x-large
          v-model="difficulty"
        >medium</v-btn>
      </div>
      <div>
        <v-btn
          class="button"
          @click="hardMode"
          color="error"
          outlined
          x-large
          v-model="difficulty"
        >hard</v-btn>
      </div>
      <v-btn class="button" @click="getQuestions" color="success" x-large>Start</v-btn>
   </div>
  </v-row>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      difficulty: "null",
      select: ["easy", "medium", "hard"],
      questions: []
    };
  },
  methods: {
    easyMode() {
      return (this.difficulty = this.select[0]);
    },
    mediumMode() {
      return (this.difficulty = this.select[1]);
    },
    hardMode() {
      return (this.difficulty = this.select[2]);
    },
    getQuestions() {
      this.$router.push(`/game/${this.difficulty}`)
    },
  }
};
</script>

<style scoped>
.button {
  width: 250px;
  margin: 10px 0px;
}
</style>
<template>
  <div class="home">
    <v-container id="cont">
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

      <v-btn class="start" @click="getQuestions" color="success" x-large block>Start</v-btn>
      {{ difficulty }}
      {{ questions }}
    </v-container>
  </div>
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

<style lang="scss" scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
.button {
  width: 250px;
  margin: 10px 0px;
}
.start {
  margin-top: 50%;
}
#cont {
  padding: 0px !important;
  margin: 0px !important;
}
h1 {
  margin-bottom: 25%;
}
</style>

<template>
<v-row id="inspire" >
 <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item three-line class="align">
      <v-list-item-conten>
        <h5 class="question mb-5">NEW QUESTION</h5>
        <v-list-item-subtitle class=" mb-5">{{question.category}}</v-list-item-subtitle>
        <v-list-item-title class="question">{{ question.question}}</v-list-item-title>
      </v-list-item-conten>
    </v-list-item>
    <v-card-text>
      <v-btn @click="accert(answer, idx)" class="answers" v-for="(answer, idx) in answers" :key="idx" text>{{answer}}</v-btn>
    </v-card-text>
  </v-card>
  {{correct}}
  {{incorrect}}
  {{question.correct_answer}}
</v-row>
</template>
<script>
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default {
  name: "Questions",
  data() {
    return {
      correct: 0,
      incorrect: 0
    };
  },
  props: {
    question: Object,
  },
  computed: {
    answers() {
      return shuffle(this.question.incorrect_answers.concat([this.question.correct_answer]))
    },
  },
  methods: {
    accert(answer) {
      if(this.question.correct_answer === answer) {
        this.correct++
        this.$emit('nextquestion')
      } else {
        this.incorrect++
        this.$emit('nextquestion')
    }
    }
}
};
</script>

<style scoped>
.question{
  font-size: 2em;
}
.answers {
  border: 2px dashed red;
  margin-left: 3%;
  margin-top: 1%;
}

</style>
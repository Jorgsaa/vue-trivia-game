<template>
<div>
    <h2>{{ question.question }}</h2>
</div>
<button @click="submitAnswer(choice1, question, answers)">{{ choice1 }}</button>
<button @click="submitAnswer(choice2, question, answers)">{{ choice2 }}</button>
<button @click="submitAnswer(choice3, question, answers)">{{ choice3 }}</button>
<button @click="submitAnswer(choice4, question, answers)">{{ choice4 }}</button>
</template>


<script setup>
defineProps({
  question: {
      type: Object,
      required: true,
  },
  answers: {
      type: Array,
      required: true,
  }
})

const choice1 = "Choice 1"
const choice2 = "Choice 2"
const choice3 = "Choice 3"
const choice4 = "Choice 4"

const randomizeChoices = () => {

    console.log("Coices randomized")
}

const emit = defineEmits(['next-question'])

const submitAnswer = (choice, question, answers) => {
    question.show_question = false
    answers.push({"question":question.question, "correct_answer":question.correct_answer, "answer":choice, "number":question.number})
    emit('next-question')
}
</script>


<style scoped>

</style>
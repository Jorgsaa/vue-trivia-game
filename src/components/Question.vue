<template>
<div>
    <h2>{{ question.question }}</h2>
</div>
<button @click="submitAnswer(choice1, question)">{{ choice1 }}</button>
<button @click="submitAnswer(choice2, question)">{{ choice2 }}</button>
<button @click="submitAnswer(choice3, question)">{{ choice3 }}</button>
<button @click="submitAnswer(choice4, question)">{{ choice4 }}</button>
</template>


<script setup>
defineProps({
  question: {
      type: Object,
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

const emit = defineEmits(['submit-answer'])

const submitAnswer = (choice, question) => {
    question.show_question = false
    
}
</script>


<style scoped>

</style>
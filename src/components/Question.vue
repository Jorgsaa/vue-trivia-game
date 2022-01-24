<template>
<div>
    <h2>{{ question.question }}</h2>
</div>
<button @click="nextQuestion(choice1)">{{ choice1 }}</button>
<button @click="nextQuestion(choice2)">{{ choice2 }}</button>
<button @click="nextQuestion(choice3)">{{ choice3 }}</button>
<button @click="nextQuestion(choice4)">{{ choice4 }}</button>
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
</script>


<style scoped>

</style>
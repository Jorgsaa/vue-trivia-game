<template>
<div>
    <h2>{{ question.question }}</h2>
    <p>Question: {{ question.number }}/{{numberOfQuestions}}</p>
</div>
<button @click="submitAnswer(choice1)">{{ choice1 }}</button>
<button @click="submitAnswer(choice2)">{{ choice2 }}</button>
<button @click="submitAnswer(choice3)" v-if="question.type === 'multiple'">{{ choice3 }}</button>
<button @click="submitAnswer(choice4)" v-if="question.type === 'multiple'">{{ choice4 }}</button>
</template>


<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
    numberOfQuestions: {
        type: Number,
        required: true,
    },
    question: {
        type: Object,
        required: true,
    },
    answers: {
        type: Array,
        required: true,
    }
})

onMounted(() => {
    if (props.question.type === "multiple") {
        randomizeChoices()
    }
})

const choice1 = ref("True")
const choice2 = ref("False")
const choice3 = ref("Choice 3")
const choice4 = ref("Choice 4")

// Randomize correct and wrong answers to belong to different choices
const randomizeChoices = () => {
    // Create array with all choices
    const choices = []
    choices.push(props.question.correct_answer)
    choices.push(props.question.incorrect_answers[0])
    choices.push(props.question.incorrect_answers[1])
    choices.push(props.question.incorrect_answers[2])

    // Randomize choices
    const randomizedChoices = shuffle(choices)

    choice1.value = randomizedChoices[0]
    choice2.value = randomizedChoices[1]
    choice3.value = randomizedChoices[2]
    choice4.value = randomizedChoices[3]
    
    console.log("Coices randomized")
}

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

const emit = defineEmits(['next-question'])
// Submit answer, hide current question, then go to next question
const submitAnswer = (choice) => {
    props.question.show_question = false
    props.answers.push({"question":props.question.question, "correct_answer":props.question.correct_answer, "answer":choice, "number":props.question.number})
    emit('next-question')
}
</script>


<style scoped>

</style>
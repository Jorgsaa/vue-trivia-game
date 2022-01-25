<template>
<div class="question-area">
    <h2 class="question-title">{{ question.question }}</h2>
    <p class="question-x-of-y">Question: {{ question.number }}/{{numberOfQuestions}}</p>
</div>
<div class="button-area">
    <button class="choice choice1" @click="submitAnswer(choice1)">{{ choice1 }}</button>
    <button class="choice choice2" @click="submitAnswer(choice2)">{{ choice2 }}</button>
    <button class="choice choice3" @click="submitAnswer(choice3)" v-if="question.type === 'multiple'">{{ choice3 }}</button>
    <button class="choice choice4" @click="submitAnswer(choice4)" v-if="question.type === 'multiple'">{{ choice4 }}</button>
</div>
</template>


<script setup>
import { onMounted, ref, computed } from "vue"
import { useStore } from 'vuex'

const props = defineProps({
    numberOfQuestions: {
        type: Number,
        required: true,
    },
    question: {
        type: Object,
        required: true,
    },
})

const store = useStore()
const answers = computed(() => store.state.answers)
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
    store.commit('submitAnswer', {"question":props.question.question, "correct_answer":props.question.correct_answer, "answer":choice, "number":props.question.number})
    props.question.show_question = false
    // Was thinking of moving the logic of goint to the next question here to remove emit, but it makes more sence to have it in Questions.vue (don't need to have a variable that holds questions in a file meant for one question)
    emit('next-question')
}


onMounted(() => {
    if (props.question.type === "multiple") {
        randomizeChoices()
    }
})
</script>


<style scoped>
.question-area {
    display: grid;
    grid-template-columns: 1fr;
}
.question-title {
    font-size: 35px
}
.question-x-of-y {
    grid-row: 1;
    font-size: 20px;
}
.button-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.choice {
    padding: 50px 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px
}
.choice1 {
    background: rgb(139, 162, 238);
}
.choice2 {
    background: rgb(249, 130, 130);
}
.choice3 {
    background: rgb(254, 254, 131);
}
.choice4 {
    background: rgb(130, 218, 130);
}
</style>
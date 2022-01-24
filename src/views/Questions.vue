<template>
    <h1>Question</h1>
    <!-- <p>{{ numberOfCurrentQuestion }}/{{ numberOfQuestions }}</p> -->
    <div v-for="question in questions" :key="question.question">
        <Question :question="question" :answers="answers" v-if="question.show_question" @next-question="nextQuestion" />
    </div>
    <button @click="debug">Debug</button>
</template>


<script setup>
import { ref, reactive } from "vue";
import Question from '../components/Question.vue'

const debug = () => {
    console.log(questions[1].show_question)
    questions[0].show_question = false
    questions[1].show_question = true
}

// Hardcoded questions
const questions = reactive([
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Which of the following movies was not based on a novel by Stephen King? ","correct_answer":"The Thing","incorrect_answers":["Carrie","Misery","The Green Mile"],"show_question":true,"number":"1"},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Who is the main protagonist in, the 1985 film, Back to the Future?","correct_answer":"Marty McFly","incorrect_answers":["Emmett &quot;Doc&quot; Brown","Biff Tannen","George McFly"],"show_question":false,"number":"2"},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?","correct_answer":"Kaltag, Nikki, and Star","incorrect_answers":["Dusty, Kirby, and Ralph","Nuk, Yak, and Sumac","Jenna, Sylvie, and Dixie"],"show_question":false,"number":"3"},
])
const answers = []

const numberOfQuestions = questions.length
const numberOfCurrentQuestion = ref(1)


const nextQuestion = () => {
    numberOfCurrentQuestion.value++
    questions[numberOfCurrentQuestion.value].show_question = true
    console.log(numberOfCurrentQuestion.value)
}

</script>

<template>
    <h1>Question</h1>
        <div>
            <p>{{ numberOfCurrentQuestion }}/{{ numberOfQuestions }}</p>
            <h2>{{ currentQuestion.question }}</h2>
        </div>
        <button @click="nextQuestion(choice1, $event)">{{ choice1 }}</button>
        <button @click="nextQuestion(choice2, $event)">{{ choice2 }}</button>
        <button @click="nextQuestion(choice3, $event)">{{ choice3 }}</button>
        <button @click="nextQuestion(choice4, $event)">{{ choice4 }}</button>
</template>


<script setup>
import { ref, onMounted, reactive } from "vue";

onMounted(() => {
    randomizeChoices()
})

// Hardcoded questions
const questions = [
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Which of the following movies was not based on a novel by Stephen King? ","correct_answer":"The Thing","incorrect_answers":["Carrie","Misery","The Green Mile"]},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Who is the main protagonist in, the 1985 film, Back to the Future?","correct_answer":"Marty McFly","incorrect_answers":["Emmett &quot;Doc&quot; Brown","Biff Tannen","George McFly"]},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?","correct_answer":"Kaltag, Nikki, and Star","incorrect_answers":["Dusty, Kirby, and Ralph","Nuk, Yak, and Sumac","Jenna, Sylvie, and Dixie"]}
]
const numberOfQuestions = questions.length;
const numberOfCurrentQuestion = ref(1)
const currentQuestion = reactive(questions[numberOfCurrentQuestion.value-1])

const choice1 = "Choice 1"
const choice2 = "Choice 2"
const choice3 = "Choice 3"
const choice4 = "Choice 4"


const getRandomChoice = () => {
    return "testchoice"
}

const nextQuestion = (choice, e) => {
    console.log(choice)
}

const randomizeChoices = () => {
    console.log("Coices randomized")
}


</script>

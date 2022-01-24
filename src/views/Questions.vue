<template>
    <h1>Question</h1>
    <div v-for="question in questions" :key="question.question">
        <Question :question="question" v-if="question.show_question"/>
    </div>
    <button @click="debug">Debug</button>
</template>


<script setup>
import { ref, onMounted, reactive } from "vue";
import Question from '../components/Question.vue'

const debug = () => {
    console.log(questions[1].show_question)
}

const che = () => {
    //question.question === questions[indexOfCurrentQuestion].question
    return false;
}

onMounted(() => {
    randomizeChoices()
})

// Hardcoded questions
const questions = reactive([
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Which of the following movies was not based on a novel by Stephen King? ","correct_answer":"The Thing","incorrect_answers":["Carrie","Misery","The Green Mile"],"show_question":true},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Who is the main protagonist in, the 1985 film, Back to the Future?","correct_answer":"Marty McFly","incorrect_answers":["Emmett &quot;Doc&quot; Brown","Biff Tannen","George McFly"],"show_question":false},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?","correct_answer":"Kaltag, Nikki, and Star","incorrect_answers":["Dusty, Kirby, and Ralph","Nuk, Yak, and Sumac","Jenna, Sylvie, and Dixie"],"show_question":false}
])
const numberOfQuestions = questions.length;
const numberOfCurrentQuestion = ref(1)
const indexOfCurrentQuestion = 0

const answers = [
    {"question":"hans?", "correct_answer":"flame", "answer":"water", "number":"1", "showQuestion":"false"},
    {"question":"hans?", "correct_answer":"flame", "answer":"water", "number":"2", "showQuestion":"true"},
    {"question":"hans?", "correct_answer":"flame", "answer":"water", "number":"3", "showQuestion":"false"}
]
/* const questions = []
for (let index = 0; index < questionsList.length; index++) {
    questions.push({
        questionData: questionsList[index],
        number: index+1,
        index: index
    })
    
} */

const choice1 = "Choice 1"
const choice2 = "Choice 2"
const choice3 = "Choice 3"
const choice4 = "Choice 4"


const getRandomChoice = () => {
    return "testchoice"
}

const nextQuestion = (choice, e) => {
    numberOfCurrentQuestion.value++
    console.log(numberOfCurrentQuestion.value)
    console.log(choice)
}

const randomizeChoices = () => {

    console.log("Coices randomized")
}


</script>

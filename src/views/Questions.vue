<template>
    <h1>Question</h1>
    <div v-for="question in questions" :key="question.question">
        <Question :question="question" :numberOfQuestions="questions.length" v-if="question.show_question" @next-question="nextQuestion" />
    </div>
</template>


<script setup>
import { ref, reactive, computed } from "vue";
import Question from '../components/Question.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter();


const questions = computed(() => store.state.questions)
// Hardcoded questions
/* const questions = reactive([
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Which of the following movies was not based on a novel by Stephen King? ","correct_answer":"The Thing","incorrect_answers":["Carrie","Misery","The Green Mile"],"show_question":true,"number":"1"},
    {"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The sky is blue","correct_answer":"True","incorrect_answers":["False"],"show_question":false,"number":"2"},
    {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?","correct_answer":"Kaltag, Nikki, and Star","incorrect_answers":["Dusty, Kirby, and Ralph","Nuk, Yak, and Sumac","Jenna, Sylvie, and Dixie"],"show_question":false,"number":"3"},
]) */
const indexOfCurrentQuestion = ref(0)

// Go to next question. If no more questions -> got to Result.vue
const nextQuestion = () => {
    indexOfCurrentQuestion.value++
    if (indexOfCurrentQuestion.value < questions.value.length) {
        questions.value[indexOfCurrentQuestion.value].show_question = true 
    } else {
        router.push({name: 'result'})
    }
}

</script>


<style scoped>
    
</style>
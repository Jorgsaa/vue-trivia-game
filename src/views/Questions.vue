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

// Go to next question. If no more questions -> got to Result.vue
const indexOfCurrentQuestion = ref(0)
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
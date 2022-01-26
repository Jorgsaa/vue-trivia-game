<template>
    <h1>Question</h1>
    <div v-for="question in questions" :key="question.question">
        <Question :question="question" v-if="question.show_question" />
    </div>
</template>


<script setup>
import { computed } from "vue";
import Question from '../components/Question.vue'
import { useStore } from 'vuex'

const store = useStore()
const questions = computed(() => store.state.questions)
</script>


<style scoped>
    
</style>
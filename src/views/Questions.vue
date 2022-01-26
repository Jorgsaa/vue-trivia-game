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
import { useRouter } from 'vue-router'


const store = useStore()
const router = useRouter();
const questions = computed(() => store.state.questions)

// Redirect user if he/she enters the site in a different place than the start-screen
if (!store.getters.getIsUserRegistered) {
    router.push({name: "start"})
}
</script>


<style scoped>
    
</style>
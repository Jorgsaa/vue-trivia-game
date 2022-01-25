<template>
    <li>
        Question: {{question.question}}, answer: {{answer.correct_answer}}
    </li>
</template>

<script setup>
import { onMounted, ref, computed } from "vue"
import { useStore } from 'vuex'

const props = defineProps({
    question: {
        type: Object,
        required: true,
    },
    answer: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
    li {
        background-color: violet;
        overflow: hidden;
    }
</style>
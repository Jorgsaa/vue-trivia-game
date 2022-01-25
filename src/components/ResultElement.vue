<template>
    <li>
        <p>Question: {{question.question}}, answer: {{answer.correctAnswer}}</p>
    </li>
</template>

<script>
import { ref } from "vue"

/*const props = defineProps({
    question: {
        type: Object,
        required: true,
    },
    answer: {
        type: Object,
        required: true,
    }
})*/
</script>

<style scoped>
    li {
        background-color: violet;
        height: 50px;
    }
</style>
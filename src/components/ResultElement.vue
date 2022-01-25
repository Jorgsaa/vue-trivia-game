<template>
    <li v-bind:class="correctAnswer ? 'correct-answer' : 'wrong-answer'">
        <p class="textfield question-number">{{questionIndex+1}}</p>
        <p class="textfield question">{{question.question}}</p>
        <p class="textfield user-answer">Your answer: {{answer.answer}}</p>
        <p class="textfield answer">Correct answer: {{answer.correct_answer}}</p>
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
    },
    questionIndex: {
        type: Number,
        required: true,
    }
})

const correctAnswer = computed(() => props.answer.correct_answer === props.answer.answer);
</script>

<style scoped>
    .correct-answer {
        background-color: green;
    }

    .wrong-answer {
        background-color: red;
    }

    .question-number {
        background-color: white;
        grid-column: 1;
        grid-row: 1 / 3;
    }

    .question {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
    }

    .user-answer {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    .answer {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
    }

    .textfield {
        background-color: white;
        border-radius: 5px;
        padding: 5px;
        text-align: center;
    }

    li {
        box-sizing: border-box;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 5px;
        padding: 5px;
    }


</style>
<template>
    <li v-bind:class="correctAnswer ? 'correct-answer' : 'wrong-answer'">
        <div class="left">
            <p class="textfield question-number">{{questionIndex+1}}</p>
        </div>
        <div class="right">
            <p class="textfield question">{{question.question}}</p>
            <p class="textfield user-answer">Your answer: {{answer.answer}}</p>
            <p class="textfield answer">Correct answer: {{answer.correct_answer}}</p>
        </div>
    </li>
</template>

<script setup>
import { computed } from "vue"

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

// Used in template to conditionally render background green/red for correct/wrong answer.
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
        margin: auto;
    }

    .right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 5px;
        padding: 5px;
        flex-grow: 1;
    }

    .left {
        width: 50px;
    }
    .question {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }

    .user-answer {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .answer {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
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

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
<template>
    <li v-bind:class="isCorrectAnswer ? 'correct-answer' : 'wrong-answer'">
        <div class="left">
            <p class="textfield question-number">{{questionIndex+1}}</p>
        </div>
        <div class="right">
            <p class="textfield question">{{question.question}}</p>
            <p class="textfield user-answer">Your answer: {{userAnswer}}</p>
            <p class="textfield answer">Correct answer: {{correctAnswer}}</p>
        </div>
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
    questionIndex: {
        type: Number,
        required: true,
    }
})

// Get user answer. if the user hasn't answered yet, then set user answer to semething like - or " "
const store = useStore()
const answers = computed(() => store.getters.getAnswers)
let userAnswer = ref(" ")
const correctAnswer = ref(" ")

// Check that the current question-number isn't larger than the number of submitted answers
if (props.question.number <= answers.value.length) {
    const currentAnswerIndex = props.question.number -1
    userAnswer.value = answers.value[currentAnswerIndex].answer
    correctAnswer.value = props.question.correct_answer
}

const isCorrectAnswer = computed(() => props.question.correct_answer === userAnswer.value);
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
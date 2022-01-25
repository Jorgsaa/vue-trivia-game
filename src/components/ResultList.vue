<template>
    <ol>
        <ResultElement v-for="(question, index) in questions" :key="index" :question="question" :answer="answers[index]" />
    </ol>
</template>

<script setup>
import { computed, reactive } from "vue";
import ResultElement from "./ResultElement.vue";
import { useStore } from "vuex";
const store = useStore();

const questions = computed(() => store.state.questions);
const answers = computed(() => store.state.answers);
</script>

<style scoped>
    ol {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        overflow: hidden;
        overflow-y: scroll;
        gap: 5px;

        background-color: yellowgreen;
    }
</style>
<template>
    <ol>
        <ResultElement v-for="(question, index) in questions" :key="index" :questionIndex="index" :question="question" />
    </ol>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ResultElement from "./ResultElement.vue";

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
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
<template>
    <section class="container">
        <h2>Results</h2>
        <p class="final-score">Final score: {{score}}/{{questions.length * 10}}</p>
        <ResultList  />
        <div class="buttons">
            <button @click="homeClicked">Home</button>
            <button @click="playAgainClicked">Play again</button>
        </div>
    </section>
</template>

<script setup>
import ResultList from '../components/ResultList.vue';
import { ref, reactive, computed } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'


const store = useStore();
const router = useRouter();
const answers = computed(() => store.state.answers);
const questions = computed(() => store.state.questions);

const scoreReducer = (acc, answer) => acc + (answer.answer === answer.correct_answer ? 10 : 0);
const score = computed(() => answers.value.reduce(scoreReducer, 0));

const homeClicked = () => {
    router.push({name: "start"});
    // Quiz is reset when user presses "start" button in the "start" route
};
const playAgainClicked = () => {
    router.push({name: "question"})
        .then(() => store.dispatch("resetQuiz"))
        .catch((error) => console.log("Error on playAgainClicked! Error: ", error));
}

// Redirect user if he/she enters the site in a different place than the start-screen
if (!store.getters.getIsUserRegistered) {
    router.push({name: "start"})
}
</script>

<style scoped>
    .container{
        box-sizing: content-box;
        width: 50vw;
        height: 50vh;
        background-color: gray;
        padding: 25px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

    h2, .final-score {
        text-align: center;
    }

    ol {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        overflow: hidden;
        overflow-y: scroll;
        gap: 5px;
    }

    li {
        height: 50px;
        background-color: violet;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .buttons > button {
        padding: 20px;
    }
</style>
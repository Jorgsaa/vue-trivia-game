<template>
    <section class="container">
        <h2>Results</h2>
        <p class="final-score">Final score: {{score.localScore}}/{{questions.length * 10}} - High score: {{ score.highScore }}</p>
        <ResultList  />
        <div class="buttons">
            <button @click="homeClicked">Home</button>
            <button @click="playAgainClicked">Play again</button>
        </div>
    </section>
</template>

<script setup>
import ResultList from '../components/ResultList.vue';
import { computed, reactive } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore();
const router = useRouter();
const questions = computed(() => store.state.questions);

let score = reactive({
    highScore: 0,
    localScore: store.getters.getLocalScore
})

const homeClicked = () => {
    router.push({name: "start"});
    // Quiz is reset when user presses "start" button in the "start" route
};
const playAgainClicked = () => {
    router.push({name: "question"})
        .then(() => store.dispatch("resetQuiz"))
        .catch((error) => console.log("Error on playAgainClicked! Error: ", error));
}

const fetchHighscore = store.dispatch("fetchHighscore")
    .then(highScore => Math.max(highScore, score.localScore))
    .then(max => score.highScore = max)
    
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
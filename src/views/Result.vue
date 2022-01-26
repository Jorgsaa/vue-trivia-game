<template>
    <section class="container">
        <div class="result-and-score">
            <h2>Results</h2>
            <p class="final-score">Final score: {{score.localScore}}/{{questions.length * 10}} - High score: {{ score.highScore }}</p>
        </div>
        <ResultList  />
        <div class="buttons">
            <button @click="homeClicked">Home</button>
            <button @click="playAgainClicked">Play again</button>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ResultList from '../components/ResultList.vue';

const store = useStore();
const router = useRouter();
const questions = computed(() => store.state.questions);

let score = reactive({
    highScore: 0,
    localScore: store.getters.getLocalScore
})

// Routes back to start page
const homeClicked = () => {
    router.push({name: "start"})
        .catch((error) => console.error("Error on homeClicked! Error: ", error));
};

// Resets the quiz by clearing answers 
// and fetching new questions with same options (difficulty, category, etc..)
const playAgainClicked = () => {
    router.push({name: "question"})
        .then(() => store.dispatch("resetQuiz"))
        .catch((error) => console.error("Error on playAgainClicked! Error: ", error));
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
        padding: 10px 25px 10px 25px;
        border-radius: 10px;
        
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        gap: 2.5%;
    }

    .result-and-score {
        text-align: center;
        font-size: 125%;
        padding: 0.5em;
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

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .buttons > button {
        padding: 20px;
    }
</style>
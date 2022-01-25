<script setup>
import { ref } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const store = useStore();
const router = useRouter();

const categories = {
  any: "Any Category",
  9: "General Knowledge",
  10: "Entertainment: Books",
  11: "Entertainment: Film",
  12: "Entertainment: Music",
  13: "Entertainment: Musicals &amp; Theatres",
  14: "Entertainment: Television",
  15: "Entertainment: Video Games",
  16: "Entertainment: Board Games",
  17: "Science &amp; Nature",
  18: "Science: Computers",
  19: "Science: Mathematics",
  20: "Mythology",
  21: "Sports",
  22: "Geography",
  23: "History",
  24: "Politics",
  25: "Art",
  26: "Celebrities",
  27: "Animals",
  28: "Vehicles",
  29: "Entertainment: Comics",
  30: "Science: Gadgets",
  31: "Entertainment: Japanese Anime &amp; Manga",
  32: "Entertainment: Cartoon &amp; Animations",
};

const difficulties = {
  any: "Any Difficulty",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const types = {
  any: "Any Type",
  multiple: "Multiple Choice",
  boolean: "True / False",
};

// Get default trivia options
const questionsSelected = ref(store.getters.getQuestionsSelected);
const categorySelected = ref(store.getters.getQuestionCategory);
const difficultySelected = ref(store.getters.getQuestionDifficulty);
const typeSelected = ref(store.getters.getQuestionType);



const startTrivia = () => {
  // Set trivia choices
  store.commit('setQuestionsSelected', questionsSelected);
  store.commit('setQuestionCategory', categorySelected);
  store.commit('setQuestionDifficulty', difficultySelected);
  store.commit('setQuestionType', typeSelected);

  // Create api-url
  const apiUrl = store.getters.getApiUrl;
  console.log(`Api url: ${apiUrl}`);

  // Fetch session token if there are none in store already
  store.dispatch("fetchApiSessionToken")

  // Fetch questions
  store.dispatch("resetQuiz");

  // Go to Questions.vue to start playing
  router.push({name: 'question'})
};
</script>

<template>
  <h2>TriviaOptions</h2>

  <input
    min="1"
    max="50"
    v-model="questionsSelected"
    placeholder="Number of questions"
    type="number"
  />
  <br />

  <select v-model="categorySelected">
    <option v-for="(category, key) in categories" :key="key" :value="key">
      {{ category }}
    </option>
  </select>
  <br />

  <select v-model="difficultySelected">
    <option v-for="(difficulty, key) in difficulties" :key="key" :value="key">
      {{ difficulty }}
    </option>
  </select>
  <br />

  <select v-model="typeSelected">
    <option v-for="(type, key) in types" :key="key" :value="key">
      {{ type }}
    </option>
  </select>
  <br />

  <!-- TODO: pass this url or these parameters to the Question view (?) -->
  {{
    (`https://opentdb.com/api.php?amount=${questionsSelected > 0 && questionsSelected <= 50 ? questionsSelected : 10}`) + 
  (categorySelected !== "any" ? `&category=${categorySelected}` : "") +
  (difficultySelected !== "any" ? `&difficulty=${difficultySelected}` : "") +
  (typeSelected !== "any" ? `&type=${typeSelected !== "any" ? typeSelected : null}` :  "")
  }}

  <br />

  <br />
  <button type="button" @click="startTrivia">Start</button>
</template>

<style scoped>
</style>
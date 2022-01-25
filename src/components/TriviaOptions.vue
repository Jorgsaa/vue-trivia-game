<script setup>
import { ref, computed } from "vue";
import { useStore } from 'vuex';

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
const store = useStore();
let questionsSelected = store.getters.getQuestionsSelected;
let categorySelected = store.getters.getQuestionCategory;
let difficultySelected = store.getters.getQuestionDifficulty;
let typeSelected = store.getters.getQuestionType;
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
  <button type="button">Start</button>
</template>

<style scoped>
</style>
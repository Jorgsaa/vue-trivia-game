<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const categories = {
  any: "Any Category",
  9: "General Knowledge",
  10: "Entertainment: Books",
  11: "Entertainment: Film",
  12: "Entertainment: Music",
  13: "Entertainment: Musicals & Theatres",
  14: "Entertainment: Television",
  15: "Entertainment: Video Games",
  16: "Entertainment: Board Games",
  17: "Science & Nature",
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
  31: "Entertainment: Japanese Anime & Manga",
  32: "Entertainment: Cartoon & Animations",
};

const difficulties = {
  //any: "Any Difficulty",
  easy: { name: "Easy", color: "green" },
  medium: { name: "Medium", color: "yellow" },
  hard: { name: "Hard", color: "red" },
};

const types = {
  any: "Any Type",
  multiple: "Multiple Choice",
  boolean: "True / False",
};

// Get default trivia options
const categorySelected = ref(store.getters.getQuestionCategory);

const startTrivia = () => {
  // Set trivia choices
  store.commit("setQuestionCategory", categorySelected);

  // Fetch session token if there are none in store already
  store.dispatch("fetchApiSessionToken");

  // Fetch questions
  store.dispatch("resetQuiz");

  // Go to Questions.vue to start playing
  router.push({ name: "question" });
};
</script>

<template>
  <div class="root">
    <h2>Trivia</h2>

    <div>
      <button
        v-for="(difficulty, key) in difficulties"
        :key="key"
        class="button"
        :style="'background-color: ' + difficulty.color"
        @click="store.commit('setQuestionDifficulty', key)"
      >
        {{ difficulty.name }}
      </button>
    </div>

    <div class="width-100">
      <button
        class="button"
        v-for="questions in [5, 10, 15, 20, 25]"
        :key="questions"
        @click="store.commit('setQuestionsSelected', questions)"
      >
        {{ questions }}
      </button>
    </div>
    
    <select class="input" v-model="categorySelected">
      <option v-for="(category, key) in categories" :key="key" :value="key">
        {{ category }}
      </option>
    </select>
    <br />

    <div class="width-100">
      <input class="input" type="text" placeholder="Username" />
      <button class="button" type="button" @click="startTrivia">Start</button>
    </div>
  </div>
</template>

<style scoped>
.root {
  background-color: #dedede;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}
.width-100 {
  width: 100%;
}
.button {
  padding: 10px;
  margin: 10px 0px;
  border: none;
}
.input {
  padding: 10px;
  margin: 10px 0px;
  width: 50%;
}
</style>
<script setup>

</script>

<template>
  <div class="vertical-layout">
    <header>
      <h1>Trivia</h1>
      Temporary route links:
      <router-link to="/">Start</router-link>
      <router-link to="/question">Question</router-link>
      <router-link to="/result">Result</router-link>
    </header>
    <main class="middle">
      <router-view />
    </main>
  </div>
</template>

<style>
  * {
    padding: 0px;
    margin: 0px;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

<style scoped>
  header {
    text-align: center;
    background-color: gray;
    height: 10%;
  }

  .vertical-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .middle {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
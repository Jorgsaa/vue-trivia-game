<template>
    <section class="container">
        <h2>Results</h2>
        <p>Final score: X/Y</p>
        <!--<ResultList />-->
        <ol>
            <li>Heisann0</li>
            <li>Heisann1</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
            <li>Heisann2</li>
        </ol>
        <div class="buttons">
            <button>Home</button>
            <button>Play again</button>
        </div>
    </section>
</template>

<script setup>

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

    h2 {
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

    .container > * {
        border-style: solid;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
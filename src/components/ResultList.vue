<template>
    <ol>
        <ResultElement />
    </ol>
</template>

<script>
    
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
    }
</style>
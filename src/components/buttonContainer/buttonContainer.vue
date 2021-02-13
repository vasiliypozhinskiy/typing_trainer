<template>
    <div class="container">
        <StartButton/>
    </div>
</template>

<script>
    import StartButton from "./StartButton/StartButton";

    export default {
        name: "buttonContainer",
        components: {StartButton}
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        margin: 5px auto;
    }
    >>>.button {
        margin: 5px;
        background-color: darkgray;
        border-radius: 5px;
        outline: none;
        transition-duration: 0.5s;
    }
    >>>.button:hover {
        background-color: gray;
    }
</style>

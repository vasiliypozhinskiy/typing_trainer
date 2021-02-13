<template>
    <div id="app">
        <TypingTrainerContainer/>
    </div>
</template>

<script>
    import TypingTrainerContainer from "./components/TypingTrainerContainer";

    export default {
        name: 'App',
        components: {
            TypingTrainerContainer,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

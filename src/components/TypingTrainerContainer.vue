<template>
    <div class="main">
        <div>
            <top-container/>
        </div>
        <div class="container">
            <TypingTrainer/>
            <SidePanel/>
        </div>
    </div>
</template>

<script>
    import TypingTrainer from "./TypingTrainer/TypingTrainer";
    import SidePanel from "./SidePanel/SidePanel";
    import topContainer from "./topContainer/topContainer";

    export default {
        name: "TypingTrainerContainer",
        components: {topContainer, SidePanel, TypingTrainer}
    }
</script>

<style scoped>
    .main {
        width: 80%;
        margin: 0 auto;
    }
    .container {
        display: flex;
        flex-direction: row;
    }
</style>

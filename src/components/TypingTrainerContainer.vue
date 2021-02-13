<template>
    <div class="main">
        <div class="container">
            <TypingTrainer/>
            <SidePanel/>
        </div>
        <div>
            <button-container/>
        </div>
    </div>
</template>

<script>
    import TypingTrainer from "./TypingTrainer/TypingTrainer";
    import SidePanel from "./SidePanel/SidePanel";
    import ButtonContainer from "./buttonContainer/buttonContainer";

    export default {
        name: "TypingTrainerContainer",
        components: {ButtonContainer, SidePanel, TypingTrainer}
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

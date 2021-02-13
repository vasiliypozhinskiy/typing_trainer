<template>
    <div class="container">
        <StartButton/>
        <SentencesInput/>
        <ChangeLanguage/>
        <ChangeTextButton/>
        <BlackModeButton/>
    </div>
</template>

<script>
    import StartButton from "./StartButton/StartButton";
    import ChangeTextButton from "./ChangeTextButton/ChangeTextButton";
    import SentencesInput from "./SentencesInput/SentencesInput";
    import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
    import BlackModeButton from "./BlackModeButton/BlackModeButton";

    export default {
        name: "topContainer",
        components: {BlackModeButton, ChangeLanguage, SentencesInput, ChangeTextButton, StartButton}
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
    }
    >>>.button {
        background-color: darkgray;
        border-radius: 5px;
        outline: none;
        transition-duration: 0.5s;
    }
    >>>.button:hover {
        background-color: gray;
    }

    >>>.bottomElement {
        margin: 5px;
    }
</style>

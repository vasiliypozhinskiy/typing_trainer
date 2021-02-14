<template>
    <div class="bottomElement">
        <input class="startButton" type="button" value="Старт" @click="Start">
    </div>
</template>

<script>

    const startSound = require("@/assets/gong.wav");

    export default {
        name: "StartButton",
        data: () => ({
            startSound
        }),
        methods: {
            Start: function () {
                this.$store.commit("RESET_TO_DEFAULTS")
                this.$store.commit("START_TIMER")
                this.$store.commit("CHANGE_FOCUS")
                let sound = new Audio(this.startSound)
                sound.play()
            }
        }
    }
</script>

<style scoped>
    .startButton {
        background-color: #E90000;
        border-radius: 5px;
        outline: none;
        transition-duration: 0.5s;
    }
    .startButton:hover {
        background-color: #A00000;
    }
</style>

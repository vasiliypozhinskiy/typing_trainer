<template>
    <div class="bottomElement">
        <input class="button" type="button" value="Старт" @click="Start">
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

</style>

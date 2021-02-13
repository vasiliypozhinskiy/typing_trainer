<template>
    <div class="bottomElement">
        <input class="button" type="button" value="Поменять текст" @click="GetText">
    </div>
</template>

<script>
    export default {
        name: "ChangeTextButton",
        methods: {
            GetText: function () {
                this.$store.commit("RESET_TO_DEFAULTS")
                if (this.$store.state.language === "russian") {
                    this.$store.dispatch("GET_RUSSIAN_TEXT")
                } else if (this.$store.state.language === "english") {
                    this.$store.dispatch("GET_ENGLISH_TEXT")
                }
            }
        }
    }
</script>

<style scoped>

</style>

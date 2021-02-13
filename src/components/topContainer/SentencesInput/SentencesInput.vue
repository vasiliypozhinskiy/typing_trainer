<template>
    <div class="bottomElement">
        <span>Количество предложений: </span>
        <input class="numberInput" type="number" v-model="numberOfSentences" min="1" max="10">
    </div>
</template>

<script>
    export default {
        name: "SentencesInput",
        computed: {
            numberOfSentences: {
                get() {
                    return this.$store.state.numberOfSentences
                },
                set(value) {
                    this.$store.commit("SET_NUMBER_OF_SENTENCES", value)
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 5px;
    }
    .numberInput {
        outline: none;
        border-radius: 5px;
    }
</style>

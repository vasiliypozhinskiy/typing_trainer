<template>
    <div class="bottomElement">
        <span>Количество предложений: </span>
        <input class="numberInput" type="number" v-model="numberOfSentences" min=1 max=10>
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
                    if (value >= 1 && value <= 10) {
                        this.$store.commit("SET_NUMBER_OF_SENTENCES", value)
                    }
                    if (value < 1) {
                        this.$store.commit("SET_NUMBER_OF_SENTENCES", 1)
                        this.$forceUpdate()
                    }
                    if (value > 10) {
                        this.$store.commit("SET_NUMBER_OF_SENTENCES", 10)
                        this.$forceUpdate()
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .numberInput {
        outline: none;
        border-radius: 5px;
        width: 3em;
    }
</style>

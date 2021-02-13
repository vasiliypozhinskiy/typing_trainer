<template>
    <div>
        <div class="textField" tabindex="0"
             ref="textField"
             @keypress="InputSymbol($event)"
             v-bind:class="{invalid: wrongInput}">
            <span class="inputtedText">{{text.slice(0, currentIndex)}}</span>
            <span class="currentSymbol" v-bind:class="{invalidSymbol: wrongInput}">{{text[currentIndex]}}</span>
            <span class="text">{{text.slice(currentIndex + 1)}}</span>
        </div>
    </div>
</template>

<script>
    import AccuracyCounter from "../SidePanel/AccuracyCounter/AccuracyCounter";

    const errorSound = require("@/assets/error.wav");

    export default {
        name: "TypingTrainer",
        components: {AccuracyCounter},
        data: () => ({
            errorSound
        }),
        computed: {
            text: function () {
                return this.$store.state.text
            },
            wrongInput: function () {
                return this.$store.state.wrongInput
            },
            currentIndex: function () {
                return this.$store.state.current_index
            },
            changeFocus: function () {
                return this.$store.state.focusFlag
            }
        },
        watch: {
            changeFocus: function () {
                this.$refs["textField"].focus()
            }
        },
        methods: {
            InputSymbol: function (e) {
                if (this.$store.state.startTime) {
                    if (e.key === this.$store.state.text[this.$store.state.current_index]) {
                        this.$store.commit("INPUT_RIGHT_SYMBOL")
                    } else {
                        this.$store.commit("INPUT_WRONG_SYMBOL")
                        let sound = new Audio(this.errorSound)
                        sound.play()
                    }
                }
            },
        },
    }
</script>

<style scoped>
    .textField {
        border-radius: 10px;
        border: 2px solid lime;
        outline: none;
        margin: 0 auto;
        padding: 5px;
        text-align: justify;
    }

    .invalid {
        border: 2px solid red;
    }

    .inputtedText {
        color: lime;
    }

    .currentSymbol {
        border: 2px solid black;
        border-radius: 5px;
        color: wheat;
        background-color: green;
    }

    .invalidSymbol {
        background-color: red;
        color: black;
    }
</style>

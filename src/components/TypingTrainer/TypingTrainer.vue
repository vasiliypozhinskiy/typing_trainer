<template>
    <div>
        <div class="textField" tabindex="0"
             ref="textField"
             @keypress="InputSymbol($event)"
             v-bind:class="{invalid: wrongInput}">
            <span class="inputtedText">{{text.slice(0, currentIndex)}}</span>
            <span v-bind:class="{invalidSymbol: wrongInput, currentSymbol: typingStarted}">{{text[currentIndex]}}</span>
            <span class="text">{{text.slice(currentIndex + 1)}}</span>
        </div>
    </div>
</template>

<script>
    import AccuracyCounter from "../SidePanel/AccuracyCounter/AccuracyCounter";

    const errorSound = require("@/assets/error.wav");
    const winSound = require("@/assets/win.wav")

    export default {
        name: "TypingTrainer",
        components: {AccuracyCounter},
        data: () => ({
            errorSound, winSound
        }),
        created() {
            this.$store.dispatch('GET_RUSSIAN_TEXT');
        },
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
            },
            typingStarted: function () {
                return this.$store.state.typingStarted
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
                        if (this.$store.state.text.length === this.$store.state.current_index) {
                            let sound = new Audio(this.winSound)
                            sound.play()
                            this.$store.commit("STOP_TIMER")
                        }
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

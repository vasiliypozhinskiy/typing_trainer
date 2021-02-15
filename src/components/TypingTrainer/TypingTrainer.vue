<template>
    <div class="container">
        <div class="textField" tabindex="0"
             ref="textField"
             @keypress="InputSymbol($event)"
             v-bind:class="{invalid: wrongInput, blackMode: BlackMode}">
            <span class="inputtedText" v-bind:class="{blackMode: BlackMode}">{{text.slice(0, currentIndex)}}</span>
            <span v-bind:class="{
                invalidSymbol: wrongInput,
                currentSymbol: typingStarted,
                blackMode: BlackMode}">{{text[currentIndex]}}</span>
            <span class="text" v-bind:class="{blackMode: BlackMode}">{{text.slice(currentIndex + 1)}}</span>
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
            },
            BlackMode: function () {
                return this.$store.state.blackMode
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
                            this.$store.dispatch("PLAY_SOUND", this.winSound)
                            this.$store.commit("STOP_TIMER")
                        }
                    } else {
                        this.$store.commit("INPUT_WRONG_SYMBOL")
                        this.$store.dispatch("PLAY_SOUND", this.errorSound)
                    }
                }
            },
        },
    }
</script>

<style scoped>
    .container {
        flex-grow: 1;
    }

    .textField {
        border-radius: 10px;
        border: 3px solid lime;
        outline: none;
        width: 100%;
        padding: 5px;
        text-align: justify;
    }

    .textField.blackMode {
        background-color: black;
        border: 3px solid green;
        color: white;
    }

    .invalid {
        border: 3px solid red;
    }
    .invalid.blackMode {
        border: 3px solid darkred;
    }

    .inputtedText {
        color: lime;
    }
    .inputtedText.blackMode {
        color: green;
    }

    .currentSymbol {
        border: 2px solid black;
        border-radius: 5px;
        color: wheat;
        background-color: green;
    }

    .currentSymbol.blackMode {
        border: 2px solid white;
        color: black;
        background-color: wheat;
    }

    .invalidSymbol {
        background-color: red;
        color: black;
    }

    .invalidSymbol.blackMode {
        background-color: darkred;
        color: black;
    }

    .text.blackMode {
        color: white;
    }
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        text: "",
        current_index: 0,
        mistakes: 0,
        attemptCount: 0,
        wrongInput: false,
        startTime: 0,
        focusFlag: true,
        numberOfSentences: 5,
        language: "russian",
        typingStarted: false,
        blackMode: false,
        volume: 1
    },
    mutations: {
        "INPUT_RIGHT_SYMBOL": state => {
            state.current_index++
            state.attemptCount++
            state.wrongInput = false
        },
        "INPUT_WRONG_SYMBOL": state => {
            state.mistakes++
            state.attemptCount++
            state.wrongInput = true
        },
        "START_TIMER": state => {
            state.startTime = Date.now()
            state.typingStarted = true
        },
        "STOP_TIMER": state => {
           state.typingStarted = false
        },
        "RESET_TO_DEFAULTS": state => {
            state.current_index = 0
            state.mistakes = 0
            state.attemptCount = 0
            state.wrongInput = false
            state.startTime = 0
            state.typingStarted = false
        },
        "CHANGE_FOCUS": state => {
            state.focusFlag = !state.focusFlag
        },
        "SAVE_TEXT": (state, text) => {
            state.text = text
        },
        "SET_NUMBER_OF_SENTENCES": (state, number) => {
            state.numberOfSentences = number
        },
        "CHANGE_LANGUAGE": (state, language) => {
            state.language = language
        },
        "CHANGE_STYLE": state => {
            state.blackMode = !state.blackMode
        },
        "CHANGE_VOLUME": (state, volume) => {
            state.volume = volume
        }
    },
    getters: {
        countAccuracy: state => {
            return (state.attemptCount) ?
                Math.round((100 - state.mistakes / state.attemptCount * 100) * 100) / 100 : 100
        }
    },
    actions: {
        "GET_RUSSIAN_TEXT": ({commit, state}) => {
            axios.get("https://fish-text.ru/get", {params: {number: state.numberOfSentences}})
                .then(response => {
                    commit("SAVE_TEXT", response.data.text)
                })
        },
        "GET_ENGLISH_TEXT": ({commit, state}) => {
            axios.get("http://metaphorpsum.com/sentences/" + state.numberOfSentences)
                .then(response => {
                    commit("SAVE_TEXT", response.data)
                })
        },
        "PLAY_SOUND": ({state}, sound) => {
            let audio = new Audio(sound)
            audio.volume = state.volume
            audio.play()
        }
    }
})

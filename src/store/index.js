import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        text: "Shankle chuck ut, cupidatat deserunt flank andouille bresaola burgdoggen lorem shoulder consequat jerky.  Dolor voluptate pork belly qui beef laboris.  Doner aliqua brisket irure sausage frankfurter, in leberkas tongue.  Nulla id anim prosciutto, fatback mollit pastrami bacon doner flank pancetta strip steak sirloin turkey.  Ut dolore t-bone magna buffalo, leberkas pork loin boudin strip steak fatback mollit cow veniam laboris. Buffalo ullamco doner nulla sirloin adipisicing eiusmod id tenderloin et.  Capicola lorem ut pork shankle in short ribs ut labore tenderloin non andouille prosciutto culpa eu.  Consequat picanha et chislic cupidatat boudin turducken ullamco nulla.  Cow sed laboris consequat anim, turkey hamburger enim beef ribs sirloin irure reprehenderit. Strip steak pork chop ex turkey swine dolore brisket.  Elit pork chop nulla, eu tenderloin meatball proident reprehenderit tri-tip dolore turducken sirloin biltong burgdoggen nostrud.  Kevin ad qui tongue, short loin prosciutto salami chislic.  Lorem rump pork chop, pork dolore ham occaecat alcatra.  Corned beef swine leberkas sirloin in burgdoggen. Deserunt chicken aute labore sirloin pastrami anim.  Frankfurter kielbasa cillum porchetta id qui.  Irure beef anim rump sunt, short loin in ground round meatball eu turducken.  Biltong turducken ground round duis, sed pork loin pork belly ham hock buffalo velit meatball.  Proident bacon cupidatat, pork loin chislic prosciutto duis jowl shankle in minim flank landjaeger pastrami qui.  Aliquip short ribs pancetta filet mignon beef ribs consequat leberkas tenderloin salami hamburger. Minim sirloin boudin short loin pancetta ribeye.  Dolor exercitation occaecat mollit beef ribs, shoulder reprehenderit ut jowl salami filet mignon.  Landjaeger consectetur duis est, ad culpa drumstick prosciutto short loin.  Shank chicken esse, consectetur shankle ut ut prosciutto.",
        current_index: 0,
        mistakes: 0,
        attemptCount: 0,
        wrongInput: false,
        startTime: 0,
        focusFlag: true
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
        },
        "RESET_TO_DEFAULTS": state => {
            state.current_index = 0
            state.mistakes = 0
            state.attemptCount = 0
            state.wrongInput = false
        },
        "CHANGE_FOCUS": state => {
            state.focusFlag = !state.focusFlag
        }
    },
    getters: {
        countAccuracy: state => {
            return (state.attemptCount) ?
                Math.round((100 - state.mistakes / state.attemptCount * 100) * 100) / 100 : 100
        }
    },
    actions: {},
    modules: {}
})

/**
 * Dependencies
 * @ignore
 */
import { createStore } from 'vuex'

/**
 * Store
 * @ignore
 */
const store = createStore({
    state: {
        questions: [
            {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Which of the following movies was not based on a novel by Stephen King? ","correct_answer":"The Thing","incorrect_answers":["Carrie","Misery","The Green Mile"],"show_question":true,"number":"1"},
            {"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The sky is blue","correct_answer":"True","incorrect_answers":["False"],"show_question":false,"number":"2"},
            {"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?","correct_answer":"Kaltag, Nikki, and Star","incorrect_answers":["Dusty, Kirby, and Ralph","Nuk, Yak, and Sumac","Jenna, Sylvie, and Dixie"],"show_question":false,"number":"3"},
        ],
        answers: [],
    },
    mutations: {
        addQuestion: (state, payload) => {
            state.questions.push(payload)
        },
        deleteQuestion: (state, payload) => {
            const index = state.questions.indexOf(payload)
            state.questions.splice(index, 1)
        },
        emptyQuestions: (state) => {
            state.questions.length = 0
        },
        submitAnswer: (state, payload) => {
            state.answers.push(payload)
        },
        deleteAnswer: (state, payload) => {
            const index = state.answers.indexOf(payload)
            state.answers.splice(index, 1)
        },
        emptyAnswers: (state) => {
            state.answers.length = 0
        },
    },
})

/**
 * Exports
 * @ignore
 */
export default store
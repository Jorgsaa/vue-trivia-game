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
        questionsSelected: 10,
        questionDifficulty: 'any',
        questionType: 'any',
        questionCategory: 'any',
        apiUrlPath: "https://opentdb.com/api.php",
        apiSessionToken: '',
        questions: [],
        indexOfCurrentQuestion: 0,
        numberOfQuestions: 0,
        answers: [],
    },
    mutations: {
        setQuestionsSelected: (state, payload) => {
            state.questionsSelected = payload
        },
        setQuestionDifficulty: (state, payload) => {
            state.questionDifficulty = payload
        },
        setQuestionType: (state, payload) => {
            state.questionType = payload
        },
        setQuestionCategory: (state, payload) => {
            state.questionCategory = payload
        },
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        setIndexOfCurrentQuestion: (state, payload) => {
            state.indexOfCurrentQuestion = payload;
        },
        setNumberOfQuestions: (state) => {
            console.log(state.questions.length)
            state.numberOfQuestions = state.questions.length;
        },
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
        setApiSessionToken: (state, payload) => {
            state.apiSessionToken = payload;
        },
        increaseIndexOfCurrentQuestion: (state) => {
            state.indexOfCurrentQuestion++
        }
    },
    getters: {
        getQuestionsSelected: (state) => {
            return state.questionsSelected
        },
        getQuestionDifficulty: (state) => {
            return state.questionDifficulty
        },
        getQuestionType: (state) => {
            return state.questionType
        },
        getQuestionCategory: (state) => {
            return state.questionCategory
        },
        getApiUrl: (state) => {
            return state.apiUrlPath +
            `?` +
            `&amount=${state.questionsSelected}` +
            (state.questionCategory !== `any` ? `&category=${state.questionCategory}` : ``) +
            (state.questionDifficulty !== `any` ? `&difficulty=${state.questionDifficulty}` : ``) +
            (state.questionType !== `any` ? `&type=${state.questionType}` : ``) +
            (state.apiSessionToken.length != 0 ? `&token=${state.apiSessionToken}` : ``)
        },
        getApiSessionToken: (state) => {
            return state.apiSessionToken;
        },
        getNumberOfQuestions: (state) => {
            return state.numberOfQuestions
        },
        getIndexOfCurrentQuestion: (state) => {
            return state.indexOfCurrentQuestion
        }
    },
    actions: {
        fetchApiSessionToken (context) {
            if(context.getters.getApiSessionToken.length === 0) {
                return fetch("https://opentdb.com/api_token.php?command=request")
                .then((response) => response.json())
                .then((data) => {
                    context.commit("setApiSessionToken", data.token);
                })
                .catch((error) => console.log("Failed to fetch api session token! Error: " + error));
            }
        },
        fetchQuestions (context) {
            return fetch(context.getters.getApiUrl)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((question, index) => {
                        if(index === 0) {
                            question["show_question"] = true;
                            question["number"] = (index+1).toString();
                        } else {
                            question["show_question"] = false;
                            question["number"] = (index+1).toString();
                        }
                    });
                    context.commit("setQuestions", data.results);
                })
                .catch((error) => console.log("Failed to fetch questions! Error: " + error))
        },
        resetQuiz(context) {
            context.commit("emptyAnswers");
            context.dispatch("fetchQuestions");
            context.commit("setIndexOfCurrentQuestion", 0)
        }
    }
})

/**
 * Exports
 * @ignore
 */
export default store
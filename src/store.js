/**
 * Dependencies
 * @ignore
 */
import { createStore } from 'vuex'

// Parses unicode
function parseUnicode(inputString) {
    var doc = new DOMParser().parseFromString(inputString, "text/html");
    return doc.documentElement.textContent;
}

/**
 * Store
 * @ignore
 */
const store = createStore({
    state: {
        username: "",
        questionsSelected: 10,
        questionDifficulty: 'any',
        questionType: 'any',
        questionCategory: 'any',
        apiUrlPath: "https://opentdb.com/api.php",
        triviaURL: "https://jorgsaa-noroff-assignment-api.herokuapp.com/trivia",
        triviaToken: "uEzYwhrkm0OmaPQRfHSqz2OsKL8nsxK3AiqVkJkPjCv2lbiLnDyDkzOCGMm1A1gG",
        apiSessionToken: '',
        questions: [],
        indexOfCurrentQuestion: 0,
        numberOfQuestions: 0,
        answers: [],
    },
    mutations: {
        setUsername: (state, payload) => {
            state.username = payload
        },
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
        },
        showCurrentQuestion: (state) => {
            store.state.questions[state.indexOfCurrentQuestion].show_question = true 
        },
        hideCurrentQuestion: (state) => {
            store.state.questions[state.indexOfCurrentQuestion].show_question = false 
        },
    },
    getters: {
        getUsername: (state) => {
            return state.username
        },
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
        getTriviaURL: (state) => {
            return state.triviaURL
        },
        getTriviaToken: (state) => {
            return state.triviaToken
        },
        getApiSessionToken: (state) => {
            return state.apiSessionToken;
        },
        getNumberOfQuestions: (state) => {
            return state.numberOfQuestions
        },
        getIndexOfCurrentQuestion: (state) => {
            return state.indexOfCurrentQuestion
        },
        getLocalScore: (state) => {
            const scoreReducer = (acc, answer) => acc + (answer.answer === answer.correct_answer ? 10 : 0);
            return state.answers.reduce(scoreReducer, 0)
        },
        getIsUserRegistered: (state) => {
            return state.username !== ""
        },
        getAnswers: (state) => {
            return state.answers
        },
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

                    data.results.forEach((element) => {
                        element.question = parseUnicode(element.question);
                        element.correct_answer = parseUnicode(element.correct_answer);

                        element.incorrect_answers.map((incorrectAnswer) => {
                            return parseUnicode(incorrectAnswer);
                        });
                    })
                    context.commit("setQuestions", data.results);
                })
                .catch((error) => console.log("Failed to fetch questions! Error: " + error))
        },
        resetQuiz(context) {
            context.commit("emptyAnswers");
            context.dispatch("fetchQuestions");
            context.commit("setIndexOfCurrentQuestion", 0)
        },
        fetchUsers(context) {
            return fetch(`${store.getters.getTriviaURL}?username=${store.getters.getUsername}`)
            .then(response => response.json())
        },
        usernameExists(context) {
            return store.dispatch("fetchUsers").then(json => json.length !== 0)
        },
        fetchHighscore(context) {
            return store.dispatch("fetchUsers").then(users => users[0]).then(user => user.highScore)
        },
        submitScore(context) {
            store.dispatch("usernameExists").then((userExists) => {
                if (userExists) {
                    store.dispatch("fetchUsers").then((users) => {
                        const user = users[0]

                        // Dont submit the score if it's lower than the current one
                        if (user.highScore > context.getters.getLocalScore)
                            return

                        return fetch(`${store.getters.getTriviaURL}/${user.id}`, {
                            method: "PATCH",
                            headers: {
                                'X-API-Key': context.getters.getTriviaToken,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                highScore: context.getters.getLocalScore
                            })
                        })
                            .catch((error) => console.log("Failed to update score! Error: " + error))
                    })
                } else {
                    return fetch(store.getters.getTriviaURL, {
                        method: "POST",
                        headers: {
                            'X-API-Key': context.getters.getTriviaToken,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: context.getters.getUsername,
                            // TODO: Compute score
                            highScore: context.getters.getLocalScore
                        })
                    })
                        .catch((error) => console.log("Failed to submit score! Error: " + error))
                }
            }
            )
        }
    }
})

/**
 * Exports
 * @ignore
 */
export default store
import * as APIUtil from '../util/quiz_api_util';

export const RECEIVE_QUIZ_RESULTS = "RECEIVE_QUIZ_RESULTS"

export const receiveQuizResults = quizResults => ({
    type: RECEIVE_QUIZ_RESULTS,
    quizResults
});

export const postQuiz = quizResults => dispatch => (
    APIUtil.postQuiz(quizResults).then(res => {
        dispatch(receiveQuizResults(quizResults))
    })
)
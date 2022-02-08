import { RECEIVE_QUIZ_RESULTS } from "../../actions/quiz_actions";

const _nullErrors = [];

const QuizReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUIZ_RESULTS:
      return action.quizResults;
    default:
      return state;
  }
};

export default QuizReducer;
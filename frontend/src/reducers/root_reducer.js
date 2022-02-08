import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer"
import quiz from "./secondary/quiz_reducer"

const RootReducer = combineReducers({
  session,
  errors,
  quiz
});

export default RootReducer;
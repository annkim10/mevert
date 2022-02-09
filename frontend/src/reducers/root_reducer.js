import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer"
import quiz from "./secondary/quiz_reducer"
import modal from "./secondary/modal_reducer"
import activities from "./activity_reducer"
import review from "./review_reducer"
import calendar from './secondary/calendar_reducer'


const RootReducer = combineReducers({
  session,
  errors,
  quiz,
  modal,
  activities,
  review,
  calendar
});

export default RootReducer;
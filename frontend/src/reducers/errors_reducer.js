import { combineReducers } from 'redux';

import SessionErrorsReducer from "./secondary/session_errors_reducer"
import ReviewErrorsReducer from './secondary/review_error_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  review: ReviewErrorsReducer
});


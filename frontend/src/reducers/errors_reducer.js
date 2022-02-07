import { combineReducers } from 'redux';

import SessionErrorsReducer from "./secondary/session_errors_reducer"

export default combineReducers({
  session: SessionErrorsReducer
});


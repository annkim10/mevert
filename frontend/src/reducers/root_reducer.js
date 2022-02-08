import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer"
import activities from "./activity_reducer"

const RootReducer = combineReducers({
  session,
  errors,
  activities
});

export default RootReducer;
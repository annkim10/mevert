import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer"
<<<<<<< HEAD
import quiz from "./secondary/quiz_reducer"
import modal from "./secondary/modal_reducer"
=======
import activities from "./activity_reducer"
>>>>>>> main

const RootReducer = combineReducers({
  session,
  errors,
<<<<<<< HEAD
  quiz,
  modal
=======
  activities
>>>>>>> main
});

export default RootReducer;
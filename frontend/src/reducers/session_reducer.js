import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN, ADD_USER_ACTIVITY, UPDATE_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER:
      debugger
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case UPDATE_USER:
      debugger
      const nState = Object.assign({}, state)
      nState.user.activities = action.user
      return nState
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    case ADD_USER_ACTIVITY:
      const nextState = Object.assign({}, state)
      let activities = nextState.user.activities
      activities.push(action.userActivities)
      return nextState;
    default:
      return state;
  }
}
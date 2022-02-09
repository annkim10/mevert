import { RECEIVE_EVENTS, RECEIVE_USER_EVENTS, RECEIVE_NEW_EVENT } from '../../actions/calendar_action';
  
  const CalendarReducer = (state = { all: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    // newState.user = []

    switch(action.type) {
      case RECEIVE_EVENTS:
        newState.all = action.events.data
        // newState.all = []
        // newState.all.push(action.events.data);
        return newState;
        // return action.events.data
        // return action.events;
      case RECEIVE_USER_EVENTS:
        // newState.user = []
        newState.user.push(action.events.data);
        return newState;
      case RECEIVE_NEW_EVENT:
        // newState.new = action.event.data
        // newState.new = []
        // newState.user.push(action.event.data)
        newState.all.push(action.event.data);
        return newState;
        // newState[action.new] = action.event.data
        // return newState;
      default:
        return state;
    }
  };
  
  export default CalendarReducer;
import { RECEIVE_EVENTS, RECEIVE_USER_EVENTS, RECEIVE_NEW_EVENT, REMOVE_EVENT } from '../../actions/calendar_action';
  
  const CalendarReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_EVENTS:
        let events = action.events.data
        events.map(e => newState[e._id] = e)
        return newState
      case RECEIVE_NEW_EVENT:
        newState[action.event.data._id] = action.event.data
        return newState
      case REMOVE_EVENT:
        delete newState[action.eventId]
        return newState
      default:
        return state;
    }
  };
  
  export default CalendarReducer;
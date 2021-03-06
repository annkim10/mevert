import * as CalendarApiUtil from '../util/calendar_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";


export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveUserEvents = events => ({
  type: RECEIVE_USER_EVENTS,
  events
});

export const receiveNewEvent = event => ({
  type: RECEIVE_NEW_EVENT,
  event
})

export const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
})

export const fetchEvents = () => dispatch => (
    CalendarApiUtil.getEvents()
    .then(events => dispatch(receiveEvents(events)))
    .catch(err => console.log(err))
);

export const getUserEvents = id => dispatch => (
    CalendarApiUtil.getUserEvents(id)
    .then(events => dispatch(receiveUserEvents(events)))
    .catch(err => console.log(err))
);

export const createEvent = event => dispatch => {
    return CalendarApiUtil.createEvent(event)
    .then(event => dispatch(receiveNewEvent(event)))
    .catch(err => console.log(err))
};

export const updateEvent = event => dispatch => (
  CalendarApiUtil.updateEvent(event)
  .then(event => dispatch(receiveNewEvent(event)))
);

export const deleteEvent = eventId => dispatch => {
  return CalendarApiUtil.deleteEvent(eventId)
  .then( () => dispatch(removeEvent(eventId)))

};
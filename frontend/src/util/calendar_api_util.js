import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/calendar/events')
};

export const getUserEvents = id => {
  return axios.get(`/api/calendar/user/${id}`)
};

export const createEvent = data => {
  // debugger
  return axios.post('/api/calendar/createEvent', data)
}

export const updateEvent = event => {
  // debugger
  return axios.patch(`/api/calendar/update/${event._id}`, event)
}

export const deleteEvent = eventId => {
  // debugger
  return axios.delete(`/api/calendar/${eventId}`)
}
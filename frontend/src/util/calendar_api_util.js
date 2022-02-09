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
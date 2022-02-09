import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/calendar')
};

export const getUserEvents = id => {
  return axios.get(`/api/calendar/user/${id}`)
};

export const createEvent = data => {
  return axios.post('/api/calendar/', data)
}
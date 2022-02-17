import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const postUserActivity = (userId, activityData) => {
   return axios.post(`/api/users/${userId}/activities`, activityData)
};

export const deleteUserActivity = (userId, activityId) => {
  return axios.delete(`/api/users/${userId}/activities/${activityId}`)
}

export const fetchUserActivities = userId => {
  return axios.get(`/api/users/${userId}/activities`, userId)
}
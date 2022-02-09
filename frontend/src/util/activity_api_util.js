import axios from 'axios';

export const getActivities = () => {
    return axios.get('/api/activities')
}

export const getActivity = id => {
    return axios.get(`/api/activities/${id}`)
}

export const updateActivity = activity => {
    return axios.patch(`api/activities/${activity.id}`, activity)
}
import axios from 'axios';

export const createReview = review => {
    return axios.post(`/api/reviews/`, review)
}

export const editReview = review => {
    return axios.patch(`/api/reviews/${review.id}`, review)
}

export const fetchReviews = () => {
    return axios.get(`/api/reviews/`)
}

export const fetchReview = id => {
    return axios.get(`/api/reviews/${id}`)
}

export const deleteReview = id => {
    return axios.delete(`/api/reviews/${id}`)
}




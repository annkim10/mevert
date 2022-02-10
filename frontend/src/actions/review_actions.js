import {createReview, editReview, fetchReviews, fetchReview, deleteReview} from "../util/review_api_util"

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const removeReview = id => ({
    type: REMOVE_REVIEW,
    id
})

export const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});



export const newReview = review => dispatch => (
    createReview(review)
    .then((review => dispatch(receiveReview(review))),
    err => (
        dispatch(receiveErrors(err.response.data))
    ))
)

export const updateReview = review => dispatch => (
    editReview(review)
    .then((review => dispatch(receiveReview(review))),
    err => (
        dispatch(receiveErrors(err.response.data))
    ))
)

export const getReviews = () => dispatch => (
    fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const getReview = (id) => dispatch => (
    fetchReview(id)
    .then(review => dispatch(receiveReview(review)))
)

export const removereview = id => dispatch => (
    deleteReview(id)
    .then(() => dispatch(removeReview(id)))
)
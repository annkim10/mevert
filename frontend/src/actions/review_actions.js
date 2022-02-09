import {createReview} from "../util/review_api_util"

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
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
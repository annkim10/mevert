import {RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW} from "../actions/review_actions"

const ReviewReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.data._id] = action.review.data 
            return nextState
        case RECEIVE_REVIEWS:
            let obj = {}
            action.reviews.data.forEach(review => {
                obj[review._id] = review 
            })
            return obj 
        case REMOVE_REVIEW:
            delete nextState[action.id]
            return nextState 
        default:
            return state 
    }
}

export default ReviewReducer
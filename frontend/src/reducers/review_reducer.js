import {RECEIVE_REVIEW} from "../actions/review_actions"

const ReviewReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.data._id] = action.review.data 
            return nextState
        default:
            return state 
    }
}

export default ReviewReducer
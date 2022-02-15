import {RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY} from "../actions/activity_action"

const ActivityReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            // action.activities.data.map(activity => (
            //     nextState[activity._id] = activity
            // ))
            // return nextState;
            return action.activities.data
        case RECEIVE_ACTIVITY:
            nextState[action.activity.data._id] = action.activity.data 
            return nextState 
        default: 
            return state 
    }
}

export default ActivityReducer
import {ADD_USER_ACTIVITY, FETCH_USER_ACTIVITIES } from '../../actions/session_actions';

const UserActivitiesReducer = (state=[], action) => {
    Object.freeze(state)
    const nextState = Object.assign([], state)
    switch(action.type) {
    case ADD_USER_ACTIVITY:
        return action.userActivities.data;
    case FETCH_USER_ACTIVITIES: 
        return action.userActivities
    default:
        return state;
    }
}

export default UserActivitiesReducer
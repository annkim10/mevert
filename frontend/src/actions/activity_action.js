import {getActivities, getActivity} from "../util/activity_api_util"

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES"
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY"


const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
})

const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
})



//THUNK 

export const fetchActivities = () => dispatch => (
    getActivities()
    .then(activities => dispatch(receiveActivities(activities)))
)

export const fetchActivity = id => dispatch => (
    getActivity(id)
    .then(activity => dispatch(receiveActivity(activity)))
)


import {getActivities, getActivity, updateActivity, deleteActivity} from "../util/activity_api_util"

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES"
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY"
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY"

const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
})

const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
})

const removeActivity = id => ({
    type: REMOVE_ACTIVITY,
    id
})

export const fetchActivities = () => dispatch => (
    getActivities()
    .then(activities => dispatch(receiveActivities(activities)))
)

export const fetchActivity = id => dispatch => (
    getActivity(id)
    .then(activity => dispatch(receiveActivity(activity)))
)

export const updateactivity = activity => dispatch => (
    updateActivity(activity)
    .then(activity => dispatch(receiveActivity(activity)))
)


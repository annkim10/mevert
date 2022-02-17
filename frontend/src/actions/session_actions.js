import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

// Thunks

export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const login = user => dispatch => {
    return(
        APIUtil.login(user).then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
        })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
    )
}

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

//ACTIVITIES
export const ADD_USER_ACTIVITY = "ADD_USER_ACTIVITY"

const addUserActivity = userActivities => {
    debugger
    return ( {
        type: ADD_USER_ACTIVITY,
        userActivities
    })
}



export const postUserActivity = (userId, activityData) => dispatch => {
    debugger
    return APIUtil.postUserActivity(userId, activityData).then(res => {
        dispatch(addUserActivity(res))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
}

export const FETCH_USER_ACTIVITIES = "FETCH_USER_ACTIVITIES"

const fetchUserActivities = userActivities => ({
    type: FETCH_USER_ACTIVITIES,
    userActivities
})

export const getUserActivities = userId => dispatch => {
    return APIUtil.fetchUserActivities(userId).then(res => {
        dispatch(fetchUserActivities(res.data))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
}

export const REMOVE_USER_ACTIVITY = "REMOVE_USER_ACTIVITY"

const removeUserActivity = userActivities => {
    debugger
    return ( {
        type: REMOVE_USER_ACTIVITY,
        userActivities
    })
  
}

export const deleteActivity = (userId, activityId) => dispatch => {
    debugger
    return (
        APIUtil.deleteUserActivity(userId, activityId)
        .then(res => dispatch(removeUserActivity(res.data)))
    )
}


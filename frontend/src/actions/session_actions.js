import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => {
    debugger
    return {
    type: RECEIVE_CURRENT_USER,
    currentUser
    }
}

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

// Thunks

export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
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

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

//ACTIVITIES
export const ADD_USER_ACTIVITY = "ADD_USER_ACTIVITY"
export const UPDATE_USER = "UPDATE_USER"

const addUserActivity = userActivities => ({
    type: ADD_USER_ACTIVITY,
    userActivities
})

export const postUserActivity = (userId, activityData) => dispatch => {
    return APIUtil.postUserActivity(userId, activityData).then(res => {
        dispatch(addUserActivity(res.data.activities[res.data.activities.length -1]))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
}

const updatethisuser = user => {
    debugger
    return {
    type: UPDATE_USER,
    user
    }
}

// export const deleteActivity = (userId,activityId) => dispatch => {
//     debugger
//     return (
//     APIUtil.deleteUserActivity(userId, activityId)
//     .then(user => dispatch(updatethisuser(user.data.activities)))
//     )
// }

export const deleteActivity = (userId,activityId) => dispatch => {
    debugger
    return (
    APIUtil.deleteUserActivity(userId, activityId)
    .then(user => dispatch(receiveCurrentUser(user.data)))
    )
}

import {connect} from "react-redux"
import { fetchActivity } from "../../actions/activity_action"
import { postUserActivity, getUserActivities } from "../../actions/session_actions"
import ActivityShow from "./activity_show"
import {getReviews} from "../../actions/review_actions.js"


const mapStateToProps = (state, ownProps) => ({
    activity: Object.values(state.activities).filter(activitiy => activitiy._id === ownProps.match.params.activityId)[0],
    currentUser: state.session.user,
    reviews: Object.values(state.review),
    currentactivity: ownProps.match.params.activityId
})

const mapDispatchToProps = dispatch => ({
    getactivity: id => dispatch(fetchActivity(id)),
    postUserActivity: (userId, activityId) => dispatch(postUserActivity(userId, activityId)),
    allreviews: () => dispatch(getReviews()),
    getUserActivities: userId => dispatch(getUserActivities(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)



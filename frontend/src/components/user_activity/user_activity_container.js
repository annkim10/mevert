import {connect} from "react-redux"
import UserActivity from "./user_activity"
import { fetchActivities } from "../../actions/activity_action"
import { getUserActivities } from "../../actions/session_actions"
import { getReviews, removereview} from "../../actions/review_actions"
import {fetchEvents} from "../../actions/calendar_action.js"

const mapStateToProps = state => ({
    activities: state.activities,
    userActivities: state.userActivities,
    user: state.session.user,
    reviews: Object.values(state.review),
    events: Object.values(state.calendar)
})

const mapDispatchToProps = dispatch => ({
    allactivities: () => dispatch(fetchActivities()),
    allreview: () => dispatch(getReviews()),
    deletereview: id => dispatch(removereview(id)),
    allevents: () => dispatch(fetchEvents()),
    getUserActivities: userId => dispatch(getUserActivities(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserActivity)
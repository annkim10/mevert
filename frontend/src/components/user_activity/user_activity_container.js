import {connect} from "react-redux"
import UserActivity from "./user_activity"
import { fetchActivities} from "../../actions/activity_action"
import { getReviews, removereview} from "../../actions/review_actions"
import {fetchEvents} from "../../actions/calendar_action.js"
import { deleteActivity  } from "../../actions/session_actions"

const mapStateToProps = state => ({
    activities: state.activities,
    user: state.session.user,
    reviews: Object.values(state.review),
    events: Object.values(state.calendar)
})

const mapDispatchToProps = dispatch => ({
    allactivities: () => dispatch(fetchActivities()),
    allreview: () => dispatch(getReviews()),
    deletereview: id => dispatch(removereview(id)),
    allevents: () => dispatch(fetchEvents()),
    updateUser: (userId, activityId) => dispatch(deleteActivity (userId, activityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserActivity)
import {connect} from "react-redux"
import UserActivity from "./user_activity"
import { fetchActivities } from "../../actions/activity_action"
import { getReviews, removereview} from "../../actions/review_actions"

const mapStateToProps = state => ({
    activities: state.activities,
    user: state.session.user,
    reviews: Object.values(state.review)
})

const mapDispatchToProps = dispatch => ({
    allactivities: () => dispatch(fetchActivities()),
    allreview: () => dispatch(getReviews()),
    deletereview: id => dispatch(removereview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserActivity)
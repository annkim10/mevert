import {connect} from "react-redux"
import { fetchActivity } from "../../actions/activity_action"
import { postUserActivity } from "../../actions/session_actions"
import ActivityShow from "./activity_show"


const mapStateToProps = (state, ownProps) => ({
    activity: state.activities.data.filter(activitiy => activitiy._id === ownProps.match.params.activityId)[0],
    currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
    getactivity: id => dispatch(fetchActivity(id)),
    postUserActivity: (userId, activityId) => dispatch(postUserActivity(userId, activityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)



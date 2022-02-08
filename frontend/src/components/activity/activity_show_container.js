import {connect} from "react-redux"
import {fetchActivity} from "../../actions/activity_actions"
import ActivityShow from "./activity_show"

mapStateToProps = (state, ownProps) => ({
    activity: state.activities[ownProps.match.params.activityId]
})

mapDispatchToProps = dispatch => ({
    getactivity: id => dispatch(fetchActivity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)
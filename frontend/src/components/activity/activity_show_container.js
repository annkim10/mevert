import {connect} from "react-redux"
import {fetchActivity} from "../../actions/activity_action"
import ActivityShow from "./activity_show"

const mapStateToProps = (state, ownProps) => ({
    activity: state.activities[ownProps.match.params.activityId]
})

const mapDispatchToProps = dispatch => ({
    getactivity: id => dispatch(fetchActivity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)
import {connect} from "react-redux"
import {fetchActivity} from "../../actions/activity_action"
import ActivityShow from "./activity_show"


const mapStateToProps = (state, ownProps) => ({
    activity: state.activities.data.filter(activitiy => activitiy._id === ownProps.match.params.activityId)[0]
})

const mapDispatchToProps = dispatch => ({
    getactivity: id => dispatch(fetchActivity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)
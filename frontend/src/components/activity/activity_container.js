import ActivityIndex from "./activity_index"
import {connect} from "react-redux"
import {fetchActivities} from "../../actions/activity_action"

const mapStateToProps = state => ({
    activities: Object.values(state.activities)
})

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)
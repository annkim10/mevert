import ActivityIndex from "./activity_index"
import {connect} from "react-redux"
import {fetchActivities} from "../../actions/activity_action"

const mapStateToProps = state => ({
    activities: state.activities 
})

const mapDispatchToProps = dispatch => ({
    getactivities: () => dispatch(fetchActivities())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex)
import PersonalActivity from "./personal_activity"
import {connect} from "react-redux"
import {fetchActivities} from "../../actions/activity_action"

const mapStateToProps = state => ({
    activities: Object.values(state.activities),
    quiz: state.quiz.quiz 
})

const mapDispatchToProps = dispatch => ({
    getactivities: () => dispatch(fetchActivities())
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalActivity)
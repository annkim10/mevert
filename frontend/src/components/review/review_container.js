import {connect} from "react-redux"
import {newReview} from "../../actions/review_actions"
import {fetchActivity, updateactivity} from "../../actions/activity_action"
import Review from "./review"

const mapStateToProps = (state, ownProps) => ({
    review: {
        ratings: 0,
        title: "",
        body: "",
        activity: ownProps.match.params.activityId
    },
    // activity: state.activities.undefined.data
})

const mapDispatchToProps = dispatch => ({
    createreview: review => dispatch(newReview(review)),
    getactivity: id => dispatch(fetchActivity(id)),
    updateActivity: activity => dispatch(updateactivity(activity))
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
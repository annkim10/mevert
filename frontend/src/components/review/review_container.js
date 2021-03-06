import {connect} from "react-redux"
import {newReview, clearErrors} from "../../actions/review_actions"
import {fetchActivity, updateactivity} from "../../actions/activity_action"
import Review from "./review"


const mapStateToProps = (state, ownProps) => {
    return {
    review: {
        ratings: 0,
        title: "",
        body: "",
        activity: ownProps.match.params.activityId
    },
    user: state.session.user.id,
    activity: state.activities[ownProps.match.params.activityId],
    createdreview: state.review,
    form: "Submit Review",
    errors: state.errors.review
}}


const mapDispatchToProps = dispatch => ({
    processReview: review => dispatch(newReview(review)),
    getactivity: id => dispatch(fetchActivity(id)),
    updateActivity: activity => dispatch(updateactivity(activity)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
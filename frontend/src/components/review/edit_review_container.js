import {connect} from "react-redux"
import {updateReview, getReview} from "../../actions/review_actions"
import {fetchActivity, updateactivity} from "../../actions/activity_action"
import EditReview from "./editreview"

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
    // reviews: state.review[ownProps.match.params.reviewId],
    activity: state.activities[ownProps.match.params.activityId],
    review: state.review[ownProps.match.params.reviewId],
    // review: {
    //     ratings: state.review[ownProps.match.params.reviewId].ratings,
    //     title: state.review[ownProps.match.params.reviewId].title,
    //     body: state.review[ownProps.match.params.reviewId].body,
    //     activity: ownProps.match.params.activityId,
    //     id: ownProps.match.params.reviewId
    // },
    form: "Edit Review"
    }
   
}

const mapDispatchToProps = dispatch => ({
    processReview: review => dispatch(updateReview(review)),
    getactivity: id => dispatch(fetchActivity(id)),
    updateActivity: activity => dispatch(updateactivity(activity)),
    fetchreview: id => dispatch(getReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)
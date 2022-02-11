import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import Calender from '../calendar/calendar'
import "./profile.css"
import {fetchEvents} from '../../actions/calendar_action';
import {fetchActivities} from "../../actions/activity_action"
import img from "../../assets/profile_pic.jpg"

class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
        this.props.fetchActivities()
    }
    render(){

    console.log(this.props)

        const { currentUser } = this.props

        return(
            <div className="profile-outer-div">
                <div className="profile-left-wrapper">
                    <div className="profile-pic-div">
                        <img className="profile-pic" src={img} />
                    </div>
                    <div className="profile-description">
                        <h1 className="username">{currentUser.firstName} {currentUser.lastName} </h1>
                    </div>
                    <div className="profile-activities-div">
                        <Link className="profile-activities-link" to={`/users/${currentUser.id}/activities`}>MY ACTIVITIES</Link>
                    </div>
                </div>
                <div className="profile-right-wrapper">
                    <Calender />
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    currentUser: state.session.user,
    allEvents: state.calendar.all
});

const mapDispatchtoProps = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchActivities: () => dispatch(fetchActivities())

});
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
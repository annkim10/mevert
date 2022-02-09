import React from "react";
import { connect } from "react-redux";
import Calender from '../calendar/calendar'
import {fetchEvents} from '../../actions/calendar_action';

class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
    }
    render(){

    // console.log(this.props.events)
        return(
            <div>
                <Calender />
            </div>
        )
    }
}


const mapStatetoProps = (state) => ({
    currentUser: state.session.user,
    allEvents: state.calendar.all
});

const mapDispatchtoProps = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents())
});
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
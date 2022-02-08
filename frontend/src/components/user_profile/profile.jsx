import React from "react";
import { connect } from "react-redux";
import Calender from '../calendar/calendar'

class Profile extends React.Component {
    render(){
        return(
            <div>
                <Calender />
            </div>
        )
    }
}


const mapStatetoProps = (state) => ({
    currentUser: state.session.user 
});

export default connect(mapStatetoProps, null)(Profile);
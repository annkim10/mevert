import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import {updateEvent, deleteEvent} from '../../actions/calendar_action'
import Datetime from 'react-datetime';
import {EVENTINFO} from './calendar';
import {fetchEvents} from '../../actions/calendar_action';
import moment from 'moment';
import { getUserActivities} from "../../actions/session_actions"

class EditEvent extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.eventObj
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateDropdown = this.updateDropdown.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.formatDate = this.formatDate.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.eventObj !== this.state){
            this.props.fetchEvents()
        }
    }

    componentDidMount(){
        this.props.getUserActivities(this.props.user.id)
    }

    formatDate(date) {
        let newdate = new Date(date)
        let year = newdate.getFullYear()
        let month = newdate.getMonth()
        let day = newdate.getDate()
        let hour = newdate.getHours()
        let minutes = newdate.getMinutes()
        let period = ""
        if (hour <= 11) period = "AM"
        if (hour > 11) period = "PM"
        let time = newdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        let fulldate = `${month + 1}/${day}/${year} ${time}`
        return fulldate
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.state.start >= this.state.end){
            this.setState({isValid: false})
        }
        else{
            let event = {
                title: this.state.title, 
                start: this.state.start, 
                end: this.state.end,
                _id: this.state._id,
                createdAt: this.state.createdAt,
                user: this.state.user
            }
            this.props.updateEvent(event).then(this.props.closeModal)
        }
        
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    updateDropdown(e){
        this.setState({title: e.currentTarget.value}, () => {return null})
    }

    handleDelete(e){
        e.preventDefault();
        delete this.state.isValid
        this.props.deleteEvent(this.state._id)
        .then(this.props.closeModal)
    }

    handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });


    disablePastDt = current => {
        const yesterday = moment().subtract(1, 'day');;
        return current.isAfter(yesterday);
    };

    disableEndLessThanStart = current => {
        const startDate = this.state.start
        return current.isAfter(startDate);
    };

    render(){
        // console.log("inside edit event render, printing props",this.props);
        // console.log("inside edit event render, printing state",this.state);
        const {userActivitiesId, activities} = this.props
        if(!userActivitiesId || !activities) return null;
        let selectedActivities = [];
        activities.forEach(activity => {
            if(userActivitiesId.includes(activity._id)){
                selectedActivities.push(activity)
            }
        })
         let   title =  selectedActivities.map((activity, index) => {
            return (<option key={index} value={activity.title}>{activity.title}</option>)
        })

        let errors;
        if(this.state.isValid === false){
            errors = (
                <span className="date-error">
                    Invalid dates
                </span>
            )
        }
        
        return(
            <div className="add-event-div">
                <form className="add-event-form" onSubmit={this.handleSubmit}> 
                    <div className="event-title">
                        <label>Title</label>
                        <div className="title-selector">
                            <select onChange={this.updateDropdown} className="title-select">
                                <option defaultValue>{this.state.title}</option>
                                {title}
                            </select>
                        </div>
                    </div>
                    <div className="event-start">
                        <label>Start</label>
                        <Datetime isValidDate={this.disablePastDt} value={this.formatDate(this.state.start)} onChange={moment => this.handleDateTimePicker(moment, 'start')} className="start-select"/>
                    </div>

                    <div className="event-end">
                        <label>End</label>
                        <Datetime isValidDate={this.disableEndLessThanStart} value={this.formatDate(this.state.end)} onChange={moment => this.handleDateTimePicker(moment, 'end')} className={this.state.isValid ? "end-select" : "error-select"}/>
                    </div>
                    {errors}
                    <div className="edit-btn-div">
                        <button onClick={this.handleSubmit} type='button' className="event-save">Save</button>
                        <button onClick={this.handleDelete} type='button' className="event-delete">Delete</button>
                        {/* <button onClick={this.props.closeModal} type='button' className="event-cancel">Cancel</button> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let eventObj;
    let allEvents;
    let event = Object.values(state.calendar).filter(event => event._id === EVENTINFO )
    eventObj = event[0]
    if(eventObj){
        eventObj.isValid = true 
    }
    console.log(eventObj)
    allEvents = Object.values(state.calendar)

    return {
        activities: Object.values(state.activities),
        eventObj,
        allEvents,
        userActivitiesId: state.userActivities,
        user: state.session.user,
    }
}

const mapDispatchToProps = dispatch => ({

    updateEvent: event => dispatch(updateEvent(event)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    closeModal: () => dispatch(closeModal()),
    fetchEvents: ()=> dispatch(fetchEvents()),
    getUserActivities: userId => dispatch(getUserActivities(userId))

});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
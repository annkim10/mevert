import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import {updateEvent, deleteEvent} from '../../actions/calendar_action'
import Datetime from 'react-datetime';
import {EVENTINFO} from './calendar';
import {fetchEvents} from '../../actions/calendar_action';

class EditEvent extends React.Component{

    constructor(props){
        super(props)
        this.state = this.props.eventObj
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateDropdown = this.updateDropdown.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidUpdate(preprops){
        // console.log(preprops)
        if(this.props.allEvents.length !== preprops.allEvents.length){
            this.props.fetchEvents()
        }
    }
    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.updateEvent(this.state).then(this.props.closeModal)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    updateDropdown(e){
        this.setState({title: e.currentTarget.value}, () => {return null})
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteEvent(this.state.id)
        .then(this.props.closeModal)
    }

    handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });

    render(){
        console.log(this.state);
         let title = (this.props.activities.map((activity, index) => {
            return (<option key={index} value={activity.title}>{activity.title}</option>)
        }));

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
                        <Datetime value={this.state.start} onChange={moment => this.handleDateTimePicker(moment, 'start')} className="start-select"/>
                    </div>

                    <div className="event-end">
                        <label>End</label>
                        <Datetime value={this.state.end} onChange={moment => this.handleDateTimePicker(moment, 'end')} className="end-select"/>
                    </div>
                    <div className="edit-btn-div">
                        <button onClick={this.handleSubmit} type='button' className="event-save">Save</button>
                        <button onClick={this.handleDelete} type='button' className="event-delete">Delete</button>
                        <button onClick={this.props.closeModal} type='button' className="event-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let eventObj;
    let allEvents;
// if(state.calendar.all){
    let event = Object.values(state.calendar.all).filter(event => event.title === EVENTINFO )
    // console.log(event)
    // if(event){
        eventObj = {
            title: event[0].title,
            start: event[0].start,
            end: event[0].end,
            id: event[0]._id
        }
    // }
    allEvents= Object.values(state.calendar.all)
// }
    // console.log(eventObj)
    return {
        activities: Object.values(state.activities.data),
        eventObj,
        allEvents
    }
}

const mapDispatchToProps = dispatch => ({

    updateEvent: event => dispatch(updateEvent(event)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    closeModal: () => dispatch(closeModal()),
    fetchEvents: ()=> dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
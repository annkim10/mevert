import React from "react";
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { closeModal } from '../../actions/modal_actions';
import { createEvent } from '../../actions/calendar_action';
import moment from 'moment';

class AddEvent extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
            title: '',
            start: new Date(),
            end: new Date(),
        })
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createEvent(this.state).then(this.props.closeModal)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });

    disablePastDt = current => {
        const yesterday = moment().subtract(1, 'day');
        return current.isAfter(yesterday);
    };

    disableEndLessThanStart = current => {
        const startDate = this.state.start
        return current.isAfter(startDate);
    };

    render(){
        const {userActivitiesId, activities} = this.props
        if(!userActivitiesId || !activities) return null;
        let selectedActivities = [];
        activities.forEach(activity => {
            if(userActivitiesId.includes(activity._id)){
                selectedActivities.push(activity)
            }
        })
    
        let title;
        title =  selectedActivities.map((activity, index) => {
            return (<option key={index} value={activity.title}>{activity.title}</option>)
        })
       
        return(
            <div className="add-event-div">
                <form className="add-event-form" onSubmit={this.handleSubmit}> 
                    <div className="event-title">
                        <label>Title</label>
                        <div className="title-selector">
                            <select onChange={this.update('title')} className="title-select">
                                <option defaultValue>Title</option>
                                {title}
                            </select>
                        </div>
                    </div>
                    
                    <div className="event-start">
                        <label>Start</label>
                        <Datetime isValidDate={this.disablePastDt} value={this.state.start} onChange={moment => this.handleDateTimePicker(moment, 'start')} className="start-select"/>
                    </div>

                    <div className="event-end">
                        <label>End</label>
                        <Datetime isValidDate={this.disableEndLessThanStart} value={this.state.end} onChange={moment => this.handleDateTimePicker(moment, 'end')} className="end-select"/>
                    </div>
                    <div className="btn-div">
                        <button onClick={this.handleSubmit} type='button' className="event-save">SAVE</button>
                        <button onClick={this.props.closeModal} type='button' className="event-cancel">CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.session.user,
    activities: Object.values(state.activities),
    userActivitiesId: state.session.user.activities
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createEvent: event => dispatch(createEvent(event)),
    
});

export default connect( mapStateToProps, mapDispatchToProps )(AddEvent);
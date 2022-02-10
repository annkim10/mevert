import React from "react";
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { closeModal } from '../../actions/modal_actions';
import { createEvent } from '../../actions/calendar_action';


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
        // debugger
        e.preventDefault();
        this.props.createEvent(this.state).then(this.props.closeModal)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });

    render(){
     
        let title = (this.props.activities.map((activity, index) => {
            return (<option key={index} value={activity.title}>{activity.title}</option>)
        }));

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
                        <Datetime value={this.state.start} onChange={moment => this.handleDateTimePicker(moment, 'start')} className="start-select"/>
                    </div>

                    <div className="event-end">
                        <label>End</label>
                        <Datetime value={this.state.end} onChange={moment => this.handleDateTimePicker(moment, 'end')} className="end-select"/>
                    </div>
                    <div className="btn-div">
                        <button onClick={this.handleSubmit} type='button' className="event-save">Save</button>
                        <button onClick={this.props.closeModal} type='button' className="event-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.session.user,
    activities: Object.values(state.activities.data)
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createEvent: event => dispatch(createEvent(event)),
    
});

export default connect( mapStateToProps, mapDispatchToProps )(AddEvent);
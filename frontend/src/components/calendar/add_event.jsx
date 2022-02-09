import React from "react";
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import {openModal, closeModal} from '../../actions/modal_actions';
import {createEvent} from '../../actions/calendar_action';

class AddEvent extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
            title: '',
            start: new Date(),
            end: new Date(),
            user_id: this.props.user.id
        })
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.update = this.update.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createEvent(this.state);
        // this.props.closeModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleDateTimePicker = (moment, name) => this.setState({ [name]: moment.toDate() });

    render(){
        return(
            <div className="add-event-div">
                <form className="add-event-form" onSubmit={this.handleSubmit}> 
                    <div className="event-title">
                        <label>Title</label>
                        <input placeholder="Title" value={this.state.title} onChange={this.update('title')}/>
                    </div>
                    
                    <div className="event-start">
                        <label>Start</label>
                        <Datetime value={this.state.start} onChange={moment => this.handleDateTimePicker(moment, 'start')}/>
                    </div>

                    <div className="event-end">
                        <label>End</label>
                        <Datetime value={this.state.end} onChange={moment => this.handleDateTimePicker(moment, 'end')}/>
                    </div>

                    <button onClick={this.props.closeModal} type='button' className="event-save">Save</button>
                    <button onClick={this.props.closeModal} type='button' className="event-cancel">Cancel</button>
                </form>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    user: state.session.user
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createEvent: event => dispatch(createEvent(event))
});

export default connect( mapStateToProps, mapDispatchToProps )(AddEvent);
import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';

import {getUserEvents} from '../../actions/calendar_action';

export let EVENTINFO = null ;

 class  Calendar extends React.Component {
    constructor(props){
        super(props)
        this.calendarRef = null;
        this.handleEventClick = this.handleEventClick.bind(this)
    }
   
    handleEventClick = (clickInfo) => {
       EVENTINFO = (clickInfo.event.id)
        return (
            this.props.openModal('editEvent')
        )
    }

    render(){
        let events = [];
        this.props.allEvents.forEach(event => {
            let eventObj = {
                title: event.title,
                start: event.start,
                end: event.end,
                id: event._id
            }
            events.push(eventObj)
        })
    
        return (
            <section >
                <button onClick={() => this.props.openModal('addEvent')} className='add-event-btn'>Add Event</button>
                <div className='calendar-div'>
                    <FullCalendar
                        ref={this.calendarRef}
                        events={events}
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        eventClick={this.handleEventClick}
                    />
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => {
    let user = state.session.user
    return ({
        user,
        allEvents: Object.values(state.calendar).filter(event => event.user === user.id)
    })
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    getUserEvents: user_id => dispatch(getUserEvents(user_id))
});

export default connect( mapStateToProps, mapDispatchToProps )(Calendar);

import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import moment from 'moment';
import {getUserEvents} from '../../actions/calendar_action';

export let EVENTINFO = null ;

 class  Calendar extends React.Component {
    
    constructor(props){
        super(props)
        this.calendarRef = null;
        this.handleEventClick = this.handleEventClick.bind(this)
    }
    
     onEventAdd = (event) => {
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        })
    }


    handleEventClick = (clickInfo) => {
        // if ((`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        //   clickInfo.event.remove()
        // }
        // return (<div>
        //     <button>Edit</button>
        //     <button>Delete</button>
        // </div>)

        // return clickInfo.event.title
        //     // <div>
        //     //     <addEventContainer />
        //     // </div>
       EVENTINFO = (clickInfo.event.title)
        // console.log(EVENTINFO);
        return (
            // <div>
            //     <button onClick={() => this.show()}>
            //         {clickInfo.event.title}
            //     </button>
            // </div>
            this.props.openModal('editEvent')

        )
    }

    render(){
        let events = [];
        this.props.allEvents.forEach(event => {
            let eventObj = {
                title: event.title,
                start: event.start,
                end: event.end
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
                        // eventAdd={(event) => this.handleEventAdd(event)}
                        // datesSet={(date) => this.handleDatesSet(date)}
                        editable={true}
                        selectable={true}
                        // eventChange={function(){}}
                        // eventRemove={function(){}}
                        // eventContent={this.renderEventContent}
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
        allEvents: Object.values(state.calendar.all).filter(event => event.user === user.id)
    })
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    getUserEvents: user_id => dispatch(getUserEvents(user_id))
});

export default connect( mapStateToProps, mapDispatchToProps )(Calendar);

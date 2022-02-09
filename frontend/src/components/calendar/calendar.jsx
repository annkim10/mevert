import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import moment from 'moment';
import axios from 'axios';
import {getUserEvents} from '../../actions/calendar_action';

 class  Calendar extends React.Component {
    
    constructor(props){
        super(props)
        this.calendarRef = null;
        // this.events =[]
        // this.setEvents = []

        // this.handleEventAdd = this.handleEventAdd.bind(this)
    }
    // const calendarRef = useState(null);
    // const [events, setEvents] = useState([]);
    
     onEventAdd = (event) => {
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
            // user_id: this.props.user.id
        })
    }

    // handleEventAdd(data) {
    //     // console.log("hello")
    //     axios.post('/api/calendar/createEvent', data.event)
    // }
   
    // handleDatesSet(data){
    //     // console.log(this.props.events)
    //     // console.log("from datesset")
    //     const response = axios.get('/api/calendar/events?start='+moment(data.start).toISOString()
    //     +'&end='+moment(data.end).toISOString())
    //     // this.events.props.push(response.data);
    // }
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
        console.log(events)

        return (
            <section >
                <button onClick={() => this.props.openModal('addEvent')}>Add Event</button>
                <div className='calendar-div'>
                    <FullCalendar
                        ref={this.calendarRef}
                        events={events}
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        // eventAdd={(event) => this.handleEventAdd(event)}
                        // datesSet={(date) => this.handleDatesSet(date)}
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
        allEvents: Object.values(state.calendar.all).filter(event => event.user == user.id)
    })
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    getUserEvents: user_id => dispatch(getUserEvents(user_id))
});

export default connect( mapStateToProps, mapDispatchToProps )(Calendar);

// function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
//   }


// import React from 'react'
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS, createEventId } from './events'

// export default class DemoApp extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             weekendsVisible: true,
//             currentEvents: []
//         }
//     }
  
  
//   handleEvents = (events) => {
//     this.setState({
//       currentEvents: events
//     })
//   }

//   handleDateSelect = (selectInfo) => {
//     let title = prompt('Please enter a new title for your event')
//     let calendarApi = selectInfo.view.calendar

//     calendarApi.unselect() // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       })
//     }
//   }

//   render() {
//     return (
//         <div className='demo-app'>
//           {this.renderSidebar()}
//           <div className='demo-app-main'>
//             <FullCalendar
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//               headerToolbar={{
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'dayGridMonth,timeGridWeek,timeGridDay'
//               }}
//               initialView='dayGridMonth'
//               editable={true}
//               selectable={true}
//               selectMirror={true}
//               dayMaxEvents={true}
//               weekends={this.state.weekendsVisible}
//               initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//               select={this.handleDateSelect}
//               eventContent={renderEventContent} // custom render function
//               eventClick={this.handleEventClick}
//               eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
//               /* you can update a remote database when these fire:
//               eventAdd={function(){}}
//               eventChange={function(){}}
//               eventRemove={function(){}}
//               */
//             />
//           </div>
//         </div>
//       )
//   }

//   renderSidebar() {
//     return (
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//           </ul>
//         </div>
//         {/* <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//             toggle weekends
//           </label>
//         </div> */}
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({this.state.currentEvents.length})</h2>
//           <ul>
//             {this.state.currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
//   }

//   handleEventClick = (clickInfo) => {
//     if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }
// }




// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }

// function renderSidebarEvent(event) {
//     return (
//       <li key={event.id}>
//         <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//         <i>{event.title}</i>
//       </li>
//     )
//   }
  
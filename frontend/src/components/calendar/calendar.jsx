// import React from 'react';
// import FullCalendar from '@fullcalendar/react'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from "@fullcalendar/interaction";

// export default class DemoApp extends React.Component {
//     handleDateClick = (arg) => { // bind with an arrow function
//         alert(arg.dateStr)
//     }
//   render() {
//     return (
//       <FullCalendar
//         // plugins={[ dayGridPlugin ]}
//         // initialView="dayGridMonth"
//         // weekends={false}
//         events={[
//           { title: 'event 1', date: '2019-04-01' },
//           { title: 'event 2', date: '2019-04-02' }
//         ]}

//         // plugins={[ dayGridPlugin, interactionPlugin ]}
//         // dateClick={this.handleDateClick}

//         plugins={[ dayGridPlugin ]}
//         eventContent={renderEventContent}
//       />
//     )
//   }
// }
// function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
//   }


import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default class DemoApp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            weekendsVisible: true,
            currentEvents: []
        }
    }
  
  
  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  render() {
    return (
      <div className='demo-app'>
       
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}


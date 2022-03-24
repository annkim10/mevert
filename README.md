# mevert
Mevert is an application where users can take a quiz, which determine their levels of introversion and extroversion, which is then used to provide the user with personalized activities that will enjoy.  If users do not like the suggested activities they can view the entire list and pick activities they enjoy from there.  Users can then schedule activities on a calendar, they create, read, update, and delete the activities listed on the calendar.  Users can also view activities they have selected on their profile page, where they can write diary entries regarding how the feel about the activity and give it ratings so that they can refer back to it later. 

Live Link to the site: https://mevert.herokuapp.com/?#/

## Technologies Used:
1) Mapbox Map API
2) Full Calendar API
3) React/Redux 
4) Express.js
5) Node.js
6) MongoDB 

## Major Features 
1) A major feature that was integrated into this project was the calendar API, which would allow users to schedule and update activities and be able to visually view what their schedule looks like.  The calendar API was difficult to implement due to the fact it had to connected to the backend and front end to be able to implement the entire CRUD functionality.  

![calendar](https://github.com/annkim10/mevert/blob/main/frontend/public/calendar.gif)
code:

```js
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
            <section className='calendar-outer-div'>
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

```

2) Another major feature that was integrated in this project was the allowing users to take a quiz and then recommending personalized activities to them.  It was difficult to set up the quiz due to the fact that the user had to click to select their option but they also had to click next to get to the next question on the quiz.  Initially it was very difficult to get both of these clicks to work, as a result, we had to create custome event listeners that would effectively allow users to select an option and move on to the next question.  After the user has completed the quiz, we had to give personalized recommendations to the users.  We created a custom algorithm that utilizies the user's quiz results and based on the introverism and extroversion percentage, we provide recommendations.  For example if the person is 80% introvert and 20% extrovert, 5 out of the 6 activities recommended will be geared towards introverts and 1 activity will be geared towards extroverts. 

![personality_test](https://github.com/annkim10/mevert/blob/main/frontend/public/ezgif.com-gif-maker.gif)

3) Users also have access to resources to accomplish the selected activities. We added some youtube videos utilizing the react-youtube library, and   implemented a map to provide locations related to the activity using Mapbox API.

4) Utilized Mapbox Map API to show near by places for users to accomplish the activity they have selected.
![calendar](https://github.com/annkim10/mevert/blob/main/frontend/public/map.png)

code:
```js

class MapComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lng: -122.1516 ,
			lat: 37.6203,
			zoom: 9.4
		}
	}

	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v10', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

        map.on('move', () => {
            const { lng, lat } = map.getCenter();
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

		this.props.data.forEach((location) => {
			var marker = new mapboxgl.Marker()
                        .setLngLat(location.coordinates)
                        .setPopup(new mapboxgl.Popup({ offset: 30 })
                            .setHTML( '<h4 className="popup-heading">' + location.city + '</h4>' + location.location ))
                        .addTo(map);
		})

		return () => map.remove();
	}

	render(){
		return(
			<div className='map-outer-div'>
                <div className='map-params'>
                    Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                </div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'600px'}} className='map-container'/>
			</div>
		)
	}
};

```
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
// import { Marker } from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

const data = [
	{
		"location": "Animal Shelter, 1200 15th St",
		"city": "San Francisco",
		"state": "California",
		"coordinates": [-122.415186, 37.7669592],
	},
	{
		"location": "San Francisco SPCA Veterinary Hospital - Pacific Heights Campus, 2343 Fillmore Street",
		"city": " San Francisco",
		"state": "California",
		"coordinates": [-122.436753, 37.7913051],
	},
	{
		"location": "Pets unlimited, 675 Georgia Ave",
		"city": " Sunnyvale",
		"state": "California",
		"coordinates": [-122.0206964, 37.3918082],
	},
    {
		"location": "Peninsula Humane Society & SPCA Adoption Center, 1450 Rollins Rd",
		"city": "Burlingame",
		"state": "California",
		"coordinates": [-122.3669955, 37.589781],
	},
    {
		"location": "San Francisco Animal Care & Control, 1419 Bryant St",
		"city": " San Francisco",
		"state": "California",
		"coordinates": [-122.4123976, 37.7685775],
	},
    {
		"location": "San Francisco SPCA Mission Adoption Center, 250 Florida St",
		"city": " San Francisco",
		"state": "California",
		"coordinates": [-122.4139514, 37.7662966],
	},
    {
		"location": "Palo Alto Humane Society, 4000 Middlefield Rd D1",
		"city": "Palo Alto",
		"state": "California",
		"coordinates": [-122.1107855, 37.4168785],
	},
    {
		"location": "Friends of the Alameda Animal Shelter (FAAS) South Shore, 2228 S Shore Center",
		"city": "Alameda",
		"state": "California",
		"coordinates": [-122.253695, 37.7569359],
	},
    {
		"location": "Nine Lives Foundation Adoption Center, 3106 Rolison Rd ",
		"city": "Redwood City",
		"state": "California",
		"coordinates": [-122.1999119, 37.4861079],
	}
]

class MapComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lng: -122.1516 ,
			lat: 37.6203,
			zoom: 9.4
		}
	}

    // handlePopup(){
    //     return (
    //         new mapboxgl.Popup({ offset: 30 }).setHTML()
    //     )
    // }
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

		data.forEach((location) => {
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

export default MapComponent;

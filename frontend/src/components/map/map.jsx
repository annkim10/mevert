
import React, { Component } from 'react';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
// import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX
// mapboxgl.accessToken  = 'pk.eyJ1Ijoia2lydGloYXJvZGUiLCJhIjoiY2t6ZGVvemM4MnVjaTJucDQzbW9mbHo5OCJ9.oK9bGGd04LDF6zpvLpupZA'

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


// class MapComponent extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           lat: 37.7577,
//           lng: -122.4376,
//           zoom: 13
//         };
//         this.mapContainer = null;
//         // this.map = null;
//       }
  
//     componentDidMount() {
//         const { lng, lat, zoom } = this.state;
  
//         // const map = new mapboxgl.Map({
//         //   container: 'map',
//         //   center: [lng, lat],
//         //   style: 'mapbox://styles/mapbox/streets-v10',
//         //   zoom: zoom,
  
//         // });

//         // if (this.map.current) return; 
//         // initialize map only once
//        const map = new mapboxgl.Map({
//             container: this.mapContainer,
//             center: [lng, lat],
//             style: 'mapbox://styles/mapbox/streets-v11',
//             zoom: zoom
//         });

//         // if (!this.map.current) return;
//         // this.map.on('move', () => {
//         //   const { lng, lat } = this.map.getCenter();
  
//         //   this.setState({
//         //     lng: lng.toFixed(4),
//         //     lat: lat.toFixed(4),
//         //     zoom: this.map.getZoom().toFixed(2)
//         //   });
//         // });
//     }
  
//     render() {
//         const { lng, lat, zoom } = this.state;
//         return (
//         //   <div className="map-container">
//         //       <div className="map-params">
//         //         <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`} </div>
//         //       </div>
//         //     <div id="map" />
//         //   </div>

//         <div>
//             <div className="sidebar">
//             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//             </div>
//             <div ref={this.mapContainer} className="map-container" />
//          </div>
//         );
//     }
//   }
  
  
// function MapComponent(){
  
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-117.1945);
//     const [lat, setLat] = useState(37.9868);
//     const [zoom, setZoom] = useState(6);


//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom
//         });

//         if (!map.current) return; // wait for map to initialize
//         map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//         });
  
       
//     }, []);

    
//     //  data.forEach((location) => {
//     //     console.log(location)
//     //     var marker = new mapboxgl.Marker()
//     //                     .setLngLat(location.coordinates)
//     //                     .setPopup(new mapboxgl.Popup({ offset: 30 })
//     //                     .setHTML('<h4>' + location.city + '</h4>' + location.location))
//     //                     .addTo(map);

//     // })
//     return (
//         <div>
//         <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div ref={mapContainer} className="map-container" />
//         </div>
//     );

// }

class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -122.2409,
			lat: 37.5467,
			zoom: 9.5
		}
	}

	// Create map and lay over markers
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
			// console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4 className="marker-box">' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
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
}
export default Mapp;

// export default MapComponent;

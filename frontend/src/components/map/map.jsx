
import React, { Component } from 'react';
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

function MapComponent(){
  
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-117.1945);
    const [lat, setLat] = useState(37.9868);
    const [zoom, setZoom] = useState(6);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    

 
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
  

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              title: 'Mapbox',
              description: 'San Francisco, California'
            }
          }
        ]
    };

    // add markers to map
    // for (const feature of geojson.features) {
    //     // create a HTML element for each feature
    //     const el = document.createElement('div');
    //     el.className = 'marker';
    
    //     // make a marker for each feature and add to the map
    //     new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(mapContainer);
    // }

    //  Create default markers

    // geojson.features.map((feature) =>
    //  new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(mapContainer)
    // );

    //  Add navigation control (the +/- zoom buttons)
    //  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    //  return () => map.remove();
    }, []);
    return (
        <div>
        <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
        </div>
    );

}



// class MapComponent extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//         lat: 37.7577,
//         lng: -122.4376,
//         zoom: 13
//       };

//     }

//   componentDidMount() {
//       const { lng, lat, zoom } = this.state;

//       var map = new mapboxgl.Map({
//         container: 'map',
//         center: [lng, lat],
//         style: 'mapbox://styles/mapbox/streets-v10',
//         zoom: zoom,

//       });

//       map.on('move', () => {
//         const { lng, lat } = map.getCenter();

//         this.setState({
//           lng: lng.toFixed(4),
//           lat: lat.toFixed(4),
//           zoom: map.getZoom().toFixed(2)
//         });
//       });
//   }

//   render() {
//       const { lng, lat, zoom } = this.state;
//       return (
//         <div className="map-container">
//             <div className="map-params">
//               <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`} </div>
//             </div>
//           <div id="map" />
//         </div>
//       );
//   }
// }



export default MapComponent;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken='';

// // Sample data 
// const data = [
// 	{
// 		"location": "Manhattan Ave & Norman Ave at NE corner",
// 		"city": "Brooklyn",
// 		"state": "New York",
// 		"coordinates": [-73.9516030004786,40.72557300071668],
// 	},
// 	{
// 		"location": "6th Ave & 42nd St at NW corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.98393399979334,40.75533300052329],
// 	},
// 	{
// 		"location": "Essex St & Delancey St at SE corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.9882730001973,40.718207001246554],
// 	}
// ]

// class Mapp extends React.Component{

// 	// Set up states for updating map 
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			lng: -74,
// 			lat: 40.7128,
// 			zoom: 12
// 		}
// 	}

// 	// Create map and lay over markers
// 	componentDidMount(){
// 		const map = new mapboxgl.Map({
// 			container: this.mapContainer,
// 			style: 'mapbox://styles/shiy/ckjg4xi1r158y19maqdzjkqjx', 
// 			center: [this.state.lng, this.state.lat],
// 			zoom: this.state.zoom
// 		})

// 		data.forEach((location) => {
// 			console.log(location)
// 			var marker = new mapboxgl.Marker()
// 							.setLngLat(location.coordinates)
// 							.setPopup(new mapboxgl.Popup({ offset: 30 })
// 							.setHTML('<h4>' + location.city + '</h4>' + location.location))
// 							.addTo(map);

// 		})
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
// 			</div>
// 		)
// 	}
// }

// export default Mapp;
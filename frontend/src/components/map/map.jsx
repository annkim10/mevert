import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
// import { Marker } from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX


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

export default MapComponent;

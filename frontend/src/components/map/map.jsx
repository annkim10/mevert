// import { useState } from "react";
// import ReactMapGL from 'react-map-gl';

// function Map(){
//     const [ viewport, setViewport ] = useState({
//         width: 400,
//         height: 400,
//         latitude: 37.7577,
//         longitute: -122.4376,
//         zoom: 13
//     });

//     return (
//         <div className="map-div">
//             <ReactMapGL 
//               {...viewport}
//               mapboxAccessToken={process.env.REACT_APP_MAPBOX}
//               onViewportChange={nextViewport => setViewport(nextViewport)}
//             />
//         </div>
//     )
// }

// export default Map;

import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

class MapComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        lat: 37.7577,
        lng: -122.4376,
        zoom: 13
      };

    }

  componentDidMount() {
      const { lng, lat, zoom } = this.state;

      var map = new mapboxgl.Map({
        container: 'map',
        center: [lng, lat],
        style: 'mapbox://styles/mapbox/streets-v10',
        zoom: zoom,

      });

      map.on('move', () => {
        const { lng, lat } = map.getCenter();

        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });
  }

  render() {
      const { lng, lat, zoom } = this.state;
      return (
        <div className="map-App">
            <div className="map-params">
              <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            </div>
          <div id="map" />
        </div>
      );
  }
}

export default MapComponent;
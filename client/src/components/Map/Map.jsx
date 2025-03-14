import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import Routing from "./RoutingControl"
import "./Map.css"

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //satellite :"http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png",
  satelite:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  hot:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  topography:'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
};

function MapComponent({
  coordinates,
  destination
}) {
  console.log("coordinates origin ============== ", coordinates)
  console.log("coordinates destination ============== ", destination)

  const [from, setFrom] = useState([52.5200, 13.4050]); // Initial Berlin coordinates
  const [to, setTo] = useState([48.8566, 2.3522]); // Initial Paris coordinates

  const updateRoute = (newFrom, newTo) => {
    setFrom([coordinates.lat,coordinates.lon]);
    setTo(newTo);
  };

  return (
    <div>
      <button onClick={() => updateRoute([40.7128, -74.0060], [34.0522, -118.2437])}>
        Update Route (New York to LA)
      </button>
      <MapContainer center={[destination.lat,destination.lon]}
                    zoom={3}
                    zoomControl={true}
                    style={{zIndex:0,position:"relative"}}
                    //style={{ height: "100vh", width: "60%", padding: 0 }}
                    className="map-container"
                    keyboard={true}
                    
                    >
  <Routing from={[coordinates.lat, coordinates.lon]} to={[destination.lat, destination.lon]}              color={'#757de8'} 
       position={'topright'} 
 />
      <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer  name="Satelite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.satelite}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer  name="Hot">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.hot}
            />
          </LayersControl.BaseLayer>
           <LayersControl.BaseLayer  name="Topography">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.topography}
            />
          </LayersControl.BaseLayer>
        </LayersControl>        
      </MapContainer>
    </div>
  );
}

export default MapComponent
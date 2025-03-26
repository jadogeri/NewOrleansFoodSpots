import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import Routing from "./RoutingControl"
import "./Map.css"

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  satelite:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  hot:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  topography:'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
};

function MapComponent({
  coordinates,
  destination,
  origin,
  center
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
    <MapContainer 
      center={[center.lat,center.lng]} className="map-container"
      keyboard={true} zoom={6} style={{ height: "400px", width: "4" }}
    >
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
      <Routing from={[origin.lat,origin.lng]} to={[destination.lat, destination.lng]} />
    </MapContainer>
  );
}

export default MapComponent
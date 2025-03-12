import React from 'react'
import {  TileLayer, Marker, Popup , Map } from 'react-leaflet'
import "./Map.css"


const Mapper = ({ lat,  lng}) => {
  return (
    <Map center={[lat, lng]} zoom={15} className='map-container'  //style={{heigh:30}}
    >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
 <Marker position={[lat, lng]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>
</Map>
  )
}

export default Mapper
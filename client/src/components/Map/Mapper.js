import React from 'react'
import  {  TileLayer, Marker, Popup , MapContainer } from 'react-leaflet'
import "./Map.css"



const Mapper = ({ lat,  lng, name}) => {
  return (
    <MapContainer center={[lat, lng]} zoom={11} className='map-container'  //style={{heigh:30}}
    
    >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   
 <Marker position={[lat, lng]}>
      <Popup>
        first
      </Popup>
  </Marker>
  <Marker position={[29.9790058839138, -90.0963385851989]} >
      <Popup>
        second
      </Popup>
  </Marker>


</MapContainer>
  )
}

export default Mapper

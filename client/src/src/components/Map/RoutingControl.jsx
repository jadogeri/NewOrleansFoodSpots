import React, {  useEffect } from 'react';
import {  useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';

let greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

let redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


function Routing({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: true,
      draggableWaypoints: true,
      collapsible:true,
      autoRoute:true,  
      
      show:true,
      units:"imperial",
      createMarker: function(i, wp, n) {
        if (i === 0 ) {
          return L.marker(wp.latLng, {
            icon: greenIcon,
            draggable : true
          }).bindPopup("origin");
        } else if(i == n-1) {
          return L.marker(wp.latLng, {
            icon: redIcon,
            draggable :true
          }).bindPopup("destination");
        }else{
            return L.marker(wp.latLng, {
              draggable :true
            }).bindPopup("sub route");
    
          }
      },
    }).addTo(map);

    if(map) return () => map?.removeControl(routingControl);
  }, [from, to, map]);

  return null;
}


export default Routing
import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Map from '../../components/Map/Map';


const MapView = () => {
      const location = useLocation();  
      const navigate = useNavigate();  
    
    //   const [postition,setPostition] = useState({lat: 0,lng : 0})
      const [data,setData] = useState({})
    
    
    
          useEffect(() => {
   
    
        }, [])
  return (
    <>
        <div>MapView</div>

    <Map lat={location.state.lat} lng={location.state.lng}/>

    </>
  )
}

export default MapView
/**
 * 
 * 
 import  {View, Text} from 'react-native'
import Map from "../../components/Map/Map";

const MapViewScreen = (props) =>{

    const lat = props.route.params.lat;
    const lng = props.route.params.lng;


    return<View style={{justifyContent: 'center'}}>
        <Text></Text>
     <Map lat={lat} lng={lng}/>

    </View>
}

 */
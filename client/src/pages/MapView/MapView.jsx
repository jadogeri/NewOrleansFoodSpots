import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import  Map from '../../components/Map/Mapper';



const MapView = () => {
      const location = useLocation();  
      const navigate = useNavigate();  
    
    //   const [postition,setPostition] = useState({lat: 0,lng : 0})
      const [data,setData] = useState({})
    
    
    
          useEffect(() => {
   
    
        }, [])
  return (
    

    <Map lat={location.state.lat} lng={location.state.lng}

    />

  )
}

export default MapView

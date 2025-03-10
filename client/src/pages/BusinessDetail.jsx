import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import useBusinessDetail from '../hooks/useBusinessDetail';
import { useEffect,  useState } from 'react';
import Location from '../components/Location/Location';


const BusinessDetail = () => {
  const location = useLocation();  
  const navigate = useNavigate();  

  const [ searchBusiness, business, errorMessage] = useBusinessDetail()
  const [postition,setPostition] = useState({lat: 0,lng : 0})
  const [data,setData] = useState({})



      useEffect(() => {
        searchBusiness(location.state.id)
        .then((record)=>{

     setData(record)
        })

    }, [])

    console.log("response after use effect search business ====", business)



  return (
    <>
    data
    <div>{JSON.stringify(business,null,3)}</div>
    <button title='VIEW LOCATION ON MAP' 
     onClick={()=>{     
      navigate("/dashboard/business/mapview", {
        state:{
          lat : business.coordinates.latitude,
          lng:business.coordinates.longitude
        }
      })
    }}
    
   style={{backgroundColor:'green', cursor:"pointer"}}>VIEW LOCATION ON MAP</button>

 

    </>
  )
}

export default BusinessDetail







/**
 * 
 import React, {useState, useEffect} from "react";
import {Platform,View, Text, FlatList , Image,ScrollView,Button} from "react-native"
import {FlatList as ReactFlatList} from "flatlist-react/lib";
import styles from "./WebResultsShowStyles"
import {api_root } from "../../api/yelp"
import Location from "../../components/Location/Location";
import { useNavigation } from "@react-navigation/native";


const WebResultsShowScreen = (props)=>{
    const navigation = useNavigation()
    const [result,setResult] = useState(null);

    const [postition,setPostition] = useState({lat: 0,lng : 0})

    const id = props.route.params.id;

    console.log(id);

    const getResult = async (id) => {
       const response =  await fetch(api_root + `${id}`)
       let data = await response.json();

       setResult(data);
    }

    useEffect(()=> {getResult(id)}, [])
    if(!result){
        return null;
    }
       
    return Platform.OS !== 'web'? 
    <div>
        <h1>this is web in div</h1>
      

    </div> : 
    
    <ScrollView>
        <Text>{result.name}</Text>
        <FlatList
        
        horizontal
        showsHorizontalScrollIndicator={true}
            data={result.photos}
            keyExtractor={(photo) =>{return photo}}
            renderItem={({item})=>{
                return <Image  style={{width:400,height:200}} source={{uri : item}} />
            }}        
        />

        <Location 
            address1={result.location.address1}
            address2={result.location.address2}
            city ={result.location.city}
            state ={result.location.state}
            zip_code ={result.location.zip_code}
        />
        <h5>longitude : {result.coordinates.longitude}</h5>
            <h5>latitude : {result.coordinates.latitude}</h5>
            <h5>display_phone : {result.display_phone}</h5>
            <h5>phone : {result.phone}</h5>
        <Text>PHONE NUMBER</Text>
        <Text>{result.phone}</Text>
            <Button title='VIEW LOCATION ON MAP' onPress={()=>{navigation.navigate('MapView',{
                lat : result.coordinates.latitude,
                lng:result.coordinates.longitude
            })}}/>
        
    </ScrollView>

}


export default WebResultsShowScreen;
 */
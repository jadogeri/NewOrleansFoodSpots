import React from "react";
import { View,Text } from "react-native";

const RenderCompany = (props) =>{

    console.log(props)
    return (
        
        <li key={props.id}>
          
          <h5>{props.name}</h5>
          
            <Text style={{flexDirection:'row'}}>{}</Text>
            <img style={{height:100,width:100}} key={props.id}src={props.image_url}/> 
            <h5>longitude : {props.coordinates.longitude}</h5>
            <h5>latitude : {props.coordinates.latitude}</h5>
            <h5>display_phone : {props.display_phone}</h5>
            <h5>phone : {props.phone}</h5>

            <h5>id : {props.id}</h5>
            <h5> is closed : {props.is_closed === true?'yes':'no'}</h5>
            <h5>location : {JSON.stringify(props.location)}</h5>
            <h5>price : {props.price}</h5>
            <h5>rating : {props.rating}</h5>
            <h5>review count : {props.review_count}</h5>
                       
        </li>

);
}
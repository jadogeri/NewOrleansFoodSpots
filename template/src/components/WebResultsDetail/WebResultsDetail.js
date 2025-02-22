import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "react-router-dom";


const WebResultsDetail = (result, index) => {

    const navigation = useNavigation();

    return (


        <li key={index} >

            <Text>id : {result.id}</Text>
            <h5>{result.name}</h5>

            <Text style={{ flexDirection: 'row' }}></Text>
            <img style={{ height: 100, width: 100 }} src={result.image_url} />

            
            <h5> is closed : {result.is_closed === true ? 'yes' : 'no'}</h5>
            {/* <h5>location : {JSON.stringify(props.result.location)}</h5> */}
            <h5>price : {result.price}</h5>
            <h5>rating : {result.rating}</h5>
            <h5>review count : {result.review_count}</h5>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("WebResultsShow",{id :result.id})}}
            style={{ width: 100, height: 40,borderColor:'black',borderWidth:2,backgroundColor:'#fffdd0' }}>
                <Text>See more details</Text>
            </TouchableOpacity>

        </li>
    );
}

export default WebResultsDetail;
import React from "react";
import  {View, Text} from 'react-native'
import Map from "../../components/Map/Map";

const MapViewScreen = (props) =>{

    const lat = props.route.params.lat;
    const lng = props.route.params.lng;


    return<View>
        <Text></Text>
     <Map lat={lat} lng={lng}/>

    </View>
}

export default MapViewScreen;

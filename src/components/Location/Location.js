import React from "react";
import {Text, StyleSheet, View} from "react-native-web"

const Location = (props) =>{
    return <View>
        <Text>Location</Text>
        <Text>{props.address1}</Text>
        <Text>{props.address2}</Text>
        <Text>{props.city}, {props.state} {props.zip_code}</Text>
        
    </View>
}

export default Location;
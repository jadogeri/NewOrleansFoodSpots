import React from "react";
import { Text, View, Image } from "react-native"
import styles from "./styles"

const WebResultsDetail = (props) => {
    return <div key={props.result.id} >
        <img style={styles.image} src={{ uri: props.result.image_url }} />
        <Text style={styles.name}>{props.result.name} </Text>
        <h1>name is  {props.result.name}</h1>
    </div>
}

export default WebResultsDetail;
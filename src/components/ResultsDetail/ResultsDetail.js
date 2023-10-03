import React from "react";
import { Text, View, Image } from "react-native"
import styles from "./styles"

const ResultsDetail = (props) => {
    return <View>
        <Image style={styles.image} source={{ uri: props.result.image_url }} />
        <Text style={styles.name}>{props.result.name}</Text>
    </View>
}

export default ResultsDetail;
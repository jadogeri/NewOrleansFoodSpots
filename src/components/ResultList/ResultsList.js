import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import styles from "./styles"
import ResultsDetail from "../ResultsDetail/ResultsDetail"
import { withNavigation } from "react-navigation"

const ResultsList = (props) => {
    if(!props.results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{props.headerText}</Text>
        <Text>Results: {props.results.length}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.results}
            keyExtractor={(result) => { return result.id }}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={()=>props.navigation.navigate("ResultsShow",{id: item.id})}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <ResultsDetail result={item} /> 
                        </View>
                </TouchableOpacity>
            }}
        />
        </View>

    </View>
}

export default withNavigation(ResultsList);
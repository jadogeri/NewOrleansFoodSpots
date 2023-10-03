import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import styles from "./styles"
import ResultsDetail from "../ResultsDetail/ResultsDetail"
import { useNavigation } from "@react-navigation/native";


const ResultsList = (props) => {
    const navigation = useNavigation();
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
                return <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id: item.id})}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <ResultsDetail result={item} /> 
                        </View>
                </TouchableOpacity>
            }}
        />
        </View>

    </View>
}

//export default withNavigation(ResultsList);
export default ResultsList;//
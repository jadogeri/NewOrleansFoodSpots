import React from "react"
import { View, Text, TouchableOpacity,FlatList } from "react-native"
import styles from "./styles"
import WebResultsDetail from "../ResultsDetail/ResultsDetail"
import { useNavigation } from "@react-navigation/native";


const WebResultsList = (props) => {
    const navigation = useNavigation();
    if(!props.results.length){
        return null;
    }
    return <div >
        <Text style={styles.title}>{props.headerText}</Text>
        <Text>Results: {props.results.length} in webresultlist line 16</Text>
        <div style={{flex:1,flexDirection:'row'}}>
        <FlatList  
            data={props.results}  
            keyExtractor={(item)=>{return item.id}}          
            renderItem={(item) => {
                return <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id: item.id})}>                   
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                            <WebResultsDetail result={item} /> 
                        </View>
                       
                </TouchableOpacity>
            }}
        />
        </div>

    </div>
}

//export default withNavigation(ResultsList);
export default WebResultsList;//
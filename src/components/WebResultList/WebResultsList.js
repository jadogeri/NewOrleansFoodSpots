import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import FlatList  from "flatlist-react";
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
            key={(item)=>{return item.id}}
            wrapperHtmlTag="div"            
            list={props.results}
            renderItem={(item,index) => {
                return <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id: item.id})}>
                         <br/>
                        
                     
                            {/* <WebResultsDetail result={item} />  */}
                    
                       
                </TouchableOpacity>
            }}
        />
        </div>

    </div>
}

//export default withNavigation(ResultsList);
export default WebResultsList;//
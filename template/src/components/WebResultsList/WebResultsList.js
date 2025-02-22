import React, { useState } from "react"
import { View, Text, TouchableOpacity, FlatList} from "react-native"
//import FlatList from "flatlist-react"
import styles from "./styles"
import WebResultsDetail from "../WebResultsDetail/WebResultsDetail"
import { useNavigation } from "react-router-dom";

const WebResultsList = (props) => {
    const navigation = useNavigation();
    if (!props.results.length) {
        return null;
    }
    return <View >
        <Text style={styles.title}>{props.headerText}</Text>

        <View style={{ flex: 1, flexDirection: 'row',alignItems:'row' }}>
            <div style={{ flex: 1, flexDirection: 'row'}}>
            <FlatList
                list={props.results}
                displayGrid
                key={(item)=>{return item.id}}
                renderOnScroll
                hasMoreItems                
                renderItem={WebResultsDetail }
                renderWhenEmpty={() => <div>List is empty!</div>}
            />
            </div>
            {/* <FlatList  
            list={props.results}    
            key={(item)=>{return item.id}}
            displayGrid
           hasMoreItems           
            renderOnScroll
           // wrapperHtmlTag="div"  
            renderItem={(result)=><TouchableOpacity 
                                        onPress={()=>{navigation.navigate("WebResultsShow",{id:result.id})}}>
                                  <WebResultsDetail result={result} key={result.id}/>
                                  </TouchableOpacity>}
            renderWhenEmpty={() => <div>List is empty!</div>}
                     
            // renderItem={(item) => {
            //     return <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id: item.id})}>                   
            //         <View style={{ flex: 1, flexDirection: 'row' }}>
            //                 <WebResultsDetail result={item} /> 
            //             </View>
                       
            //     </TouchableOpacity>
            // }}
        /> */}
        </View>

    </View>
}

export default WebResultsList;//
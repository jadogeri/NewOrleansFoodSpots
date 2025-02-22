import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles"
import {Entypo} from "react-native-vector-icons"
const SearchBar = (props) => {

    
    return<View style={styles.background}>
        <Entypo name="magnifying-glass" style={styles.magnifyingGlass}/>
         <TextInput style={styles.input} 
                    placeholder="Search"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={props.Searchterm}
                    onEndEditing={()=>{props.onSearchTermSubmit()}}
                    onChangeText={(newTerm)=>{props.onTermChange(newTerm)}}/>
         </View>
}

export default SearchBar;
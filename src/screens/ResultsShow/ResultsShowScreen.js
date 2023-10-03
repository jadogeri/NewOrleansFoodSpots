import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Image} from "react-native-web"
import styles from "./ResultShowStyles"
import {api_root } from "../../api/yelp"
import Location from "../../components/Location/Location";

const ResultsShowScreen = (props)=>{
    const [result,setResult] = useState(null);
    const id = props.navigation.getParam('id');
    console.log(id);

    const getResult = async (id) => {
       const response =  await fetch(api_root + `${id}`)
       let data = await response.json();

       setResult(data);
    }

    useEffect(()=> {getResult(id)}, [])
    if(!result){
        return null;
    }
    return <View>
        <Text>{result.name}</Text>
        <FlatList
        horizontal
            data={result.photos}
            keyExtractor={(photo) =>{return photo}}
            renderItem={({item})=>{
                return <Image  style={{width:400,height:200}} source={{uri : item}} />
            }}        
        />
        <Location 
            address1={result.location.address1}
            address2={result.location.address2}
            city ={result.location.city}
            state ={result.location.state}
            zip_code ={result.location.zip_code}
        />
        <Text>PHONE NUMBER</Text>
        <Text>{result.phone}</Text>
        
    </View>

}

export default ResultsShowScreen;
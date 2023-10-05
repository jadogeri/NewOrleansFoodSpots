import React,{useEffect} from "react";
import {Platform, View, StyleSheet, Text,ImageBackground } from "react-native";
import styles from "./HomeStyles";

const HomeScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      //alert('I am appearing...', 'After 5 seconds!');
      props.navigation.navigate('Main',{nav:props})
    }, 5000);
  }, []);
  return (
    <ImageBackground style={{height:'100%',width:'100%',justifyContent:'center'}} source={require('../../../assets/food/logo-black.jpg')}>
    <View style={styles.center}>
      {/* <Text>{Platform.OS === 'web'?'web':'not web'}</Text> */}
    </View>
    </ImageBackground>
  );

};


export default HomeScreen;
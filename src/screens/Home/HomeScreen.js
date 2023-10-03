import React,{useEffect} from "react";
import {Platform, View, StyleSheet, Text } from "react-native";
import styles from "./HomeStyles";

const HomeScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      //alert('I am appearing...', 'After 5 seconds!');
      props.navigation.navigate('Main',{nav:props})
    }, 5000);
  }, []);
  return (
    <View style={styles.center}>
      <Text>This is the HomeScreen screen</Text>
      <Text>{Platform.OS === 'web'?'web':'not web'}</Text>
    </View>
  );

};


export default HomeScreen;
import React from "react";
import {View,Text,Button,Image,TouchableOpacity} from 'react-native'
import styles from "./SplashStyles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const SplashScreen = ({navigation}) =>{
    return <View style={styles.container}>
        <Text>Splash Screen</Text>
        <View style={styles.header}>
           <Animatable.Image
           animation='bounceIn'
           duration={1500}
           source={require('../../../assets/logo/icon-cream.png')}
           style={styles.logo} 

           />
        </View>
        <Animatable.View animation='fadeInUpBig' style={styles.footer}>
            <Text style={styles.title}>Stay Connected with everyOne!</Text>
            <Text style={styles.text}>Stay Connected with everyOne!</Text>
<TouchableOpacity style={styles.signIn} onPress={()=>{navigation.navigate('signin')}}>
<Text style={styles.textSign}>Get Started</Text>
<MaterialIcons name='navigate-next'
               color='white'
               size={20}/>
</TouchableOpacity>

       
       
        </Animatable.View>
    </View>
}

export default SplashScreen;
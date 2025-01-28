import React, { useContext } from "react";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import styles from "./HomeStyles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
//import { Context as AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    //const { state } = useContext(AuthContext)
    const navigate = useNavigate();
    return <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image
                animation='bounceIn'
                duration={1500}
                source={require('../../assets/logo/icon-cream.png')}
                style={styles.logo}

            />
        </View>
        <Animatable.View animation='fadeInUpBig' style={styles.footer}>
            <Text style={styles.title}>Best Food in the City of New Orleans! </Text>
            <Text style={styles.text}>Stay Connected with everyOne!</Text>
            <TouchableOpacity style={styles.signIn} onPress={() => { navigate('login') }}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name='navigate-next'
                    color='white'
                    size={20} />
            </TouchableOpacity>



        </Animatable.View>
    </View>
}

export default Home;
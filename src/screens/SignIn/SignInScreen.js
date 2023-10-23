import React, { useState } from "react";
import styles from "./SignInStyles";
import { View, Text, Button, Image, TouchableOpacity , TextInput} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { StatusBar } from "react-native-web";


let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false }
const SignInScreen = ({navigation}) => {


    const [data, setData] = useState(defaultData)
    const textInputChange = (val) => {
        if (val.trim().length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const passwordChangeHandler = (value) => {
        setData({
            ...data,
            password: value
        })
    }

    const updateSecureEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry })
    }



    return <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
        </View>
        <Animatable.View style={styles.footer} animation='fadeInUpBig'>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name='user-o' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Email" style={styles.textInput}
                    autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                />
                {data.check_textInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' color='brown' size={20} />
                    </Animatable.View>
                    : null}
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

            <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Password" style={styles.textInput} display='none'
                    autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(value) => { passwordChangeHandler(value) }}

                />
                <TouchableOpacity onPress={updateSecureEntry}>
                    {data.secureTextEntry ?
                    <Feather name='eye-off' color='brown' size={20} />
                    :
                    <Feather name='eye' color='brown' size={20} />}
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>{navigation.navigate('signin')}}
                style={[styles.signIn,{backgroundColor:'brown'}]}>
                <Text style={{color:'white'}}>Sign In</Text>           
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}
                style={[styles.signIn,{borderColor:'brown',borderWidth:1,marginTop: 15}]}>
                <Text style={{color:'brown'}}>Sign Up</Text>           
            </TouchableOpacity>
        </Animatable.View>

    </View>
}

export default SignInScreen;
import React, { useState, useContext } from "react";
import styles from "./SignUpStyles";
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { StatusBar } from "react-native";
import { Context as AuthContext } from '../../context/AuthContext'


let defaultData = { email: '', password: '', confirmPassword: '', username: '', secureTextEntry: true, confirmSecureTextEntry: true, check_textInputChange: false , check_emailTextInput: false}
const SignUpScreen = ({ navigation }) => {
    const {signup} = useContext(AuthContext);


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

    const emailHandler = (val) => {
        if (val.trim().length !== 0) {
            setData({
                ...data,
                email: val,
                check_emailTextInput: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_emailTextInput: false,
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

    const confirmPasswordChangeHandler = (value) => {
        setData({
            ...data,
            confirmPassword: value
        })
    }

    const updateSecureTextEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry })
    }





    return <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
        </View>

        <Animatable.View style={styles.footer} animation='fadeInUpBig'>

        <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <Ionicons name='person' color='#05375a' size={20}
                />
                <TextInput placeholder="Enter Username" style={styles.textInput}
                    autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                />
                {data.check_textInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' color='green' size={20} />
                    </Animatable.View>
                    : null}
            </View>

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <MaterialIcons name='email' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Email" style={styles.textInput}
                    autoCapitalize="none" onChangeText={(input) => { emailHandler(input) }}
                />
                {data.check_emailTextInput ?
                    <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' color='green' size={20} />
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
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                        <Feather name='eye-off' color='brown' size={20} />
                        :
                        <Feather name='eye' color='brown' size={20} />}
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>

            <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={20}
                />
                <TextInput placeholder="Confirm Password" style={styles.textInput} display='none'
                    autoCapitalize="none" secureTextEntry={data.confirmSecureTextEntry ? true : false}
                    onChangeText={(value) => { confirmPasswordChangeHandler(value) }}

                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {data.confirmSecureTextEntry ?
                        <Feather name='eye-off' color='brown' size={20} />
                        :
                        <Feather name='eye' color='brown' size={20} />}
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { signup({username :data.username, email: data.email, password: data.password}) ;
                                                    navigation.navigate('signin')}}
                    style={[styles.signIn, { backgroundColor: 'brown' }]}>
                    <Text style={{ color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { navigation.goBack();}}
                style={[styles.signIn, { borderColor: 'brown', borderWidth: 1, marginTop: 15 }]}>
                <Text style={{ color: 'brown' }}>Sign In</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>
}

export default SignUpScreen;
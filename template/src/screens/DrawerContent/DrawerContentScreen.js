import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DrawerContentStyles';
import { Context as AuthContext } from '../../context/AuthContext'

export function DrawerContent(props) {

    const [isDarkTheme,setIsDarkTheme]=useState(false);
    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }
    const { state,signout } = useContext(AuthContext);
    const { username, email, id } = state
    const paperTheme = useTheme();


    return <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} >
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={styles.title}>username === {username}</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                            <Caption style={styles.caption}>email === {email}</Caption>
                            <Caption style={styles.caption}>id === {id}</Caption>


                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"

                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { props.navigation.navigate('Profile') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="ChatRoom"
                        onPress={() => { props.navigation.navigate('Chat') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="settings-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => { props.navigation.navigate('Setting') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => { props.navigation.navigate('Setting') }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()
                    }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => { signout() }}
            />
        </Drawer.Section>
    </View>
}


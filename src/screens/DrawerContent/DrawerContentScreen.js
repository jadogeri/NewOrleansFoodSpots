import React from 'react';
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


export function DrawerContent(props) {

    const paperTheme = useTheme();


    return <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} >
            <Text>Drawer Content</Text>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>

        </Drawer.Section>
    </View>
}


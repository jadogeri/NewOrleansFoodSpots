import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from './src/screens/Home/HomeScreen'
import About from './src/screens/About/AboutScreen'
import Contact from './src/screens/Contact/ContactScreen'
import ResultsShow from './src/screens/ResultsShow/ResultsShowScreen'
import WebResultsShow from './src/screens/WebResultsShow/WebResultsShowScreen'
import Search from './src/screens/Search/SearchScreen'
import Chat from "./src/screens/Chat/ChatScreen";
import Setting from "./src/screens/Setting/SettingScreen"
import Icon from "react-native-vector-icons/Ionicons";
import MapViewScreen from "./src/screens/MapView/MapViewScreen";
import { DrawerContent } from "./src/screens/DrawerContent/DrawerContentScreen";
// import Test from './test'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator initialRouteName="MainTop">
      <TopTab.Screen name="MainTop" component={MainStackNavigator}

      />
      <TopTab.Screen name="ContactTop" component={ContactStackNavigator}
      />
    </TopTab.Navigator>
  );
}


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveTintColor: 'gold',
      tabBarActiveBackgroundColor: 'brown',
      activeColor: "pink",
      inactiveColor: "black",
      barStyle: { backgroundColor: 'purple' },
    }} activeColor='gold' >
      <Tab.Screen name="HomeTab" component={MainStackNavigator}
        options={{ tabBarIcon: () => (<Icon name="ios-home" size={26} color="gold" />) }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{ tabBarIcon: () => (<Icon name="ios-search" size={26} color="gold" />) }}
      />
      <Tab.Screen name="Setting" component={Setting}
        options={{ tabBarIcon: () => (<Icon name="ios-settings" size={26} color="gold" />) }}
      />
      <Tab.Screen name="Chat" component={Chat}
        options={{ tabBarIcon: () => (<Icon name="ios-chatbox-ellipses" size={26} color="gold" />) }}
      />
    </Tab.Navigator>
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="Main" component={MainFlowStackNavigator} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const MainFlowStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Search' screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ResultsShow" component={ResultsShow} />
      <Stack.Screen name="WebResultsShow" component={WebResultsShow} />
      <Stack.Screen name="MapView" component={MapViewScreen} />

    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />} component={DrawerContent} screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitle: {
          fontWeight: 'bold',
        }
      }}>
        <Drawer.Screen name="BottomTabNav" component={BottomTabNavigator} />
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} options={{ title: 'Contact' }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});


export default DrawerNavigator;

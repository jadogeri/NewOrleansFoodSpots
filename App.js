import React from "react";
import { StyleSheet,View , Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from './src/screens/Home/HomeScreen'
import About from './src/screens/About/AboutScreen'
import Contact from './src/screens/Contact/ContactScreen'
import ResultsShow from './src/screens/ResultsShow/ResultsShowScreen'
import Search from './src/screens/Search/SearchScreen'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={MainStackNavigator} />
      <TopTab.Screen name="Contact" component={ContactStackNavigator} />
    </TopTab.Navigator>
  );
}


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
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
      <Stack.Screen name="Main" component={MainFlowStackNavigator}/>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const MainFlowStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Search' screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ResultsShow" component={ResultsShow} />
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
    <Drawer.Navigator>
    <Drawer.Screen name="TopTab" component={TopTabNavigator} />
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
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

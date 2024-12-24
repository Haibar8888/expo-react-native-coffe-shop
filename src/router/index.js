import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Favorit, Cart, Profile } from '../pages';
import { SplashScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '../components/moleculs/bottomTabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorit" component={Favorit} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Router = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default Router

const styles = StyleSheet.create({})
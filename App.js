import React from 'react';
import HomeScreen from './HomeScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, Button } from 'react-native'
import WebScreen from './WebScreen'
const AppNavigator = createStackNavigator({
  Principal: {
    screen: HomeScreen
  },
  WebView: {
    screen: WebScreen
  }
}, { initialRouteName: 'Principal' })
export default createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { createNavigator, createAppContainer, createNavigationContainer } from 'react-navigation'
import RouterApp from "./src/router/index"
import LoginScreen from "./src/screens/LoginScreen";
import ForgotPassScreen from "./src/screens/ForgotPassScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
  return (
    <RouterApp />
  );
}
export default App;


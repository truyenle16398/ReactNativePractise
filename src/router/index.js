import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import ForgotPassScreen from "../screens/ForgotPassScreen"
const Stack = createStackNavigator();
const RouterApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginSceen">
                <Stack.Screen name="LoginSceen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RouterApp;
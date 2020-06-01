import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ForgotPassScreen = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const { acc } = router.params;


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>
            <Text>{acc.userName}</Text>
            <Text>{acc.password}</Text>
        </View>
    );
}
export default ForgotPassScreen;
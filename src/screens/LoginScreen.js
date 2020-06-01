import React, { useState, useEffect, useMemo } from 'react';
import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { useNavigation, NavigationHelpersContext } from '@react-navigation/native';
import { styles } from "../styles/LoginScreenStyle";

const LoginScreen = () => {
    const navigation = useNavigation();
    const users = {
        name: "linh",
        phoneNum: "0974026935"
    }
    const [acc, setAcc] = useState({
        userName: "",
        password: ""
    })

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.imageBackground}>
                <ScrollView>
                    <Image source={require('../../assets/logo.png')} style={styles.imageLogo} />
                    <View style={styles.container2}>

                        <Text style={styles.text}>Login</Text>

                        <TextInput
                            style={styles.inputText}
                            defaultValue={acc.userName}
                            onChangeText={(value) => {
                                setAcc({ ...acc, userName: value })
                            }}
                            placeholder="Enter Your Email"
                            TextInput="email-address" />

                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter Your Password"
                            keyboardType="email-address"
                            secureTextEntry
                            onChangeText={(value) => {
                                setAcc({ ...acc, password: value })
                            }}
                        />

                        <TouchableOpacity onPress={() => {
                            navigation.navigate("ForgotPassScreen", { acc })
                        }}>
                            <Text style={styles.forgotPass}>Forgot your Password</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}>
                            <View>
                                <Text style={
                                    {
                                        color: "#fff",
                                        textAlign: "center",
                                        fontSize: 25,
                                        margin: 10,
                                        fontWeight: "bold"
                                    }
                                }>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

        </View >)
}
export default LoginScreen;

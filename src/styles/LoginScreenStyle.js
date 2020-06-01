import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    container2: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 80,
        marginBottom: 50,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        backgroundColor: "#fff"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover"
    },
    imageLogo: {
        alignSelf: "center",
        marginTop: 100,
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        color: "#9598a4"
    },
    inputText: {
        marginLeft: 30,
        marginTop: 30,
        marginRight: 50,
        borderBottomColor: "#000000"
    },
    forgotPass: {
        textAlign: "center",
        marginTop: 30,
        textDecorationLine: "underline"
    },
    buttonStyle: {
        backgroundColor: "#32c5a5",
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
});
export { styles }


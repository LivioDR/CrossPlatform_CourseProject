import { StyleSheet } from "react-native";

export default headerStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 50,
        backgroundColor: 'black',
    },
    image: {
        alignSelf: 'center',
        width: 50,
        height: 50,
    },
    title:  {
        color: 'white',
        textAlign: 'left',
        paddingLeft: '2%',
        fontSize: 32,
    }
})



import { StyleSheet } from "react-native";

export default ConfirmBtnStyle = StyleSheet.create({
    confirmWrapper: {
        width: '50%',
        marginHorizontal: '25%',
        marginVertical: '1%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'teal',
        height: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
    },
    confirmText: {
        fontSize: 14,
        color: 'white',
    },
    loading: {
        backgroundColor: 'lightgrey',
        color: 'black',
    }
})
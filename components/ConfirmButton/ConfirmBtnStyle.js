import { StyleSheet } from "react-native";

export default ConfirmBtnStyle = StyleSheet.create({
    confirmWrapper: {
        width: '50%',
        margin: '0 auto',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'aqua',
        height: '3em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
    },
    confirmText: {
        fontSize: 14,
        color: 'black',
    },
    loading: {
        backgroundColor: 'lightgrey',
    }
})
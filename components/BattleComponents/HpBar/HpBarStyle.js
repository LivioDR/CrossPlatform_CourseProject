import { StyleSheet } from "react-native";

const HpBarStyle = StyleSheet.create({
    hpWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    hpBackground: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'red',
        width: '100%',
    },
    hpFill: {
        height: '100%',
        minHeight: 50,
        backgroundColor: 'green',
        transition: '1s',
    },

})

export default HpBarStyle
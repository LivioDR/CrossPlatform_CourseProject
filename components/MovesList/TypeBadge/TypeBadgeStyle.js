import { StyleSheet } from "react-native";

const TypeBadgeStyle = StyleSheet.create({
    typeBadgeContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%', 
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 20,
        marginHorizontal: 2,
    },
    typeBadgeText : {
        // -webkit-text-stroke: 0.4px black;
        textAlign: 'center',
        color: 'white',
    }

})

export default TypeBadgeStyle
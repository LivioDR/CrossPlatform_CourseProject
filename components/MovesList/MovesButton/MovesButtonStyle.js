import { StyleSheet } from "react-native";

const MovesButtonStyle = StyleSheet.create({
    movesButton: {
        width: '90%',
        height: '3em',
        borderRadius: 25,
        marginHorizontal: '5%',
        marginVertical: '1%',
    },
    selected: {
        backgroundColor: 'green',
        color: 'white',
    },
    notSelected: {
        backgroundColor: 'lightgray',
        color: 'black',
    },
    movesButtonTextWrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 5,
    },
    movesButtonText: {
        width: '19%',
        margin: '0%',
        fontSize: 12,
        textAlign: 'center',
    },
})

// .movesButtonTextWrapper > p:nth-child(3){
//     width: 5%;
// }
// .movesButtonTextWrapper > p:nth-child(1){
//     font-size: small;
// }

export default MovesButtonStyle
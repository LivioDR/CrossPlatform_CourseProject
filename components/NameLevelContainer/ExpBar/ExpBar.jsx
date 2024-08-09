import React from "react";
import { View, Text } from "react-native";

const expStyles = {
    wrapper: {
        width: '100%',
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    label: {
        width: '20%',
        fontSize: 12,
        color: 'white',
    },
    container: {
        width: '80%',
        height: 20,
        borderRadius: 50,
        backgroundColor: 'skyblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    filling: {
        borderRadius: 50,
        height: 20,
        backgroundColor: 'deepskyblue',
    },
}


const ExpBar = ({expPercentage}) => {

    const percentage = 15 + ((expPercentage*85)/100)

    return(
        <>
        <View style={expStyles.wrapper}>
            <Text style={expStyles.label}>Exp</Text>
            <View style={expStyles.container}>
                <View style={{...expStyles.filling, width: `${percentage}%`}}>
                </View>
            </View>
        </View>
        </>
    )
}
export default ExpBar
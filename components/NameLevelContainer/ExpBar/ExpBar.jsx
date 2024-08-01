import React from "react";
import { View, Text } from "react-native";

const expStyles = {
    wrapper: {
        width: '100%',
        height: '2em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        width: '20%',
        fontSize: 12,
    },
    container: {
        width: '80%',
        height: '2em',
        borderRadius: 50,
        backgroundColor: 'skyblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        border: '1px solid black',
    },
    filling: {
        borderRadius: 50,
        backgroundColor: 'deepskyblue',
        border: '1px solid black',
    },
}


const ExpBar = ({expPercentage}) => {

    return(
        <>
        <View style={expStyles.wrapper}>
            <Text style={expStyles.label}>Exp</Text>
            <View className="exp-container" style={expStyles.container}>
                <View className="exp-filling" style={{...expStyles.filling, width: `${expPercentage}%`}}>

                </View>
            </View>
        </View>
        </>
    )
}
export default ExpBar
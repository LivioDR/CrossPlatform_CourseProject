import React from "react";
import { View, Text } from "react-native";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%',
    },
    statName: {
        fontSize: 12,
        width: '10%',
    },
    barContainer: {
        width: '80%',
    },
    statBar: {
        height: '0.5em',
    },
    statNumber :{
        width: '5%',
        fontSize: 12,
    }
}


const StatBar = ({name, value, maxValue}) => {
    const percentage = (value/maxValue)*100
    return(
        <View style={styles.container}>
            <Text style={styles.statName}>{name}</Text>
            <View style={styles.barContainer}>
                <View style={{...styles.statBar, width:`${percentage}%`, backgroundColor: `hsl(${percentage}deg 60% 45%)`}}> 
                </View>
            </View>
            <Text style={styles.statNumber}>{value}</Text>
        </View>
    )
}
export default StatBar
import React from "react";
import ExpBar from "./ExpBar/ExpBar";
import { View, Text } from "react-native";

const styles = {
    wrapper: {
        width: '90%',
        margin: '5%',
    },
    textContainer: {
        textAlign: 'center',
        width: '100%',
    },
    name: {
        WebkitTextStroke: '0.2px black',
        color: 'white',
        fontSize: 18,
    },
    level: {
        WebkitTextStroke: '0.5px black',
        color: 'white',
        fontSize: 12,
    }
}

const NameLevelContainer = ({name, level, expPercentage}) => {

    return(
        <View style={styles.wrapper}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.level}>
                    Lv: {level}
                </Text>
            </View>
            <ExpBar expPercentage={expPercentage}/>
        </View>
    )
}
export default NameLevelContainer
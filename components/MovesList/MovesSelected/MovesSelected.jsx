import React from "react";
import MovesButton from "../MovesButton/MovesButton";
import { View, Text } from "react-native";

const MovesSelected = ({moves}) => {
    return(
        <View style={{width: '100%', textAlign: 'center', marginTop: '2%'}}>
            {
                moves.length >= 1 &&
                <Text>Selected Moves</Text>
            }
            {moves.map(move => <MovesButton key={move.id + "selectedContainer"} move={move} actionable={false}/>)}
        </View>
    )
}
export default MovesSelected
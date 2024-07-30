import React from "react";
import { View } from "react-native";
import MovesButton from "./MovesButton/MovesButton";

const wrapperStyle = {
    width: '100%',
    height: '35vh',
    overflowY: 'scroll',
}

const MovesList = ({moves, addMove, removeMove}) => {
    return(
        <View className="movesListWrapper" style={wrapperStyle}>
            {moves.map(move => <MovesButton key={move.id} move={move} addMove={addMove} removeMove={removeMove}/>)}
        </View>
    )

}
export default MovesList
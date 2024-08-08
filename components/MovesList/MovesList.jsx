import React from "react";
import { ScrollView } from "react-native";
import MovesButton from "./MovesButton/MovesButton";

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // height: '100%',
    minHeight: 350,
    overflowY: 'scroll',
}

const MovesList = ({moves, addMove, removeMove}) => {
    return(
        <ScrollView className="movesListWrapper" contentContainerStyle={wrapperStyle}>
            {moves.map(move => <MovesButton key={move.id} move={move} addMove={addMove} removeMove={removeMove}/>)}
        </ScrollView>
    )

}
export default MovesList
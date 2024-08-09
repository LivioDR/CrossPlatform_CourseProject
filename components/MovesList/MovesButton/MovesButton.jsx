import React,{ useState } from "react";
import { View, Text, Pressable } from "react-native";
import MovesButtonStyle from "./MovesButtonStyle";
import TypeBadge from "../TypeBadge/TypeBadge";

const MovesButton = ({move, addMove, removeMove, actionable = true}) => {
    const [isAdded, setIsAdded] = useState(false)

    const addThisMove = () => {
        addMove(move.id)
        setIsAdded(true)
    }
    const removeThisMove = () => {
        removeMove(move.id)
        setIsAdded(false)
    }

    const arrayFromLabel = move.label.split("|")

    if(actionable){
        if(isAdded){
            return(
                <Pressable style={{...MovesButtonStyle.movesButton, ...MovesButtonStyle.selected}} onPress={()=>removeThisMove()}>
                    <View style={MovesButtonStyle.movesButtonTextWrapper}>
                        <TypeBadge type={move.type} />
                        {arrayFromLabel.map(text=><Text key={move.id + text} style={{...MovesButtonStyle.movesButtonText, ...MovesButtonStyle.selected}}>{text}</Text>)}
                    </View>
                </Pressable>
            )
        }
        else{
            return(
                <Pressable style={{...MovesButtonStyle.movesButton, ...MovesButtonStyle.notSelected}} onPress={()=>addThisMove()}>
                    <View style={MovesButtonStyle.movesButtonTextWrapper}>
                        <TypeBadge type={move.type} />
                        {arrayFromLabel.map(text=><Text key={move.id + text} style={MovesButtonStyle.movesButtonText}>{text}</Text>)}
                    </View>
                </Pressable>
            )
        }
    }
    else{
        return(
            <Pressable style={{...MovesButtonStyle.movesButton, ...MovesButtonStyle.notSelected}}>
            <View style={MovesButtonStyle.movesButtonTextWrapper}>
                <TypeBadge type={move.type} />
                {arrayFromLabel.map(text=><Text key={move.id + text} style={MovesButtonStyle.movesButtonText}>{text}</Text>)}
            </View>
        </Pressable>
        )
    }


}
export default MovesButton
import React,{ useState } from "react";
import { View, Text, Pressable } from "react-native";
import './MovesButtonStyle.css'
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
                <Pressable className="movesButton selected" onPress={()=>removeThisMove()}>
                    <View className="movesButtonTextWrapper">
                        <TypeBadge type={move.type} />
                        {arrayFromLabel.map(text=><Text key={move.id + text} className="movesButtonText">{text}</Text>)}
                    </View>
                </Pressable>
            )
        }
        else{
            return(
                <Pressable className="movesButton not-selected" onPress={()=>addThisMove()}>
                    <View className="movesButtonTextWrapper">
                        <TypeBadge type={move.type} />
                        {arrayFromLabel.map(text=><Text key={move.id + text} className="movesButtonText">{text}</Text>)}
                    </View>
                </Pressable>
            )
        }
    }
    else{
        return(
            <Pressable className="movesButton not-selected">
            <View className="movesButtonTextWrapper">
                <TypeBadge type={move.type} />
                {arrayFromLabel.map(text=><Text key={move.id + text} className="movesButtonText">{text}</Text>)}
            </View>
        </Pressable>
        )
    }


}
export default MovesButton
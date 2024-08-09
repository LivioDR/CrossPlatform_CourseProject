import React, {useEffect, useState} from "react";
import { View } from "react-native";
import BattleContainer from "./BattleComponents/BattleContainer/BattleContainer.jsx";
import { startBattle } from "../services/battleLogic.js";
import ConfirmButton from "./ConfirmButton/ConfirmButton.jsx";

const BattlePage = ({nextPage, pokemonData, pokemonAttacks, rivalPokemonData, setPokemonData, setRivalPokemonData }) => {

    const [text, setText] = useState()
    const [isBattleOver, setIsBattleOver] = useState(false)

    const beginBattleSequence = () => {
        startBattle(pokemonData, pokemonAttacks, setPokemonData, rivalPokemonData, setRivalPokemonData, setText, setIsBattleOver)
    }

    useEffect(()=>{
        beginBattleSequence()
    },[])

    return(
        <View style={{height: '100%', width: '100%'}}>
            <BattleContainer pokemonData={pokemonData} rivalPokemonData={rivalPokemonData} battleText={text} />
            <View style={{height: 100, width: '100%'}}>
            {
                isBattleOver &&
                <ConfirmButton style={{height: 50}} confirmText="New game?" route={nextPage} ready={true} />
            }
            </View>
        </View>
    )
}
export default BattlePage
import React, {useEffect, useState} from "react";
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
        <>
            <BattleContainer pokemonData={pokemonData} rivalPokemonData={rivalPokemonData} battleText={text} />
            {
                isBattleOver &&
                <ConfirmButton confirmText="New game?" route={nextPage} ready={true} />
            }
        </>
    )
}
export default BattlePage
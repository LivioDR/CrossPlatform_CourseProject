import ConfirmButton from './ConfirmButton/ConfirmButton.jsx'
import MovesList from "./MovesList/MovesList.jsx";
import MovesSelected from "./MovesList/MovesSelected/MovesSelected.jsx";
import PokeImage from "./PokeImage/PokeImage.jsx";
import PokeStats from "./PokeStats/PokeStats.jsx";
import { setStabOnMoves } from "../services/getPokemonData.js";
import getRivalPokemonData from "../services/getRivalPokemon.js";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const MoveSelectionPage = ({nextPage, pokemonData, selectedMoves, setSelectedMoves, setRivalPokemonData}) => {

    const [movesNumberExceeded, setMovesNumberExceeded] = useState(false)
    const [noMovesSelected, setNoMovesSelected] = useState(false)
    const [areMovesOkay, setAreMovesOkay] = useState(false)
    const [loadingRival, setLoadingRival] = useState(false)

    const moveToBattle = async() => {
        setLoadingRival(true)
        // get the opponent data
        let rival = await getRivalPokemonData(pokemonData.level)
        setRivalPokemonData(rival)

        // set STAB on your moves
        let moves = setStabOnMoves(selectedMoves, pokemonData.types)
        setSelectedMoves(moves)

        setLoadingRival(false)
        nextPage()
    }


    const addMove = (moveId) => {
        const moveToAppend = [...pokemonData.moves].filter(move => move.id == moveId)
        setSelectedMoves(prev => {
            return [...prev, moveToAppend[0]]
        })
    }
    const removeMove = (moveId) => {
        setSelectedMoves(prev => {
            prev = prev.filter(move => move.id != moveId)
            return prev
        })
    }

    useEffect(()=>{
        if(selectedMoves.length == 0){
            setNoMovesSelected(true)
            setAreMovesOkay(false)
        }
        else if(selectedMoves.length > 4){
            setMovesNumberExceeded(true)
            setAreMovesOkay(false)
        }
        else{
            setMovesNumberExceeded(false)
            setNoMovesSelected(false)
            setAreMovesOkay(true)
        }
    },[selectedMoves])

    return(
        <>
        <PokeImage img={pokemonData.front_image}/>
        <PokeStats stats={pokemonData.baseStats}/>
        {
            movesNumberExceeded &&
            <Text style={{textAlign: 'center'}}>You can only set up to four moves</Text>
        }
        {
            noMovesSelected &&
            <Text style={{textAlign: 'center'}}>Please select at least one move</Text>
        }
        <MovesList moves={pokemonData.moves} addMove={addMove} removeMove={removeMove}/>
        <MovesSelected moves={selectedMoves} />
        {
            areMovesOkay &&
            <ConfirmButton confirmText="Start Battle" loadingText="Searching for an opponent" ready={!loadingRival} route={()=>moveToBattle()} />
        }
        </>
    )
}
export default MoveSelectionPage
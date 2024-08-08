import ConfirmButton from './ConfirmButton/ConfirmButton.jsx'
import MovesList from "./MovesList/MovesList.jsx";
import PokeImage from "./PokeImage/PokeImage.jsx";
import { setStabOnMoves } from "../services/getPokemonData.js";
import getRivalPokemonData from "../services/getRivalPokemon.js";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";


const moveSelectionPageStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        height: '90vh',
    },
    imageSection: {
        flexGrow: 3,
        maxHeight: 200,
    },
    labelSection: {
        flexGrow: 1,
        maxHeight: 50,
    },
    movesSection: {
        flexGrow: 5,
        maxHeight: 350,
        marginBottom: 10,
    },
    buttonSection: {
        flexGrow: 1,
    },
    image: {
        maxHeight: 250,
        height: "80%",
        width: "100%",
    },
    button: {
        height: '20%',
    },
})


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
        <View style={moveSelectionPageStyles.container}>
            <View style={moveSelectionPageStyles.imageSection}>
                <PokeImage img={pokemonData.front_image} style={moveSelectionPageStyles.image}/>
            </View>
            <View style={moveSelectionPageStyles.movesSection}>
                <MovesList moves={pokemonData.moves} addMove={addMove} removeMove={removeMove}/>
            </View>
            <View style={moveSelectionPageStyles.labelSection}>
                {
                    movesNumberExceeded &&
                    <Text style={{margin: '0%', textAlign: 'center'}}>You can only set up to four moves</Text>
                }
                {
                    noMovesSelected &&
                    <Text style={{height: 18 ,margin: '0%', textAlign: 'center'}}>Please select at least one move</Text>
                }
            </View>
            <View style={moveSelectionPageStyles.buttonSection}>
                {
                    areMovesOkay &&
                    <ConfirmButton style={moveSelectionPageStyles.button} confirmText="Start Battle" loadingText="Searching for an opponent" ready={!loadingRival} route={()=>moveToBattle()} />
                }
            </View>
        </View>
    )
}
export default MoveSelectionPage
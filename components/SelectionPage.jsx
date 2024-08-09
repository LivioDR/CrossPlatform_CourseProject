import React, { useEffect, useState } from "react"
import { View, Text, ScrollView} from 'react-native'
import { StyleSheet } from "react-native"
import ConfirmButton from "./ConfirmButton/ConfirmButton.jsx"
import PokeCardContainer from "./PokeCardContainer/PokeCardContainer.jsx"
import { getCollectionForUserId } from "../database/firebaseFunctions.js"
import userId from '../utilities/userId.js'

const selectionStyles = StyleSheet.create({
    wrapper: {
        display: 'flex', 
        flexDirection: 'column', 
        height: '90%', 
        backgroundColor: 'black',
        width: '100%',
    },
    scrollStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        minHeight: 300,
        overflowY: 'scroll',
    },
    buttonWrapper: {
        flexGrow: 1,
        minHeight: 50,
    },
    button: {
        height: 50,
    }
})

const SelectionPage = ({setPokemonData, nextPage}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(0)
    const [isDataReady, setIsDataReady] = useState(false)
    const [fetchedPokemon, setFetchedPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getPokemonData = async() => {
            let result = await getCollectionForUserId(userId)
            setFetchedPokemon(result)
            setLoading(false)
        }
        getPokemonData()
    },[])

    if(!loading){
        return(
            <View style={selectionStyles.wrapper}>
                <ScrollView contentContainerStyle={selectionStyles.scrollStyle}>
                    <PokeCardContainer selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setIsDataReady={setIsDataReady} pokeList={fetchedPokemon} setPokemonData={setPokemonData}/>
                </ScrollView>
                <View style={selectionStyles.buttonWrapper}>
                    { 
                    selectedPokemon !== 0 &&
                    <ConfirmButton route={nextPage} ready={isDataReady} style={selectionStyles.button}/>
                    }
                </View>
            </View>
        )
    }
    else{
        return(
            <View style={{
                width: '100%',
                height: '90%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{textAlign: 'center', color: 'white'}}>Loading...</Text>
            </View>
        )
    }
}
export default SelectionPage
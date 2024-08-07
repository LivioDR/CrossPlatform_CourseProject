import React, { useEffect, useState } from "react"
import { View, Text, ScrollView} from 'react-native'
import { StyleSheet } from "react-native"
import ConfirmButton from "./ConfirmButton/ConfirmButton.jsx"
import PokeCardContainer from "./PokeCardContainer/PokeCardContainer.jsx"
import { getCollectionForUserId } from "../database/firebaseFunctions.js"
import userId from '../utilities/userId.js'

const scrollStyle = StyleSheet.create({
    contentOffset: {x: 0, y: 0},
    backgroundColor: 'lightgray',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexGrow: 1,
    minHeight: '80%',
    overflowY: 'scroll',
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
            <View style={{display: 'flex', flexDirection: 'column', height: '90%', backgroundColor: 'black'}}>
                <ScrollView contentContainerStyle={scrollStyle}>
                    <PokeCardContainer selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setIsDataReady={setIsDataReady} pokeList={fetchedPokemon} setPokemonData={setPokemonData}/>
                </ScrollView>
                { 
                selectedPokemon !== 0 &&
                <ConfirmButton route={nextPage} ready={isDataReady}/>
                }
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
                <Text style={{textAlign: 'center'}}>Loading...</Text>
            </View>
        )
    }
}
export default SelectionPage
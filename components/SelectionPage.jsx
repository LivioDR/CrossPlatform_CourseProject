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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexGrow: 4,
    minHeight: '75%',
    width: '100%',
    overflow: 'scroll',
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
            <View style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <ScrollView>
                    <PokeCardContainer selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setIsDataReady={setIsDataReady} pokeList={fetchedPokemon} setPokemonData={setPokemonData}/>
                    { 
                    selectedPokemon !== 0 &&
                    <ConfirmButton route={nextPage} ready={isDataReady}/>
                    }
                </ScrollView>
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
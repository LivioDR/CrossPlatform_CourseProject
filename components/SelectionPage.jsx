import { View, Text} from 'react-native'
import ConfirmButton from "./ConfirmButton/ConfirmButton.jsx"
import PokeCardContainer from "./PokeCardContainer/PokeCardContainer.jsx"
import React, { useEffect, useState } from "react"
import { getCollectionForUserId } from "../database/firebaseFunctions.js"
import userId from '../utilities/userId.js'

const SelectionPage = ({setPokemonData, nextPage}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(0)
    const [isDataReady, setIsDataReady] = useState(false)
    const [fetchedPokemon, setFetchedPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getPokemonData = async() => {
            let result
            // if(typeof window != "undefined"){
            //     result = await getCollectionForUserId(localStorage.getItem("uid"))
            // }
            result = await getCollectionForUserId(userId)
            setFetchedPokemon(result)
            setLoading(false)
        }
        getPokemonData()
    },[])

    if(!loading){
        return(
            <View style={{margin: '0 auto', width: '100%'}}>
                <PokeCardContainer selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setIsDataReady={setIsDataReady} pokeList={fetchedPokemon} setPokemonData={setPokemonData}/>
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
                width: '100vw',
                height: '90vh',
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
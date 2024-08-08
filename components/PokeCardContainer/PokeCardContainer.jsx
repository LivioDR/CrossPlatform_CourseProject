import PokeCard from "../PokeCard/PokeCard.jsx";
import React from "react";
import { View } from "react-native";

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '50%',
    overflowY: 'scroll',
    justifyContent: 'space-evenly',
}


const PokeCardContainer = ({pokeList, selectedPokemon, setSelectedPokemon, setPokemonData, setIsDataReady}) => {


    return(
        // <View style={containerStyle}>
        <>
            {pokeList.map(poke =>
            <PokeCard 
                key={poke.id} 
                id={poke.id} 
                name={poke.name} 
                lvl={poke.level} 
                exp={poke.exp} 
                image={poke.image} 
                selected={selectedPokemon} 
                setSelected={setSelectedPokemon} 
                setPokemonData={setPokemonData} 
                setIsDataReady={setIsDataReady}
            />)}
        </>
        // </View>
    )
}
export default PokeCardContainer
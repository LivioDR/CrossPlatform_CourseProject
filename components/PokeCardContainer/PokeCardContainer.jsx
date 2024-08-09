import PokeCard from "../PokeCard/PokeCard.jsx";
import React from "react";

const PokeCardContainer = ({pokeList, selectedPokemon, setSelectedPokemon, setPokemonData, setIsDataReady}) => {


    return(
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
    )
}
export default PokeCardContainer
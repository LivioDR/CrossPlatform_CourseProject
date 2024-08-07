import React from "react";
import { getCurrentLevelExp } from "../../services/battleLogic.js";
import NameLevelContainer from "../NameLevelContainer/NameLevelContainer.jsx";
import PokeImage from "../PokeImage/PokeImage.jsx";
import { filterPokemonMovesByLevel, getPokemonData, getStatsForLevel } from "../../services/getPokemonData.js";
import { View, Pressable } from "react-native";

const cardStyle = {
    pressable: {
        width: '40%',
        height: '25%',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',   
        textAlign: 'center', 
        width: '100%',
        height: '100%',
        marginVertical: '5%',
        marginHorizontal: '0%',
        borderRadius: 20,
        gap: 5,
    },
    image: {
        width: '100%',
        height: 50,
        margin: '0%',
    }
}

const PokeCard = ({id, name, lvl, exp, image, selected, setSelected, setPokemonData, setIsDataReady}) => {

    const toggleSelection = async() => {
        // disables confirm button until data is loaded
        setIsDataReady(false)

        // changed background
        setSelected(id)

        // gather all data an store it in state
        let allData = await getPokemonData(id)
        allData = filterPokemonMovesByLevel(allData, lvl)
        allData.baseStats = getStatsForLevel(allData.baseStats, lvl)
        allData.level = lvl
        setPokemonData(allData)
        setIsDataReady(true)
    }

    const currLevelExp = getCurrentLevelExp(lvl)
    const expNextLevel = getCurrentLevelExp(lvl+1)
    const percentageToNextLevel = ((exp - currLevelExp)/(expNextLevel - currLevelExp)*100)

    return(
        <Pressable
        onPress={toggleSelection}
        style={cardStyle.pressable}
        >
            <View style={{...cardStyle.container, backgroundColor: selected == id ? 'teal' : '#3D3D3D'}}>
                <PokeImage img={image || '/assets/images/rivalPokemonPlaceholder.png'} style={cardStyle.image}/>
                <NameLevelContainer name={name} level={lvl} expPercentage={percentageToNextLevel}/>
            </View>
        </Pressable>
        
    )
}
export default PokeCard
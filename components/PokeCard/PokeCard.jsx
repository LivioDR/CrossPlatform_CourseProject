import React from "react";
import { getCurrentLevelExp } from "../../services/battleLogic.js";
import NameLevelContainer from "../NameLevelContainer/NameLevelContainer.jsx";
import PokeImage from "../PokeImage/PokeImage.jsx";
import { filterPokemonMovesByLevel, getPokemonData, getStatsForLevel } from "../../services/getPokemonData.js";
import { View, Pressable } from "react-native";


const cardStyle = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '40%',
        marginVertical: 10,
        marginHorizontal: '5%',
        minHeight: 100,
        maxHeight: 250,
        borderRadius: 20,
    },
    pressable: {
        width: "100%",
        height: "100%",
    },
    container: {
        textAlign: 'center', 
        width: '100%',
        height: 150,
    },
    image: {
        width: '100%',
        height: 100,
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
        <View style={{...cardStyle.wrapper, backgroundColor: selected == id ? 'teal' : '#3D3D3D'}}>
            <Pressable
            onPress={toggleSelection}
            style={cardStyle.pressable}
            >
                <View style={cardStyle.container}>
                    <PokeImage img={image || '/assets/images/rivalPokemonPlaceholder.png'} style={cardStyle.image}/>
                    <NameLevelContainer name={name} level={lvl} expPercentage={percentageToNextLevel}/>
                </View>
            </Pressable>
        </View>
    )
}
export default PokeCard
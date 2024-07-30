import React from "react";
import HpBar from "../HpBar/HpBar.jsx";
import PokeImage from '../../PokeImage/PokeImage.jsx';
import BattleText from "../BattleText/BattleText.jsx";
import { View } from "react-native";

const imageStyle = {
    margin: '0%',
    // height: '50%',
    width: '50%',
    minWidth: '150px',
}


const BattleContainer = ({pokemonData, rivalPokemonData, battleText}) => {
    return(
        <View className="battleContainerWrapper">
            <View className="battleContainerRow" id="battleRivalGraph" style={{display: 'grid'}}>
                <HpBar stats={rivalPokemonData.baseStats} reduceToLeft={true} />
                <View className="imageBattleContainer" style={{justifySelf: 'end'}}>
                    <PokeImage img={rivalPokemonData.front_image || '/assets/images/rivalPokemonPlaceholder.png'} style={{...imageStyle, height: '50%'}} xAlignment="end" />
                </View>
            </View>
            <View className="battleContainerRow" id="battlePokemonGraph" style={{display: 'grid'}}>
                <View className="imageBattleContainer" style={{justifySelf: 'start'}}>
                    <PokeImage img={pokemonData.back_image || '/assets/images/pokemonBackPlaceholder.gif'} style={imageStyle} xAlignment="start" />
                </View>
                <HpBar stats={pokemonData.baseStats} reduceToLeft={false} />
            </View>
            <View className="battleContainerRow" id="battleTextGraph" style={{width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '5%',}}>
                <BattleText text={battleText} />
            </View>
        </View>
    )
}
export default BattleContainer
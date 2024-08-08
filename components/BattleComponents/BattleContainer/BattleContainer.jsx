import React from "react";
import HpBar from "../HpBar/HpBar.jsx";
import PokeImage from '../../PokeImage/PokeImage.jsx';
import BattleText from "../BattleText/BattleText.jsx";
import { View } from "react-native";
import BattleContainerStyles from "./BattleContainerStyles.js";


const BattleContainer = ({pokemonData, rivalPokemonData, battleText}) => {
    return(
        <View style={BattleContainerStyles.wrapper}>
            <View style={BattleContainerStyles.battleSceneContainer}>
                {/* <HpBar stats={rivalPokemonData.baseStats} reduceToLeft={true} /> */}
                <View style={BattleContainerStyles.enemyImageContainer}>
                    <PokeImage img={rivalPokemonData.front_image || '/assets/images/rivalPokemonPlaceholder.png'} style={{...BattleContainerStyles.image, height: '25%'}} />
                </View>
                <View style={BattleContainerStyles.myImageContainer}>
                    <PokeImage img={pokemonData.back_image || '/assets/images/pokemonBackPlaceholder.gif'} style={BattleContainerStyles.image} />
                </View>
                {/* <HpBar stats={pokemonData.baseStats} reduceToLeft={false} /> */}
            </View>
            <View className="battleContainerRow" id="battleTextGraph" style={BattleContainerStyles.textWrapper}>
                <BattleText text={battleText} />
            </View>
        </View>
    )
}
export default BattleContainer
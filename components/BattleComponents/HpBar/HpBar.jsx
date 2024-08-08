import React from "react";
import { View } from "react-native";
import HpBarStyle from "./HpBarStyle";

const HpBar = ({stats, reduceToLeft = true}) => {

    const remainingHpPercentage = stats.Hp / stats.MaxHp * 100

    return(
        <>
        <View style={HpBarStyle.hpWrapper}>
            <View style={{...HpBarStyle.hpBackground, justifyContent: reduceToLeft ? 'flex-end' : 'flex-start'}}>
                <View style={{...HpBarStyle.hpFill ,width: `${remainingHpPercentage}%`}}></View>
            </View>
        </View>
        </>
    )
}
export default HpBar
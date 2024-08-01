import React from "react";
import { View } from "react-native";
import './HpBarStyle.css'

const HpBar = ({stats, reduceToLeft = true}) => {

    const remainingHpPercentage = stats.Hp / stats.MaxHp * 100

    return(
        <>
        <View className="hpWrapper" style={{ minHeight: 50 }}>
            <View className="hpBackground" style={{display: 'flex', justifyContent: reduceToLeft ? 'flex-end' : 'flex-start'}}>
                <View className="hpFill" style={{width: `${remainingHpPercentage}%`}}></View>
            </View>
        </View>
        </>
    )
}
export default HpBar
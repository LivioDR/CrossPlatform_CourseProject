import React from "react";
import { View } from "react-native";
import HpBarStyle from "./HpBarStyle";

const HpBar = ({stats, reduceToLeft = true}) => {

    const remainingHpPercentage = stats.Hp / stats.MaxHp * 100
    const marginToAdd = 100 - remainingHpPercentage

    return(
        <>
        <View style={HpBarStyle.hpWrapper}>
            <View style={HpBarStyle.hpBackground}>
                {
                    reduceToLeft &&
                    <View style={{
                        ...HpBarStyle.hpFill, 
                        width: `${remainingHpPercentage}%`,
                        marginRight: `${marginToAdd}%`
                        }}></View>
                }
                {
                    !reduceToLeft &&
                    <View style={{
                        ...HpBarStyle.hpFill, 
                        width: `${remainingHpPercentage}%`,
                        marginLeft: `${marginToAdd}%`
                        }}></View>
                }
            </View>
        </View>
        </>
    )
}
export default HpBar
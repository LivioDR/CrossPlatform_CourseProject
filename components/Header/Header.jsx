import React from "react";
import './HeaderStyle.css'
import { View, Image, Text } from "react-native";

const Header = () => {
    return(
        <>
        <View className="headerContainer">
            <Image
                src={require('../../assets/images/logo192.png')}
                width={50}
                height={50}
                alt="App icon"
                className="image"
            />   
            <Text className="headerTitle">PokeBattle RPG</Text>
        </View>
        </>
    )
}
export default Header
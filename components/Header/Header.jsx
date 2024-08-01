import React from "react";
import { View, Image, Text } from "react-native";
import HeaderStyle from "./HeaderStyle.js";

const Header = () => {
    return(
        <>
        <View style={HeaderStyle.container}>
            <Image
                source={require('../../assets/images/logo192.png')}
                style={HeaderStyle.image}
                alt="App icon"
                className="image"
            />   
            <Text style={HeaderStyle.title}>PokeBattle RPG</Text>
        </View>
        </>
    )
}
export default Header
import React from "react";
import ConfirmBtnStyle from "./ConfirmBtnStyle";
import { View, Text, Pressable } from "react-native";

const ConfirmButton = ({route, ready, confirmText = 'Confirm', loadingText = 'Loading...', style = {}}) => {
    if(ready){
        return(
            <View style={{height: '5%', width: '100%', marginTop: '5%', marginBottom: '10%', ...style}}>
                <Pressable style={ConfirmBtnStyle.confirmWrapper} onPress={route}>
                    <Text style={ConfirmBtnStyle.confirmText}>{confirmText}</Text>
                </Pressable>
            </View>
        )
    }
    else{
        return(
            <View style={{height: '5%', width: '100%', marginTop: '5%', marginBottom: '10%', ...style}}>
                <Pressable style={{...ConfirmBtnStyle.confirmWrapper, ...ConfirmBtnStyle.loading}} disabled>
                    <Text style={{...ConfirmBtnStyle.confirmText, ...ConfirmBtnStyle.loading}}>{loadingText}</Text>
                </Pressable>
            </View>
        )
    }
}
export default ConfirmButton
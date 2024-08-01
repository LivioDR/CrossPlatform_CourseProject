import React from "react";
import ConfirmBtnStyle from "./ConfirmBtnStyle";
import { View, Text, Pressable } from "react-native";

const ConfirmButton = ({route, ready, confirmText = 'Confirm', loadingText = 'Loading...'}) => {
    if(ready){
        return(
            <View style={{width: '100%'}}>
                <Pressable style={ConfirmBtnStyle.confirmWrapper} onPress={route}>
                    <Text style={ConfirmBtnStyle.confirmText}>{confirmText}</Text>
                </Pressable>
            </View>
        )
    }
    else{
        return(
            <View style={{width: '100%'}}>
                <Pressable style={{...ConfirmBtnStyle.confirmWrapper, ...ConfirmBtnStyle.loading}} disabled>
                    <Text style={ConfirmBtnStyle.confirmText}>{loadingText}</Text>
                </Pressable>
            </View>
        )
    }
}
export default ConfirmButton
import React from "react";
import './ConfirmBtnStyle.css'
import { View, Text, Pressable } from "react-native";

const ConfirmButton = ({route, ready, confirmText = 'Confirm', loadingText = 'Loading...'}) => {
    if(ready){
        return(
            <View style={{width: '100%'}}>
                <Pressable className="confirmWrapper" onClick={route}>
                    <Text className="confirmText">{confirmText}</Text>
                </Pressable>
            </View>
        )
    }
    else{
        return(
            <View style={{width: '100%'}}>
                <Pressable className="confirmWrapper loading" disabled>
                    <Text className="confirmText">{loadingText}</Text>
                </Pressable>
            </View>
        )
    }
}
export default ConfirmButton
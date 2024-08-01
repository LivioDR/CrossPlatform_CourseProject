import React from "react"
import { View, Image } from "react-native"

const styles = {
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
        objectFit: 'contain',
        margin: '0 auto',
    }
}


const PokeImage = ({img , style = {}, xAlignment = "center"}) => {
        return(
            <View style={{...styles.container, justifyContent: xAlignment}}>
                <Image
                source={{uri: img}}
                style={{...styles.image, ...style}}
                alt="Pokemon sprite"
                />
            </View>
        )
}
export default PokeImage
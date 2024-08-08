import { StyleSheet } from "react-native";

const BattleContainerStyles = StyleSheet.create({
    wrapper: {
        maxHeight: "90%",
        width: "100%",
    },
    battleSceneContainer: {
        maxHeight: 500,
        width: "100%",
    },
    enemyHpBar: {
        height: 50,
        width: '100%',
        backgroundColor: 'yellow', // DELETE LATER
    },
    enemyImageContainer: {
        minHeight: 150,
        maxHeight: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        width: '25%', 
        marginLeft: '70%',
        marginRight: '5%',
    },
    myImageContainer: {
        minHeight: 250,
        maxHeight: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '25%',
        marginRight: '70%',
        marginLeft: '5%',
    },
    myHpBar: {
        height: 50,
        width: '100%',
        backgroundColor: 'yellow', // DELETE LATER
    },
    image: {
        margin: '0%',
        height: '50%',
        width: '100%',
        minWidth: 150,
    },
    textWrapper: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        padding: 20,
    },
})

export default BattleContainerStyles
import { StyleSheet } from "react-native";

const BattleContainerStyles = StyleSheet.create({
    wrapper: {
        maxHeight: "90%",
        width: "100%",
    },
    battleSceneContainer: {
        maxHeight: 400,
        width: "100%",
    },
    enemyHpBar: {

    },
    enemyImageContainer: {
        minHeight: 150,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex',
        backgroundColor: 'yellow' // DELETE LATER
    },
    myImageContainer: {
        minHeight: 250,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'blue', // DELETE LATER
    },
    myHpBar: {

    },
    image: {
        margin: '0%',
        height: '50%',
        width: '100%',
        minWidth: 150,
        backgroundColor: 'teal', // DELETE LATER
    },
    textWrapper: {
        width: '90%', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        margin: 30,
    },
})

export default BattleContainerStyles
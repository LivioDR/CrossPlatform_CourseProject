// Import the functions you need from the SDKs you need
import StartingPokemonTeam from "../utilities/StartingPokemonTeam.js";
import { initializeApp } from "firebase/app";
import { setDoc, doc, updateDoc, collection, getDocs, initializeFirestore } from "firebase/firestore";


const testUid = "qwertyuiopasdfghjkl"
const testUsername = "UsernameForTesting"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx41KQ923ubndQFlhnGcWaSXu4nSq0wxE",
  authDomain: "pokebattlesim.firebaseapp.com",
  projectId: "pokebattlesim",
  storageBucket: "pokebattlesim.appspot.com",
  messagingSenderId: "63853137894",
  appId: "1:63853137894:web:196bedb191eee2b1249027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { experimentalForceLongPolling: true })


const createCollectionForUserId = async(uid = testUid, username = testUsername) => {
    const initialPokedex = StartingPokemonTeam
    try{
        await setDoc(doc(db, 'pokedex', uid),{
            username: username,
            pokedex: {
                ...initialPokedex
            }
        })
    }
    catch(e){
        console.error(e)
    }
}

const getCollectionForUserId = async(uid = testUid) => {
    let pokeCollection = []
    try{
        const querySnapshot = await getDocs(collection(db, 'pokedex'))
        querySnapshot.forEach(document => {
            if(document.id == uid){
                const retrievedPokedex = document.data().pokedex
                for(const [key, val] of Object.entries(retrievedPokedex)){
                    pokeCollection.push({
                        id: key,
                        ...val,
                    })
                }
            }
        })
    }
    catch(e){
        console.error(e)
    }
    return pokeCollection
}

const updateCollectionForUserId = async(uid = testUid, collection) => {
    let pokedex = {}
    for(let i=0; i<collection.length; i++){
        pokedex[collection[i].id] = {
            ...collection[i],
        }
        delete pokedex[collection[i].id].id
    }
    const dataToUpload = {
        pokedex: pokedex
    }
    try{
        await updateDoc(doc(db, 'pokedex', uid), dataToUpload)
    }   
    catch(e){
        console.error(e)
    }
}

export { createCollectionForUserId, getCollectionForUserId, updateCollectionForUserId }
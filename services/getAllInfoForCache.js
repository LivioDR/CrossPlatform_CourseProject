import getAllPokemon from "./getAllPokemon"
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';


const atkBaseUrl = "https://pokeapi.co/api/v2/move/"

const getAllInfoForCache = async() => {
    // set to true if want to display the progress on console
    const displayProgressInConsole = true

    const setProgress = (pct) => {
        console.log(`Download ${Math.round(pct * 100)/100}% completed`)
    }

    const cache = new Cache({
        namespace: 'pokemon',
        policy: {
            maxEntries: 10000,
            stdTTL: 0,
        },
        backend: AsyncStorage,
    })

    // checks if the data was previously populated into the cache to skip requesting it all over again
    const isCompleted = await cache.get("completed")

    if(!isCompleted){
        try{
            if(displayProgressInConsole){
                setProgress(0)
            }
            await getAllPokemon()
            if(displayProgressInConsole){
                setProgress(10)
            }
            for(let i=1; i<=919; i++){
                let move = await cache.get(`${atkBaseUrl}${i}/`)
    
                if(!move){
                    move = await fetch(`${atkBaseUrl}${i}/`).then(res => res.json())
                    await cache.set(`${atkBaseUrl}${i}/`,move)
                }
                if(displayProgressInConsole){
                    setProgress(10 + ((i/919) * 90))
                }
            }
            // setting the flag on the cache once the data has been stored
            await cache.set("completed",true)
        }
        catch(e){
            console.error(e)
        }

    }

}
export default getAllInfoForCache
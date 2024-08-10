const baseUrl = "https://pokeapi.co/api/v2/type/"
import { Cache } from "react-native-cache"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from "react-native"

const getAllPokemon = async() => {

    const cache = new Cache({
        namespace: 'pokemon',
        policy: {
            maxEntries: 10000,
            stdTTL: 0,
        },
        backend: AsyncStorage,
    })


    try{
        // Fetching the first page of the endpoint
        let types = await fetch(baseUrl).then(res => res.json())
    
        // Fetching the second (and last) page of the endpoint
        let secondPage = await(fetch(types.next)).then(res => res.json())
    
        // Merging the results
        types.results = [...types.results, ...secondPage.results]
    
        // Going through the results to fetch the details for every type
            for( let i=0; i<types.count; i++){
                let result = await fetch(types.results[i]?.url).then(res => res.json())
                if(Platform.OS == 'ios'){
                    await cache.set(types.results[i]?.url, result)
                }
            }
    }
    catch(e){
        console.error(e)
    }
}
export default getAllPokemon
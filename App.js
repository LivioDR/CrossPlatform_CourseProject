import React,{useState, useEffect} from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SelectionPage from './components/SelectionPage.jsx'
import MoveSelectionPage from './components/MoveSelectionPage.jsx'
import BattlePage from './components/BattlePage.jsx'
import Header from './components/Header/Header.jsx'

export default function App() {
  const [selectionPage, setSelectionPage] = useState(true)
  const [moveSelectionPage, setMoveSelectionPage] = useState(false)
  const [battlePage, setBattlePage] = useState(false)
  const [pokemonData, setPokemonData] = useState({})
  const [selectedMoves, setSelectedMoves] = useState([])
  const [rivalPokemonData, setRivalPokemonData] = useState({})

  useEffect(()=>{
    // Managing service worker
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('/serviceWorker.js')
    }
  },[])

  const changeToSelectionPage = () => {
    setSelectionPage(true)
    setMoveSelectionPage(false)
    setBattlePage(false)
    // reset the state
    setSelectedMoves([])
    setPokemonData({})
    setRivalPokemonData({})
  }

  const changeToMoveSelectionPage = () => {
    setSelectionPage(false)
    setMoveSelectionPage(true)
    setBattlePage(false)
  }

  const changeToBattlePage = () => {
    setSelectionPage(false)
    setMoveSelectionPage(false)
    setBattlePage(true)
  }

  return (
    <View style={{backgroundColor: "#3d3d3d"}}>
      <StatusBar style="auto" />
      <Header/>
      {
        selectionPage &&
        <SelectionPage nextPage={changeToMoveSelectionPage} pokemonData={pokemonData} setPokemonData={setPokemonData}/>
      }
      { 
        moveSelectionPage &&
        <MoveSelectionPage nextPage={changeToBattlePage} pokemonData={pokemonData} selectedMoves={selectedMoves} setSelectedMoves={setSelectedMoves} setRivalPokemonData={setRivalPokemonData}/>
      }
      {
        battlePage &&
        <BattlePage nextPage={changeToSelectionPage} pokemonData={pokemonData} pokemonAttacks={selectedMoves} rivalPokemonData={rivalPokemonData} setPokemonData={setPokemonData} setRivalPokemonData={setRivalPokemonData} />
      }
    </View>
  );
}

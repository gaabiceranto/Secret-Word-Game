// react
import { useState,useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'

// css
import './App.css'

// data
import { wordsList } from './data/words'

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'



const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:1, name:"end"}
];

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  return (
    <div className="App">
      {gameStage == "start" && <StartScreen/>}
      {gameStage == "game" && <Game/>}
      {gameStage == "over" && <GameOver/>}
    </div>
  )
}

export default App

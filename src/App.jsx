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
  {id:3, name:"end"}
];

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetter] = useState([])

  const [guessedLetters, setGuessedLetters]= useState([])
  const[wrongLetters, setWrongLetters] = useState([])
  const[guesses,setGuesses] = useState(3)
  const [score,setScore] = useState(0)

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories [Math.floor(Math.random() * Object.keys(categories).length)]
    console.log (category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word,category}
  }

  const startGame = () =>{
    //pick word and pick category
    const {word, category} = pickWordAndCategory()

    //creat an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l)=> l.toLowerCase())

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetter(wordLetters);

    console.log(pickedWord)


    



    setGameStage(stages[1].name)

  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage == "start" && <StartScreen start={startGame}/>}
      {gameStage == "game" && 
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory}
          letter={letters}
          guessedLetters ={guessedLetters}
          wrongLetters = {wrongLetters}
          guesses = {guesses}
          score = {score}
          />}
      {gameStage == "end" && <GameOver retry = {retry}/>}
    </div>
  )
}

export default App

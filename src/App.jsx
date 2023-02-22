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
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters]= useState([])
  const[wrongLetters, setWrongLetters] = useState([])
  const[guesses,setGuesses] = useState(3)
  const [score,setScore] = useState(50)

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories [Math.floor(Math.random() * Object.keys(categories).length)]
    console.log (category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word,category}
  },[words])

  const startGame = useCallback(() =>{
    // clear all letters
    clearLetterStates()


    //pick word and pick category
    const {word, category} = pickWordAndCategory()

    //creat an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l)=> l.toLowerCase())

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(pickedWord)


    



    setGameStage(stages[1].name)

  },[pickWordAndCategory])

  const verifyLetter = (letter) => {
   
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized

    if(
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ){
      return;
    }

    // push guesses letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]) } else{
        setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters,
          normalizedLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses -1)
    }

      
    
  }

//check win condition
useEffect(() => {
  const uniqueLetters = [...new Set(letters)];

  console.log(uniqueLetters);
  console.log(guessedLetters);

  // win condition
  if (guessedLetters.length === uniqueLetters.length) {
    // add score
    setScore((actualScore) => (actualScore += 100));

    // restart game with new word
    startGame();
  }
}, [guessedLetters, letters, startGame]);

  const clearLetterStates = () =>{
    setGuessedLetters([]);
    setWrongLetters([]);
  }

 useEffect(()=> {
  if(guesses<=0){
    //reset all state
    clearLetterStates();
    setGameStage(stages[2].name)
  }
 },[guesses])


  const retry = () => {
    setScore(0)
    setGuesses(3)

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
          letters={letters}
          guessedLetters ={guessedLetters}
          wrongLetters = {wrongLetters}
          guesses = {guesses}
          score = {score}
          />}
      {gameStage == "end" && <GameOver retry = {retry} score={score}/>}
    </div>
  )
}

export default App

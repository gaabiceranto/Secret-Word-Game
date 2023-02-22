import React, { useState, useRef } from 'react'
import "./game.css"

export default function Game({verifyLetter, pickedWord, pickedCategory,letters, guessedLetters, wrongLetters, guesses, score}) {
  const [letter,setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetter("");

    letterInputRef.current.focus();
  }
  
  return (
    <>
        <div>Secret Word</div>
        <p>
          <span>Pontação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentantivas(s).</p>
        <div className='wordContainer'>
          {letters.map((letter,i)=> 
          guessedLetters.includes(letter) ? (
            <span key ={i} className="letter"> {letter}</span>
          ) : (
            <span key ={i} className="blankSquare"></span>
            )
          )}
        </div>
        <div>
          <p>Tente Adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
            <button>Jogar</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter,i) =>(
            <span key={i}>{letter}, </span>
          ))}
        </div>
        {/* <button onClick={verifyLetter}>Finalzia jogo</button> */}
    </>
  )
}

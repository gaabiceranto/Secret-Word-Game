import React from 'react'
import "./game.css"

export default function Game({verifyLetter, pickedWord, pickedCategory, letter, guessedLetters, wrongLetters, guesses, score}) {
  return (
    <>
        <div>Game</div>
        <p>
          <span>Pontação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentantivas(s).</p>
        <div className='wordContainer'>
          {letter.map((letter,i)=> 
          guessedLetters.includes(letter) ? (
            <span key ={i} className="letter"> {letter}</span>
          ) : (
            <span key ={i} className="blankSquare"></span>
            )
          )}
        </div>
        <div>
          <p>Tente Adivinhar uma letra da palavra:</p>
          <form>
            <input type="text" name="letter" maxLength="1" required/>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
          <span>a,</span>
          <span>b,</span>
        </div>
        <button onClick={verifyLetter}>Finalzia jogo</button>
    </>
  )
}

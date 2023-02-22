import React from 'react'
import "./game.css"

export default function Game({verifyLetter}) {
  return (
    <>
        <div>Game</div>
        <p>
          <span>Pontação: 000</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <div className='wordContainer'>
          <span className='letter'>A</span>
          <span className='blankSquare'></span>
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

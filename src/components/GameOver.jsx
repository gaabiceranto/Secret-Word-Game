import React from 'react'

export default function GameOver({retry,score}) {
  return (
    <>
    <h1>Fim de jogo!</h1>
    <p>A sua pontuação foi {score}</p>
    <button onClick={retry}> Reiniciar </button>
    </>
  )
}

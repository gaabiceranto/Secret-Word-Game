import React from 'react'

export default function StartScreen({start}) {
  return (
    <>
        <h1>Secret Word</h1>
        <p>Clique no botão para jogar</p>
        <button onClick={start}>Start Game</button>
    </>
  )
}

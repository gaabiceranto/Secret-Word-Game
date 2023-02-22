import React from 'react'

export default function GameOver({retry}) {
  return (
    <>
    <div>GameOver</div>
    <button onClick={retry}> Reiniciar </button>
    </>
  )
}

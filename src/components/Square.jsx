import React from 'react'
import "../css/Square.css"

function Square({ isButtonDisabled, value, onSquareClick, index}) {
  return (
    <button id="square" disabled={isButtonDisabled} onClick={() => onSquareClick(index)}>{value}</button>
  )
}

export default Square
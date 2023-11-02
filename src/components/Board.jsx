import React, { useContext, useEffect, useState } from 'react'
import Square from './Square'
import { GameContext, calculateWinner } from '../context/GameContext';

import "../css/Board.css"

function Board() {
  const { state: { board, currentPlayer, players, winner }, dispatch, handleTogglePlayer } = useContext(GameContext);
  const [squares, setSquares] = useState(board);

  function handleSquareClick(index) {
    if (squares[index]) {
      alert("Choose another position!");
      return;
    } 

    handleTogglePlayer();
    squares[index] = currentPlayer;
    setSquares([...squares]);
  }

  useEffect(() => {
    console.log(calculateWinner(squares));
  }, [squares])

  return (
    <div>
      <div id="board">
        {squares.map((element, index) => {
          return <Square isButtonDisabled={false} value={element} onSquareClick={handleSquareClick} key={index} index={index} />
        })}
      </div>
    </div>
  )
}

export default Board
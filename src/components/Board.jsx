import React, { useContext, useEffect, useState } from 'react'
import Square from './Square'
import { GameContext, calculateWinner } from '../context/GameContext';

import "../css/Board.css"
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Board() {
  const { state: { board, currentPlayer, players, winner }, dispatch, handleTogglePlayer } = useContext(GameContext);
  const [squares, setSquares] = useState(board);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [equalOrWinner, setEqualOrWinner] = useState(null);
  const navigate = useNavigate();

  let gameWon = false;

  function handleSquareClick(index) {
    console.log("!!")
    if (squares[index]) {
      alert("Choose another position!");
      return;
    }

    handleTogglePlayer();
    squares[index] = currentPlayer;
    setSquares([...squares]);
    console.log(squares);
  }

  function handleRestartGame() {
    dispatch({ type: "RESTART_GAME" });
    navigate("/");
  }

  function handleRematchGame() {
    dispatch({ type: "RESET_GAME" });
    console.log(board);
    setSquares([...board]);
  }

  useEffect(() => {
    gameWon = calculateWinner(squares);

    if (gameWon) {
      setButtonDisabled(true);
      setEqualOrWinner("winner")
    }

    if (squares.every((element) => element !== null) && !gameWon) {
      setButtonDisabled(true);
      setEqualOrWinner("equal")
    }

  }, [squares])

  return (
    <div>
      <div id="board">
        {squares.map((element, index) => {
          return <Square isButtonDisabled={buttonDisabled} value={element} onSquareClick={handleSquareClick} key={index} index={index} />
        })}
      </div>

      {equalOrWinner === "winner" && <h1>Congratulations to {players[currentPlayer]} for winning as {currentPlayer}!</h1>}
      {equalOrWinner === "equal" && <h1>It's a draw!</h1>}

      {equalOrWinner &&
        <>
          <Button textContent={"Rematch?"} handleOnClick={handleRematchGame}></Button>
          <Button textContent={"Reset?"} handleOnClick={handleRestartGame}></Button>
        </>
      }
    </div>
  )
}

export default Board
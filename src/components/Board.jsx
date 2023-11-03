import React, { useContext, useEffect, useState } from "react";
import Square from "./Square";
import { GameContext, calculateWinner } from "../context/GameContext";

import "../css/Board.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Board() {
  const {
    state: { board, currentPlayer, players },
    dispatch,
    handleTogglePlayer,
  } = useContext(GameContext);
  const [squares, setSquares] = useState([...board]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [equalOrWinner, setEqualOrWinner] = useState(null);
  const navigate = useNavigate();

  function handleSquareClick(index) {
    console.log("!!");
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
    setButtonDisabled(false);
    setEqualOrWinner(null);
  }

  useEffect(() => {
    let gameWon = calculateWinner(squares);
    console.log(gameWon);

    if (gameWon) {
      setButtonDisabled(true);
      setEqualOrWinner(gameWon);
    }

    if (squares.every((element) => element !== null) && !gameWon) {
      setButtonDisabled(true);
      setEqualOrWinner("equal");
    }
  }, [squares]);

  return (
    <div>
      <div id="board">
        {squares.map((element, index) => {
          return (
            <Square
              isButtonDisabled={buttonDisabled}
              value={element}
              onSquareClick={handleSquareClick}
              key={index}
              index={index}
            />
          );
        })}
      </div>

      {equalOrWinner !== null && equalOrWinner !== "equal" && (
        <h1>
          Congratulations to {players[equalOrWinner]} for winning as{" "}
          {equalOrWinner}!
        </h1>
      )}
      {equalOrWinner === "equal" && <h1>It's a draw!</h1>}

      {equalOrWinner && (
        <>
          <Button
            textContent={"Rematch?"}
            handleOnClick={handleRematchGame}
          ></Button>
          <Button
            textContent={"Reset?"}
            handleOnClick={handleRestartGame}
          ></Button>
        </>
      )}
    </div>
  );
}

export default Board;

import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Board from '../components/Board';

function Game() {
  const { state, dispatch, handleSetPlayers } = useContext(GameContext);
  console.log(state);

  return (
    <div>
      {state.players && <h2>Current Player: {state.players[state.currentPlayer]}</h2> }

      <Board />
    </div>
  )
}

export default Game
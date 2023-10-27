import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

function Game() {
  const { state, dispatch, handleSetPlayers } = useContext(GameContext);
  console.log(state);

  return (
    <div>Game</div>
  )
}

export default Game
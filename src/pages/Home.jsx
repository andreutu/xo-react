import React, { useContext, useState } from 'react'
import { GameContext } from '../context/GameContext'
import Input from '../components/Input';
import Button from '../components/Button';

function Home() {
  const [players, setPlayers] = useState({ 1: " ", 2: " " })
  const { state, dispatch, handleSetPlayers } = useContext(GameContext);

  function handleChoosePlayer(e) {
    const playerName = e.target.name;
    const value = e.target.value;

    if (playerName === "player1") {
      setPlayers({ ...players, 1: value });
    } else {
      setPlayers({ ...players, 2: value });
    }
  }

  console.log(state)

  function handleStartGame() {
    handleSetPlayers(players)
    console.log(state)
  }

  return (
    <div>
      <h2>Start new game!</h2>

      <Input nameInput={"player1"} inputContent={"Player 1"} player={players[1]} handleChoosePlayer={handleChoosePlayer}></Input>
      <Input nameInput={"player2"} inputContent={"Player 2"} player={players[2]} handleChoosePlayer={handleChoosePlayer}></Input>

      <Button textContent={"Start New Game"} handleOnClick={handleStartGame}></Button>
    </div>
  )
}

export default Home
import React, { useContext, useState } from 'react'
import { GameContext } from '../context/GameContext'
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [players, setPlayers] = useState({ "X": "", "O": "" });
  const { state, dispatch, handleSetPlayers } = useContext(GameContext);
  const navigate = useNavigate();

  function handleChoosePlayer(e) {
    const playerName = e.target.name;
    const value = e.target.value;

    if (playerName === "player1") {
      setPlayers({ ...players, "X": value });
    } else {
      setPlayers({ ...players, "O": value });
    }
  }

  const handleStartGame = () => {
    if (players["X"].length === 0 && players["O"].length === 0) {
      alert("Input error!");
      return;
    } else {
      handleSetPlayers(players);
      navigate("/game");
    }
  }

  return (
    <div>
      <h2>Start new game!</h2> <br />

      <Input nameInput={"player1"} inputContent={"Player 1 (X)"} player={players["X"]} handleChoosePlayer={handleChoosePlayer}></Input>
      <Input nameInput={"player2"} inputContent={"Player 2 (O)"} player={players["O"]} handleChoosePlayer={handleChoosePlayer}></Input>

      <Button textContent={"Start New Game"} handleOnClick={handleStartGame}></Button>
    </div>
  );
}

export default Home;
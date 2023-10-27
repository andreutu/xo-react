import React, { createContext, useReducer } from 'react'

export const GameContext = createContext();

const actionTypes = {
  SET_PLAYERS: "SET_PLAYERS",
  SET_BOARD: "SET_BOARD",
  TOGGLE_PLAYER: "TOGGLE_PLAYER",
  STOP_GAME: "STOP_GAME",
  RESET_GAME: "RESET_GAME",
  RESTART_GAME: "RESTART_GAME",
};

const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  players: null,
  winner: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return { ...state, players: action.payload };
    case actionTypes.SET_BOARD:
      return { ...state, board: action.payload };
    default:
      return state;
  } 
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSetPlayers(players) {
    dispatch({ type: actionTypes.SET_PLAYERS, payload: players });
  }

  return (
    <GameContext.Provider value={{state, dispatch, handleSetPlayers}}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider
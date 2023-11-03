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

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      return { ...state, players: action.payload };
    case actionTypes.TOGGLE_PLAYER:
      return { ...state, currentPlayer: state.currentPlayer === "X" ? "O" : "X" }
    case actionTypes.SET_BOARD:
      return { ...state, board: action.payload };
    case actionTypes.RESTART_GAME:
      return initialState;
    case actionTypes.RESET_GAME:
      return { ...initialState, players: state.players, board: Array(9).fill(null) };
    default:
      return state;
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSetPlayers(players) {
    dispatch({ type: actionTypes.SET_PLAYERS, payload: players });
  }

  function handleTogglePlayer() {
    dispatch({ type: actionTypes.TOGGLE_PLAYER });
  }

  return (
    <GameContext.Provider value={{ state, dispatch, handleSetPlayers, handleTogglePlayer }}>
      {children}
    </GameContext.Provider>
  );
}

export function calculateWinner(squares) {
  for (let i = 0; i < winCases.length; i++) {
    const [a, b, c] = winCases[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default GameProvider
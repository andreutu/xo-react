import React from 'react'
import "../css/input.css"

function Input({ nameInput, inputContent, player, handleChoosePlayer }) {
  return (
    <div id="inputWrapper">
      <label id="inputLabel" htmlFor={nameInput}>{inputContent}</label>
      <input type="text" id="inputField" name={nameInput} value={player} onChange={(e) => handleChoosePlayer(e)}/>
    </div>
  );
}

export default Input
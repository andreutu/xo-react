import React from 'react'

function Input({ nameInput, inputContent, player, handleChoosePlayer }) {
  return (
    <div style={{
      width: "60%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <label htmlFor={nameInput}>{inputContent}</label>
      <input type="text" style={{
        padding: "5px",
        border: "1px dashed #0086E6",
        borderRadius: "8px",
        margin: "5px"
      }} name={nameInput} value={player} onChange={(e) => handleChoosePlayer(e)}/>
    </div>
  );
}

export default Input
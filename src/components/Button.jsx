import React from 'react'

function Button({ textContent, handleOnClick }) {
  return (
    <div>
      <button style={{
        borderRadius: "8px",
        border: "3px solid #0086E6",
        padding: "5px",
        margin: "10px",
        backgroundColor: "white"
      }} onClick={() => handleOnClick()}>{textContent}</button>
    </div>
  )
}

export default Button
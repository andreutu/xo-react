import React from 'react'
import "../css/button.css"

function Button({ textContent, handleOnClick }) {
  return (
    <div>
      <button id="customButton" onClick={() => handleOnClick()}>{textContent}</button>
    </div>
  )
}

export default Button
import React from 'react'
import './XOGame.css'

export default function Button({value, onSquareClick} ) {
  return (
        <button className={`XObtn ${value ? "filled" : ""}`} onClick={onSquareClick}>{value}</button>
  )
}

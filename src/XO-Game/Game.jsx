import React, { useEffect, useState } from 'react'
import Button from './Button'

export default function Game() {
 // const [filled, setFilled] = useState(false)
  const [message, setMesage]= useState("")
  const [Xnext, setXnext]= useState(true)
  const [square, setSquare]= useState(Array(9).fill(null))

  function HandleBox(i){
    if (square[i]){
      return
    }
    const nextSquare = square.slice();
    nextSquare[i]= Xnext ? "X":"O"
    setSquare(nextSquare)
    setXnext(!Xnext)
  }
  const winningLines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  function calculateWinner(square){
    for(let [x,y,z] of winningLines){
      if(
          square[x] && square[x]===square[y] && 
          square[x]===square[z]
      ){
        return square[x,y,z]
      }
    }
    return null
  }

  useEffect(()=>{
    console.log(square);
    
    const winner = calculateWinner(square)
    if(winner){
      setMesage(`${winner} - You Won The Match 🎉🎉🎉`)
      return
    }
    const filled = square.every(val=> val !==null )
    if(filled){
      setMesage("Match Draw 🤝")
    }
  },[square])
  return (
    <div className="Game">
      <h1>X-O - Game</h1>
      <div className="Game-Items">
              <Button value={square[0]} onSquareClick={()=>{HandleBox(0)}}/>
              <Button value={square[1]} onSquareClick={()=>{HandleBox(1)}}/>
              <Button value={square[2]} onSquareClick={()=>{HandleBox(2)}}/>
              <Button value={square[3]} onSquareClick={()=>{HandleBox(3)}}/>
              <Button value={square[4]} onSquareClick={()=>{HandleBox(4)}}/>
              <Button value={square[5]} onSquareClick={()=>{HandleBox(5)}}/>
              <Button value={square[6]} onSquareClick={()=>{HandleBox(6)}}/>
              <Button value={square[7]} onSquareClick={()=>{HandleBox(7)}}/>
              <Button value={square[8]} onSquareClick={()=>{HandleBox(8)}}/>
              
      </div>
      <h2>{message}</h2>
    </div>
  )
}

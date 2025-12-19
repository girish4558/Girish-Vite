import React from 'react'
import Second from './Second'

export default function first() {
  return (
    <div style={{border: "2px solid black", padding:"30px", textAlign:"center"}}>
        This is First
      <Second/>
    </div>
  )
}

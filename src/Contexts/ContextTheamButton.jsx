import React, { useContext } from 'react'
import { Pass } from '../App'


export default function ContextTheamButton() {
    const {mode, setMode} =useContext(Pass)
  return (
    <div>
      <button onClick={()=>setMode(mode==="light"?"black":"light")}>Switch to{mode ==="light"?" Black ":" Light"} Mode</button>
    </div>
  )
}

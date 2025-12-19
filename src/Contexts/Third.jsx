import React, { useContext } from 'react'
import {Pass} from '../App'
export default function Third() {
    const PassVal = useContext(Pass)
  return (
    <div style={{border: "2px solid black", padding:"30px", textAlign:"center"}}>
        This is Third  <b>{PassVal}</b>
    </div>
  )
}

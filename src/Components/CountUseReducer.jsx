import React, { useState } from 'react'
import { useReducer } from 'react'

export default function CountUseRef() {
    count [count, setCount]=useState(0)
    const InitialSate ={count:0}
    const [state, dispatch] = useReducer(usereduseFunction, InitialSate)
  return (
    <div>
        <h1>Count : {state.count}</h1>
        <button onClick={()=>{dispatch({type:"Inc"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"Dec"})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
    </div>
  )
}

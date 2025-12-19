import React, { useState } from 'react'
import { useReducer } from 'react'

export default function CountUseRef() {
    //const [count, setCount]=useState(0)
    const InitialSate ={count:0}
    function usereduseFunction(state, action){
      switch(action.type){
        case "Inc": return {count:state.count+1}
        case "Dec": return {count:state.count -1}
        case "Reset": return {count : 0}
        default : return state
      }
    }
    
    
    const [state, dispatch] = useReducer(usereduseFunction, InitialSate)
    console.log(state);
  return (
    <div className='ReducerCount'>
        <h1>Count : {state.count}</h1>
        <button className='btn' onClick={()=>{dispatch({type:"Inc"})}}>Increment</button>
        <button className='btn' onClick={()=>{dispatch({type:"Dec"})}}>Decrement</button>
        <button className='btn' onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
    </div>
  )
}

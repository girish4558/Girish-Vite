import React from 'react'
import useCount from './useCount'

export default function CustomCount() {
    const {count, increment, decrement, reset}= useCount(10)
  return (
    <div 
    style={{
        width:"800px",
        height:"50vh",
        margin:"50px auto",
        background:"coral",
        borderRadius:"30px",
        padding:"30px"
    }}>
        <h1 style={{margin:"30px auto"}}>Modify-Count Using Customised Hook</h1>
        <div style={{
            margin:"50px 250px"
        }}>
            <h3 style={{
                width:"70px",
                padding:"50px",
                borderRadius:"50%",
                background:"aqua",
                marginBottom:"40px",
                marginLeft:"50px"
            }}>Count:{count}</h3>
            <button style={{marginRight:"3px"}} onClick={increment}>Increment</button>
            <button style={{marginRight:"3px"}} onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}
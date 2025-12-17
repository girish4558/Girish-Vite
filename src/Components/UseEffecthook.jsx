import React, { useEffect, useState } from 'react'

export default function UseEffecthook() {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        console.log(`you are added ${count} number of products`);
        
    },[count])

    const [mode, setMode]=useState(false)

    useEffect(()=>{
        mode ? console.log("You are Light Mode"):console.log("You are in Dark Mode");
        
        
        
    },[mode])


    const [text, setText]=useState("")
    const [textcount, settextcount]=useState(0)

    useEffect(()=>{
        settextcount(text.length)
    },[text])
    
  return (
    <div >
        <h1 style={{textAlign : "center"}}>Use Effect</h1>

        <h1> you are added {count} products</h1>
      <button onClick={()=>setCount(count+1)}>Count - {count}</button>

    <div style={
            {
            background : mode ?" #fff":"#333",
            color : mode ? "#333":"#fff",
            height:"20vh",
            padding:"100px"
        }}><button onClick={()=>setMode(!mode)}>Switch to {mode ? "Offline":"Online"} Mode</button></div>

    <div
        style={{
            padding:"30px"
        }}
    >
        <input style={{padding:"30px", fontSize:"20px"}} type="text" name="" value={text} placeholder='Type something' onChange={(e)=>setText(e.target.value)}/>
        <button style={{padding:"30px", fontSize:"20px"}}>You entered {textcount} charecters</button>
    </div>
    </div>
  )
}

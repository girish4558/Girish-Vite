import React, { useCallback, useState } from 'react'
import UseCallBackList from './UseCallBackList'

export default function UseCallBack() {

    const fruits = ["Orenge","Mango","Banana","Pinapple","Apple","Grapes","Gouva","Musted-Apple"]
    const [number, setNumber]= useState(0)
    const [toggle, setToggle]=useState(false)

    const getItems = useCallback(()=>{
        fruits.length===number?console.log("You are reached End"):console.log(fruits[number]);
        
        
        return [fruits[number]]
        
    },[number])
    const theme={
        backgroundColor : toggle? "#333":"#fff",
        color : toggle? "#fff":"#333",
        padding :  "30px",
        cursor : "pointer",
        padding : "100px",
        margin : "auto"
    }
  return (
    <div style={theme} className='UseCall'>
      <h1>CallBack Hook</h1>
      <div>
          <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setToggle(!toggle)}>Theme</button>
        <UseCallBackList getItems={getItems}/>
      </div>
    </div>
  )
}

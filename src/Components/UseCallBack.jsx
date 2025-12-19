import React, { useState } from 'react'
import UseCallBackList from './UseCallBackList'

export default function UseCallBack() {
    const [number, setNumber]= useState(1)
    const [toggle, setToggle]=useState(false)

    const getItems =UseCallBack(()=>{
        return [number, number+1, number+2, number+3]
    },[number])
    const theme={
        backgroundColor : toggle? "#333":"#fff",
        color : toggle? "#fff":"#333",
        padding :  "30px"
    }
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onChange={()=>setToggle(!toggle)}>Theme</button>
      <UseCallBackList getItems={getItems}/>
    </div>
  )
}

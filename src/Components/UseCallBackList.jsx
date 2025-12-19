import React, { useEffect, useState } from 'react'

export default function UseCallBackList({getItems}) {
    const [items, setitems]=useState([])

    useEffect(()=>{
        setitems(getItems())
    },[getItems])
  return (
    <div>
      {items.map((item)=>(
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

import React, {useState} from 'react'

export default function DarkTheam() {
    const [darkmode, setDarkmode] = useState(false)
  return (
    <div 
        style={{
            background : darkmode? "#222" : "#fff",
            color : darkmode? "#fff" : "#333",
            padding : "50px",
        }}
    >
      <button onClick={()=>setDarkmode(!darkmode)}>Switch to {darkmode? "light":"dark"}</button>
      <p>You are in {darkmode?"dark":"light"} mode</p>
    </div>
  )
}

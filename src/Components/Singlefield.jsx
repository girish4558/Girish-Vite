import React,{useState} from 'react'

export default function Singlefield() {
    const [name, setName] = useState("React.js")
    console.log(name);

    const [checked, setChecked] = useState(false)
    
  return (
    <div>
      <input type="text" checked={name} onChange={(e)=>setName(e.target.name)} />

      <input type="checkbox" value={checked} onChange={(e)=>setChecked(e.target.checked)} />
    </div>
  )
}

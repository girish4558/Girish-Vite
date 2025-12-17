import React,  { useState } from 'react'

export default function UseStateHook() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(true)
  const name = "Girish"
  const Increment = ()=>{
    
    setCount(count+1)
    console.log(count);
    
  }
  return (

    <div>
      <button onClick={Increment}>Cliked {count}</button>
      <div>
        {user ? <p>Welcome {name}</p>: <p>Please login {name}</p> }
        <button onClick={()=> setUser(!user)}>Sign {user? "out":"In"}</button>
      </div>
      <div>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <h4>Count : {count}</h4>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

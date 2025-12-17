import React,{useState} from 'react'

export default function Own() {
    const [user, setUser] = useState(true)
    const [like, setlike] = useState(false)
     const [clicked, setClicked] = useState(false);

  return (
    <div style={{
      padding : "50px"
    }}>
       <button 
      onClick={() => setClicked(true)} 
      disabled={clicked}
    >
      {clicked ? "Clicked!" : "Click"}
    </button>
      <button onClick={()=> setlike(!like)}>{like ? "💖 liked":"🤍 like"}</button>
      <button onClick={()=>setUser(!user)} style={{margin : "30px"}}>{user ? "Hide":"Show"}</button>
      {user && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque accusamus sequi accusantium deserunt quos autem ipsa veniam necessitatibus asperiores ab, nisi aperiam adipisci. Ab quos minus earum doloribus suscipit accusamus?</p> }
    </div>
  )
}

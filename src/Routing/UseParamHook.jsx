import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseParamHook() {
    const [users, setUsers]= useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data=>data.json())
        .then((data)=>{
            setUsers(data)
        })
    },[])
  return (
    <div className='items'>
            <h1>Users Data</h1>
            <ul >
                {users.map((user)=>(
                    <li key={user.id}>
                        <Link className='i-link' to={`/blogs/:${user.id}`}>{user.id}.{user.name}</Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}

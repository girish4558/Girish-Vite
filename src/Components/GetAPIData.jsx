import React, { useEffect, useState } from 'react'
import Api from "./ApiData.module.css"

export default function GetAPIData() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((apidata)=> apidata.json())
        .then((data)=>{
            setUsers(data)
        })
    },[])
  return (
    <div className={Api.container}>
        <h1>API Users - Data</h1>
        <table>
            <thead>
                <tr>
                    <th colSpan={"3"}>All Users Data</th>
                </tr>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    </div>
  )
}

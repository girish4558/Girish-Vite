import React, { useEffect, useState } from 'react'

export default function ApiIntegration() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const [Lodaing, setLoading]=useState(false)

    useEffect(()=>{
        async function fetchData() {
            try{
                setLoading(true)
                const data = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!data.ok){
                    throw new Error("Failed to Fetch the Users")
                }
                const Userdata = await data.json()
                setUsers(Userdata)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if(Lodaing) return <p>Loading....</p>
    if(error) return <p style={{color:"red"}}>{error}</p>
  return (
    <div style={{background:"#fff", padding:"20px"}}>
        <h2 style={{textAlign:"center", marginBottom:"20px"}}>Fetched Users-Data Using API-Integration</h2>
        
            <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                     { users.map((user)=>(
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

import React,{useState} from 'react'

export default function Registerform() {
    const[formdata, setFormdata] = useState({
        name :"",
        email: "",
        pwd : "",
        terms : false
    })
    const [error, setError] = useState(false)

    const HandleInput = (e)=>{
        const { name, value, type, checked } = e.target

        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const HandleForm =(e)=>{
        e.preventDefault()

        if(!formdata.name  || !formdata.email || !formdata.pwd){
            setError("All fields are required")
            return
        }
        if(!formdata.terms){
            setError("Acept the checkbox")
            return
        }
        setError("")
        alert("You have submitted successfully....")
        console.log(formdata);
        
    }
  return (
    <div style={{
        background : "red",
        padding : "50px"
    }}>
      <form onSubmit={HandleForm}>
        <h1>Register Form</h1>
        {error && <p style={{color:"red"}}>{error}</p> }
        <input type="text" value={formdata.name}   name="name" placeholder="Enter Name" onChange={HandleInput}/>

      <input type="email" value={formdata.email} name="email" placeholder="Enter Email" onChange={HandleInput}/>

      <input type="password" value={formdata.pwd}    name="pwd" placeholder="Enter Password" onChange={HandleInput}/>

      <input type="checkbox" checked={formdata.terms}   name="terms"  onChange={HandleInput}/>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

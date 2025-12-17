import React,{useState} from 'react'
import "./Crigister.css"

export default function CompleteRegistration() {
    const [rigister, setRigister] = useState({
        first : "",
        last : "",
        father : "",
        gender : false,
        mobile : "",
        email : "",
        dob : "",
        address : "",
        // lang : false,
        pwd : "",
    })
    const [error, setError] = useState(false)



    const HandleInput =(e)=>{
        const {name, value, type, checked} =e.target

        setRigister({
            ...rigister,
            [name]:value,
        })
    }

    const handleform =(e)=>{
        e.preventDefault()

        if(!rigister.first || !rigister.last || !rigister.father || !rigister.mobile || !rigister.address || !rigister.pwd){
            setError("All fields are required")
            return
        }
        if(!rigister.gender){
            setError("Please select gender")
            return
        }

        if(!rigister.dob){
            setError("Please select Date of birth")
            return
        }

        setError("")
        alert("You have rigistered successfully!")
        console.log(rigister);

    }

  return (
    <div className="form">
        <form onSubmit={handleform}>
            <fieldset>
                <legend>Student Rigistration</legend>
                {{error}&& <p style={{color:"red"}}>{error}</p> }
                <table>
                    <tbody>
                        
                    <tr>
                        <td><label htmlFor="">First Name:</label></td>
                        <td><input  type="text" name="first" placeholder="Enter First name" value={rigister.first} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Last Name:</label></td>
                        <td><input  type="text" name="last" placeholder="Enter Last name" value={rigister.last} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Father Name:</label></td>
                        <td><input  type="text" name="father" placeholder="Enter Father name" value={rigister.father} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Gender:</label></td>
                        <td className="radio"><input  type="radio" name="gender" value="male"  checked={rigister.gender === "male"} onChange={HandleInput}/> Male
                            <input  type="radio" name="gender" value="female"  checked={rigister.gender === "female"} onChange={HandleInput}/> Female
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Mobile Number:</label></td>
                        <td><input  type="number" name="mobile" placeholder="Enter mobile number" value={rigister.mobile} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Email:</label></td>
                        <td><input  type="email" name="email" placeholder="Enter Email" value={rigister.email} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Date Of Birth:</label></td>
                        <td><input  type="date" name="dob" value={rigister.dob} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Address:</label></td>
                        <td><input  type="text" name="address" placeholder="Enter address" value={rigister.address} onChange={HandleInput}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Password:</label></td>
                        <td><input type="number" name="pwd"placeholder="********" value={rigister.pwd} onChange={HandleInput}/></td>
                    </tr>

                    <tr>
                        <td colSpan="2"><button type='submit'>SUBMIT</button></td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </form>
    </div>
  )
}

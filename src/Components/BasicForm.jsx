import React, { useState } from 'react'

export default function BasicForm() {
    const [basicform, setBasicform] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setBasicform({
            ...BasicForm,
            [name]: value
        });
    };

    console.log(basicform);
    

    return (
        <div style={{
            padding : "50px"
        }}>
            <h1>Basic Form</h1>
            <input type="text" name="username" value={basicform.username} placeholder="Enter you'r name" onChange={handleInput} />

            <input type="email" name="email" value={basicform.email} placeholder="Enter email" onChange={handleInput} />

            <input type="password" name="password" value={basicform.password} placeholder="Enter password" onChange={handleInput} />
        </div>
    )
}

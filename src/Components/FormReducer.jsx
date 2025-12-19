import React, { act, useReducer } from 'react'

export default function FormReducer() {
    const intilaVals ={
        name :"",
        email : "",
        pwd : ""
    }
    let FormReducer=(state, action)=>{
        switch (action.type){
            case "add":
                return(
                        {
                            ...state,
                            [action.feild]:action.value
                        }
                     );
            case "Reset":
                return intilaVals
        }
        
    }
    function HandleInputs(){
        alert("You are successfully added")
        console.log(state);
        dispatch({type : "Reset"})
        
    }
    function HandleForm(e){
        dispatch({
            type : "add",
            feild : e.target.name,
            value : e.target.value
        })
    }
    const[state, dispatch]=useReducer(FormReducer, intilaVals)
  return (
    <div className='ReducerForm'>
        <h1>UseReducer</h1>
      <h1>Input Form</h1>
      <input type="text" name="name" value={state.name} placeholder='Enter Name' onChange={HandleForm}/>
      <input type="email" name="email" value={state.email} placeholder='Enter Email' onChange={HandleForm}/>
      <input type="password" name="pwd" value={state.pwd} placeholder='Enter Pwd' onChange={HandleForm}/>

      <button onClick={HandleInputs}>Submit</button>
    </div>
  )
}

import React from 'react'
import Greatings from './Greatings'
import Props from './Props'
import Conditional from './Components/Conditional'
import UseStateHook from './Components/UseStateHook'
import Own from './Components/Own'
import DarkTheam from './Components/DarkTheam'
import BasicForm from './Components/BasicForm'
import Singlefield from './Components/Singlefield'
import Registerform from './Components/Registerform'
import CompleteRegistration from './Components/CompleteRegistration'
import ListRendering from './Components/ListRendering'
import UseEffecthook from './Components/UseEffecthook'
import UseEffectTimer from './Components/UseEffectTimer'
import GetAPIData from './Components/GetAPIData'
import UseRef from './Components/UseRef'

export default function App() {

  const name = "Girish kumar"
  const age = 30
  return (

    <div>

      <UseRef/>
      {/*<GetAPIData/>
      <UseEffectTimer/>
      <UseEffecthook/>
      <ListRendering/>
       <CompleteRegistration/>
       <h2>UseState React Hook</h2>
      <Registerform/>
      <Singlefield/>
      <BasicForm/>
      <DarkTheam/>
      <Own />
      <hr />
      <UseStateHook/>
      <Conditional/> */}
      {/* <h1>Greatings from {name}</h1>
      <Props PersonName={name} Age = {age}/>
      <Greatings  name = {name} age ={age}/>  
      <Greatings name = {name} age ={age}/> */}
    </div>
  )
}

import React, { createContext, useState } from 'react'
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
import AddImage from './Components/AddImage'
import First from './Contexts/First'
import ContextTheamButton from './Contexts/ContextTheamButton'
import MultiContex from './Contexts/MultiContex'
import MultiSelectCheckbox from './Components/MultiSelectCheckbox'
import UsReducerCount from './Components/UsReducerCount'
import FormReducer from './Components/FormReducer'
import UseCallBack from './Components/UseCallBack'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './Routing/About'
import Home from './Routing/Home'
import Services from './Routing/Services'
import Contat from './Routing/Contat'
import WebDev from './Routing/WebDev'
import AppDev from './Routing/AppDev'
import Blog from './Routing/Blog'

export const Pass = createContext()
export default function App() {
  
  const [mode, setMode]= useState("light")
  const data = {name : "Gireesh kumar"}

  const name = "Girish kumar"
  const age = 30
  return (
    <div>
      

      <BrowserRouter>
          <div className="Header">
                <Link className='r-link' to={"/"}>Home</Link>
                <Link className='r-link' to={"/About"}>About</Link>
                <Link className='r-link' to={"/Services"}>Services</Link>
                <Link className='r-link' to={"/Contact"}>Contact</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Services' element={<Services/>}>
                  <Route path='Webdevelopment' element={<WebDev/>}/>
                  <Route path='Appdevelopment' element={<AppDev/>}/>
            </Route>
            <Route path='/Contact' element={<Contat/>}/>
            <Route path='/blogs/:id' element={<Blog/>}/>
          </Routes>
      
      </BrowserRouter>


      {/* <UseCallBack/> */}
      {/* <FormReducer/>
      <UsReducerCount/> */}
      {/* <MultiSelectCheckbox/> */}
      {/* <Pass.Provider value={{mode,setMode,data}}>
        
        <MultiContex/>
      </Pass.Provider> */}
      {/* <h2 style={{textAlign:"center"}}>UseContext</h2>
      <div style={{border: "2px solid black", padding:"30px", textAlign: "center"}}>
        App Component
        <Pass.Provider value={name}>
          <First/>
        </Pass.Provider>
      </div> */}
      {/*<AddImage/>
      <UseRef/>
      <GetAPIData/>
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

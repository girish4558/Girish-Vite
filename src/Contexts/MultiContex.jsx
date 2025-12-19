import React, { useContext } from 'react'
import { Pass } from '../App'
import ContextTheamButton from './ContextTheamButton'

export default function MultiContex() {
    const{mode, data}=useContext(Pass)
  return (
    <div className={mode}>
        {/* <h1>Welcome to UseContext -- {data}</h1> */}
        <h1>UseContex</h1>
        Welcome to UseContext --{data.name}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam architecto repudiandae veritatis! Voluptatem, nobis nesciunt nulla fugit placeat sit beatae ipsa optio exercitationem dolore quas iusto quia, dolorem molestiae commodi dicta, sint explicabo culpa saepe praesentium qui provident? Necessitatibus corrupti cum assumenda tempore dolores aliquam perferendis nesciunt laboriosam quasi?</p>

        <ContextTheamButton/>
    </div>
  )
}

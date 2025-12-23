import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>Services</h1>

        <div className="Header">
            <Link className={"r-link"} to={"Webdevelopment"}>Web-Development</Link>
            <Link className={"r-link"} to={"Appdevelopment"}>App-Development</Link>
        </div>
        <Outlet/>
    </div>
  )
}

import React from 'react'
import UseParamHook from './UseParamHook'
import ChatApp from './ChatApp'

export default function About() {
  return (
    <div>
        <h1>About Component</h1>
        <UseParamHook/>
        <ChatApp/>
    </div>
  )
}

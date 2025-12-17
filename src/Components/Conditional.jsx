import React from 'react'

export default function Conditional() {
    const user = true
  return (
    <div>
        {/* Ternary Operator */}

        {user ? <h3>User is true</h3>: <h3>User is false</h3> }

        {/* Conditioanl Operators */}

        {user && <p>This is And Operator</p> }

        {user || <p>This is || oprator</p> }
    </div>
  )
}

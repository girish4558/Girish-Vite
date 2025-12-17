import React from 'react'

export default function Greatings({name, age}) {
  return (
    <div>
      <h1>Greatings Component</h1>
      <h2>Hi Everyone</h2>
      <h3>Destructure User Data Name = {name} & Age = {age}</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam qui, veniam, dolorem incidunt ipsam doloribus soluta sed eligendi, libero ipsa magnam a ipsum officiis totam! Necessitatibus praesentium rem perferendis.</p>
    </div>
  )
}

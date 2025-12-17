import React from 'react'

export default function Props(props) {
  return (
    <div>
      <h1>Props Component</h1>
      <h2>Receved Greatings From {props.PersonName}</h2>
      <h3>Props User Data - Name = {props.PersonName} & Age = {props.Age}</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat, dolore enim voluptatibus saepe ab tenetur sint veniam deserunt est?
    </div>
  )
}

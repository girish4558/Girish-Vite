import React from 'react'

export default function ListRendering() {

    const fruits = ["apple", "banana", "orenge", "grapes", "mango"]

    const employees = [
        {id :1, name:"A"},
        {id :2, name:"B"},
        {id :3, name: "C"}
    ]

    const courses = ["HTML5", "CSS3", "JavaScript"," React.js"]

    const bonus = [
        {eid : 101, ename: "Abhi", salary : 25000, bonus: 5000},
        {eid : 102, ename: "Rahul", salary : 75000, bonus: 8000},
        {eid : 103, ename: "Bhim", salary : 35000, bonus: 2000},
        {eid : 104, ename: "Saho", salary : 20000, bonus: 6000},
        {eid : 105, ename: "devara", salary : 47000, bonus: 3000},

    ]

  return (
    <div>
        <h1>Employee details</h1>
        <ol>
            {
                bonus.map((name,ind)=>(
                    <li key={ind}>
                        <table style={{textAlign : "center"}}>
                            <tr>
                                <td>{name.eid}</td>
                                <td>{name.ename}</td>
                                <td>{name.salary}</td>
                                <td>{name.bonus}</td>
                            </tr>
                        </table>
                    </li>
                ))
            }
        </ol>
        <h1>Bonus Details Aboue 3000</h1>
        <ol>
            {
                bonus.filter((bdata)=>(bdata.bonus>3000)).map((bsdata,ind)=>(
                    <li key={ind}>{bsdata.ename} - {bsdata.bonus}</li>
                ))
            }
        </ol>

        <h1>Courses</h1>
        <ol>
            {courses.map((name, ind)=>(
                <li key={ind}>{name}</li>
            ))}
        </ol>
        <h1>Fruits Data</h1>
      <ul type='circle'>
        {
            fruits.map((c,i,t)=>(
                <li key={i}>{c}</li>
            ))
        }
      </ul>

      <h1>Employee details</h1>

      <ul>
        {employees.map((c,i)=>(
            <li key={c.id}>{c.id} - {c.name}</li>
        ))}
      </ul>
    </div>
  )
}

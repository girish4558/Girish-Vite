import React, { useState } from 'react'

export default function  () {
//     const [isOpen, setIsOpen]= useState(false)
//     const [select, setSelect]= useState([])

//     const options = [
//         {id:1, lang:"Telugu"},
//         {id:2,lang:"English"},
//         {id:3,lang:"Tamil"},
//         {id:4,lang:"Hindi"},
//         {id:5,lang:"Kannada"}
//     ]

//     let HandleChange =(option)=>{
//         setSelect((prev)=>{
//             prev.includes(option)?prev.filter((item)=>item!==option):[...prev, option]

//         })

//     }
//   return (
//     <div style={{width: "300px", position:"relative"}}  >

//         <div
//             onClick={()=>setIsOpen(!isOpen)}
//             style={{
//                 border: "2px solid black",
//                 padding:"20px",
//                 cursor: "pointer"
//             }}
//         >
//             {select.length>0? select.join(", "):"Select Languages You Known: "}

//             <div
//                 style={{
//                     border: "1px solid black",
//                     position:"absolute",
//                     width: "100%",
//                     background:"#fff",
//                     zIndex:1
//                 }}
//             >
//                 {isOpen && 
//                     <div>
//                         {options.map((opt)=>(
//                             <label htmlFor="" key={options.id} style={{display:"block", padding:"10px"}}>
//                                 <input type="checkbox" checked={select.includes(opt.lang)} onChange={()=>{HandleChange(opt.lang)}}/>
//                                 {opt.lang}
//                             </label>
//                         ))}
//                     </div>
//                 }
//             </div>
//         </div>
        
//     </div>
// )

const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState([]);

  const options = [
    { id: 1, lable: "Telugu" },
    { id: 2, lable: "English" },
    { id: 3, lable: "Tamil" },
    { id: 4, lable: "Hindi" },
    { id: 5, lable: "Kannada" },
  ];

  const handleChange = (option) => {
    setSelect((perv) =>
      perv.includes(option)
        ? perv.filter((item) => item !== option)
        : [...perv, option]
    );
    console.log(select);
    
  };
  
  return (
    <div style={{fontSize:"30px", width: "600px", position: "relative", background : "blue", margin:"auto", padding:"30px", outline:"none"}}>
      {/* select box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
            color:"white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {select.length > 0 ? select.join(", ") : "Select Known Languages"}
      </div>
      {/* dropDown */}
      {isOpen && (
        <div
          style={{
            border: "1px solid black",
            position: "absolute",
            width: "100%",
            background: "#fff",
            zIndex: 1,
            background:"aqua",
          }}
        >
          {options.map((opt) => (
            <label key={opt.id} style={{ display: "block", padding: "10px", cursor:"pointer"}}>
              <input
                type="checkbox"
                checked={select.includes(opt.lable)}
                onChange={() => handleChange(opt.lable)}
              />
              {opt.lable}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

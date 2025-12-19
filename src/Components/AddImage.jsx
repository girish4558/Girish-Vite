import React, { useRef, useState } from 'react'

export default function AddImage() {
   const [newimageadded, setnewimageadded]= useState(true)
   const [ImgUrl, setImgUrl]= useState("")
   const ImgRef = useRef()

   let HandleImage1 = (e)=>{
        let file = e.target.files[0]

        if(file){
            const finalurl = URL.createObjectURL(file)
            setImgUrl(finalurl)
            setnewimageadded(false)
        }
   }

  return (
    <div className='add-container'>
        <h1 style={{margin:" 20px auto"}}>UseRef - Hook</h1>
        <input type="file" name="" id="" accept='image/*' ref={ImgRef} onChange={HandleImage1}  hidden/>
        {
            newimageadded?(
                <div className="img-container">
                    <h3>No Image Selected</h3>
                </div>
            ):(
                <img src={ImgUrl} alt="" className='Img'/>
            )
        }
        <button onClick={()=>{ImgRef.current.click()}}>{newimageadded? "Add Image":"Chanege Image"}</button>
    </div>
  )
}

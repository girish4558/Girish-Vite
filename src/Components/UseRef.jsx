import React, { useRef, useState } from 'react'

export default function UseRef() {
    const Inputref=useRef()

    let focusInput=()=>{
        Inputref.current.focus()
        console.log(Inputref.current.value.length);
        
    }

    const [imageadd, setimageadd] = useState(true)
    const [imgurl, setimageurl] = useState(" ")
    const imgref = useRef()

    let HandleImage= (e)=>{
      const file = e.target.files[0]

      if(file){
        const finalImg = URL.createObjectURL(file)
        setimageurl(finalImg)
        setimageadd(false)
      }
    }
    
  return (
    <div>
      <div>
        <input type="text" placeholder='Enter the data' ref={Inputref}/>
      <button onClick={focusInput}>Focus</button>
      </div>

      {/* Eg -3 */}

      <input type="file" name="" id="" ref={imgref} accept='image/*' onChange={HandleImage} hidden/>
      <div>
        {
          imageadd ?(
            <div
              className="Image-con"
              onClick={()=>{imgref.current.click()}}
            >
              Add An Image....!
            </div>
          ):(
            <img src={imgurl} alt="" className='image' onClick={()=>{imgref.current.click}}/>
          )
        }
      </div>
    </div>

  )
}

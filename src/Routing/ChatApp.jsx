import React, { useState } from 'react'

export default function ChatApp() {
    const [message, setMessage] = useState("")
    const [delay, setDelay]= useState(5)
    const [isSending, setIsSending]= useState(false)
    const [timerId, setTimerId] = useState(null)
    const [sendMessage, setSendMessage] = useState("")

    const HandleSend=()=>{
        setIsSending(true)
        let id = setTimeout(() => {
            setSendMessage(message)
            setMessage("")
            setIsSending(false)
            
        }, delay * 1000 );
        setTimerId(id)
    }

    const HandleCancle=()=>{
        // if(timerId) clearTimeout(timerId)
        // setIsSending(false)
    }
  return (
    <div className='ChatApp'>
        <div className="chat">
            <h1>Send Message & Store Within-Delay</h1>
            <textarea placeholder="Enter a message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <input type="number" value={delay} onChange={(e)=>setDelay(e.target.value)} />
            {(!isSending) ?(<button style={{background:"green"}} onClick={HandleSend}>Send Message with Delay</button>): ( <button style={{background:"red"}} onClick={HandleCancle}>Cancle the Message</button>)
            }
            {sendMessage && (
                 <div className='data'>
                    <h2>Meassages you Enterd</h2>
                    <ul>
                        <li>{sendMessage}</li>
                    </ul>
                 </div>
            )}
        </div>
    </div>
  )
}

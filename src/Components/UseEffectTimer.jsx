import React, { useEffect, useState } from 'react'
import Style from "./Timer.module.css";

export default function UseEffectTimer() {
    const [sec, setsec]= useState(0)
    const [isRunning, setIsRunning]=useState(false)

    useEffect(()=>{
        let intervalID
        if(isRunning){
            intervalID = setInterval(() => {
                setsec((prev)=>prev+1)
            }, 1000);
        }
        return ()=>clearInterval(intervalID)
    },[isRunning])

    const HandleStart =()=>{
        setIsRunning(true)
    }

    const HandleStop =()=>{
        setIsRunning(false)
    }

    const HandleReset=()=>{
        setsec(0)
        setIsRunning(false)
    }
  return (
    <div className={Style.container}>
        <div className={Style.main}>
            <p>Total Seconds: <b>{sec}</b></p>
            <button onClick={HandleStart}>START</button>
            <button onClick={HandleStop}>STOP</button>
            <button onClick={HandleReset}>RESET</button>
        </div>
    </div>
  )
}

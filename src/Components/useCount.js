import { useState } from "react"

function useCount(Intialvalue = 0){
    const [count, setCount]=useState(Intialvalue)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const reset =()=>{
        setCount(0)
    }
    return {count, increment, decrement, reset}
}

export default useCount
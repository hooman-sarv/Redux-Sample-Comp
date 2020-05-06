import React, { useState ,useEffect } from 'react'

function AutomaticTimer() {
    
    const [count , setCount]= useState(0)

    const thick = () =>{
        setCount(count + 1)
    }

    useEffect(()=>{
        const interval = setInterval(thick , 1000)
        return (()=>{
            clearInterval(interval)
        })

    },[count])

    return (
        <div>
            {count}
        </div>
    )
}

export default AutomaticTimer

import React, { useState, useMemo } from 'react'

const Counter = () => {

    const [counterOne , setCunterOne] = useState(0)
    const [counterTwo , setCunterTwo] = useState(0)

    const incrementOne = () =>{

        setCunterOne(counterOne + 1)
    }

    const incrementTwo = () =>{
            
    setCunterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0 
        while (i<2000000000) {
            i++
        }
            
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>counterOne : {counterOne}</button>
                <span>{ isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>counterTwo : {counterTwo}</button>
            </div>
        </div>
    )
  }
export default Counter



import React ,{useReducer} from 'react'

function CounterOne() {

    const initialState = 0
    const reducer = (state ,action) =>{
        
        switch (action) {
            case 'inc':
                return state + 1
            case 'dec':
                return state - 1
            case 'rst':
                return initialState
                
            default:
                return state
        }
        
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count is : {count}</div>
            <button onClick={()=>dispatch('dec')}>dec</button>
            <button  onClick={()=>dispatch('rst')}>rst</button>
            <button onClick={()=>dispatch('inc')}>inc</button>
        </div>
    )
}

export default CounterOne

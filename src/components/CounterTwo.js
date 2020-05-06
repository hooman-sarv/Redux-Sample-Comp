import React ,{useReducer} from 'react'

function CounterTwo() {

    const initialState = {
        firstCounter : 0,
        secondCounter : 10
    }
    const reducer = (state ,action) =>{
        
        switch (action.type) {
            case 'inc':
                return {...state, firstCounter : state.firstCounter + action.value}
            case 'dec':
                return {...state, firstCounter : state.firstCounter - action.value}
            case 'inc2':
                return {...state, secondCounter : state.secondCounter + action.value}
            case 'dec2':
                return {...state, secondCounter : state.secondCounter - action.value}
            case 'rst':
                return initialState
                
            default:
                return state
        }
        
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        
        <div>firstCounter is : {count.firstCounter}</div>
        <button onClick={()=>dispatch({type:'dec', value : 5})}>dec 5</button>
        <button onClick={()=>dispatch({type:'dec' , value : 1})}>dec</button>
        <button  onClick={()=>dispatch({type:'rst'})}>rst</button>
        <button onClick={()=>dispatch({type:'inc' , value : 1})}>inc</button>
        <button onClick={()=>dispatch({type:'inc' , value : 5})}>inc 5</button>

        <div>secondCounter is : {count.secondCounter}</div>
        <button onClick={()=>dispatch({type:'dec2' , value : 1})}>dec secondCounter</button>
        <button  onClick={()=>dispatch({type:'rst'})}>rst</button>
        <button onClick={()=>dispatch({type:'inc2' , value : 1})}>inc secondCounter</button>
            
        </div>
    )
}

export default CounterTwo

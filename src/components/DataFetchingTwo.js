import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'

const initialState={
    loading: true,
    post : {},
    error : ''
}

const reducer = (state = initialState , action) => {

    switch (action.type) {
        case 'success':
            return {
                loading:false,
                post : action.payload,
                error:''

            }
        case 'error':
            return {
                loading:false,
                post : {},
                error:'errorrrrrrrr'

            }
        default:
            return state
    }

}



function DataFetchingTwo() {
    
    const [state , dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            
        .then((res)=>{
            dispatch({type:'success' , payload:res.data})
            })

            .catch((err)=>{
                
                dispatch({type:'error'})

            })
    },[])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading , setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post , setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            
        .then((res)=>{
                setLoading(false)
                setPost(res.data)
                setError('')
            })

            .catch((err)=>{
                setLoading(false)
                setPost({})
                setError('errorrrrrrrr')

            })
    },[])

    return (
        <div>
            
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne

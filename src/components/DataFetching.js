import React, { useState, useEffect } from 'react'
import axios from "axios";
function DataFetching() {
    
    const [post ,setPost] = useState({})
    const [id ,setID] = useState(1)
    const [idFromButton ,setIdFromButton] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then((res)=>{
                const result = res.data
                console.log(res);
                setPost(result)

            })
            .catch((err)=>{
                const error = err.message
                console.log(err);
                setPost(error)
            })
    },[idFromButton])

    const handleClick = () =>{
        setIdFromButton(id)
    }
    return (
        <div>
        <input type='text' value ={id} onChange ={(e) => {
            setID(e.target.value)
        }} />
        <button type='button' onClick={handleClick} >Fetch Posts</button>

        <div>
            {post.title}
        </div>
            {/* <ul>
                {
                    posts.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching

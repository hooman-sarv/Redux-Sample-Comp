import React ,{useState, useEffect} from 'react'
import axios from 'axios'
function FetchAPI() {
    
    const [user , setUser] = useState([])

    useEffect(()=>{

        axios.get('https://jsonplaceholder.ir/users')

            .then((res)=>{
                const result = res.data
                console.log(res);
                setUser(result)
                
            })

            .catch((err)=>{
                const error = err.message
                console.log(err);
                setUser(error)
                
            })

    },[])
    
    return (
        <div>
            <ul>
                {user.map(item => (
                    <li key={item.id} > {item.username} </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchAPI

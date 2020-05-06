import React ,{useEffect}from 'react'
import { fetchUsers } from '../redux/user/userAction'
import { connect, useSelector, useDispatch } from 'react-redux'

function UserContainer() {
   
    const userData = useSelector( state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return userData.loading ? (
        <h2>Loading</h2>
    )
    : userData.error ? (
        <h2>{userData.error}</h2>
    ) 
    : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData.users.map(item => <p>{item.name}</p>)
                }
            </div>
        </div>
    )

}



export default UserContainer
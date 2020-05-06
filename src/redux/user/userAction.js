import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./userTypes"
import axios from "axios"

export const fetchRequest = () => {
    return {
        type : FETCH_REQUEST
    }
}

export const fetchSuccess = (users) => {
    return {
        type : FETCH_SUCCESS,
        payload : users
    }
}

export const fetchFailure = (error) => {
    return {
        type:FETCH_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    
    return (dispatch) => {

        //set loading true
        dispatch(fetchRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            dispatch(fetchSuccess(users))
        })
        .catch((error)=>{
            const errMsg = error.message
            dispatch(fetchFailure(errMsg))
        })
    } 
}
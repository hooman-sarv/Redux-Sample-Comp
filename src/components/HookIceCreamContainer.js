import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
import HooksCakeContainer from './HooksCakeContainer';

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Num of Hook IceCreams :{numOfIceCreams}</h2>
            <button onClick={()=>dispatch(buyIceCream())} >Buy IceCreams</button>
        </div>
    )
}
export default HooksIceCreamContainer
import React , {useState} from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} placeholder="enter num of Cake" onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (numItem) => {dispatch(buyCake(numItem))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)


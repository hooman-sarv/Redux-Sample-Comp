import React from 'react'
import {connect} from 'react-redux';
import { buyCake, buyIceCream } from '../redux';
function ItemContainer(props) {
    return (
        <div>
            <h2>Item -{props.item} </h2>
            <button onClick={props.buyItem}>But Items</button>
        </div>
    )
}

const mapStateToProps = (state , ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return{
        item : itemState
    }
}

const mapDipatchToProps = (dispatch , ownProps) => {

    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream()) 

    return{
        buyItem : dispatchFunction
    }
}

// if we dont want to have mapStateToProps we pass null instead of it
//export default connect(null,mapDipatchToProps)(ItemContainer)

export default connect(mapStateToProps,mapDipatchToProps)(ItemContainer)

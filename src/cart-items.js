import React, { useContext } from 'react';
import { ShopContext } from './node_module../../Context/shop-context'

export const CartItem = (props) =>{

    const { addToCart, cartItems,removeFromCart} = useContext(ShopContext)
    const {id,name, cost, product} = props.data
    return(
        <div>
            <img src={product} />
            <p>{name}</p>
            <p>${cost}</p>
            <div>
                <button onClick={() => addToCart(id)}>-</button>
                <input value={ cartItems[id] } />
                <button onClick={() => removeFromCart(id)}>+</button>
            </div>
        </div>
    )
}
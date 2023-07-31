import React, { useContext } from 'react';
import { Button, Space } from 'antd'
import { ShopContext } from './node_module../../Context/shop-context'

export const CartItem = (props) =>{

    const { addToCart, cartItems,removeFromCart} = useContext(ShopContext)
    const {id,name, cost, product} = props.data
    return(
        <div className='cart-item'>
            <img src={product} className='cart-img'/>
            <div className='cart-info'>
            <p>{name}</p>
            <p>${cost}</p>
            <div className='cart_btn'>
                <Button onClick={() => removeFromCart(id)}>-</Button>
                <input value={ cartItems[id] } className='cart-input'/>
                <Button onClick={() => addToCart(id)}>+</Button>
            </div>
            </div>
        </div>
    )
}
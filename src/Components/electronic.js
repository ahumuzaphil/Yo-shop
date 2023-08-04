import React, { useContext } from 'react';
import { Button } from 'antd'
import { ShopContext } from '../Context/shop-context';


console.log(ShopContext)
export default function Electronic(props){
    const {id,name, cost, product} = props.data
    const { addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return(
        <div>
            
            <div className='component'>
                <div className='container_img'>
            <img src={process.env.PUBLIC_URL + product} alt='Item' className='photo' />
            </div>
            <div className='dis'>
            <p className='num'>{name}</p>
            <p>${cost}</p>
            <Button type="primary"  className='btn' onClick={() => addToCart(id)}>
                Add to cart{ cartItemAmount > 0 && <>({cartItemAmount})</> }
                </Button>
            </div>
            </div>
        </div>
    )
}
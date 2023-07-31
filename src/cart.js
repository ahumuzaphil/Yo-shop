import React, { useContext } from "react"
import Elec from './Data/Electronic';
import { ShopContext } from './node_module../../Context/shop-context'
import { CartItem }  from "./cart-items";

//console.log(CartItems)
export default function Cart(){
    const { cartItems } = useContext(ShopContext)
    return(
        <div>
            <div>
                <h2 className="cart-h">Cart Items</h2>
                </div>
            <div>
                {Elec.map((item) => {
                    if(cartItems[item.id] !== 0){
                        return <CartItem data={item}/>
                    }
                })}
            </div>
        </div>
    )
}
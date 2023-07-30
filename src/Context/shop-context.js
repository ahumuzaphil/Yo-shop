import React, { createContext, useState} from "react";
import  Elec  from "../Data/Electronic"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < Elec.length + 1; i++){
        cart[i] = 0; 
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };
console.log(cartItems)
    const contextValue = {cartItems, addToCart, removeFromCart};
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


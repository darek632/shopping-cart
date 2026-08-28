import { useState,useEffect } from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

const Layout = () => { 
    const [cartItems, setCartItems] = useState([]);
    // for storing items in cart.

    //removing from basket
    const decreaseQuantity = (id) => {
        setCartItems(prev=> 
            prev.map(item => 
                item.id === id 
                ? item.quantity <= 1 
                    ? item 
                    : {...item,quantity: item.quantity - 1}
                    
                : item
            )
        )
    }

    //adding more to basket
    const increaseQuantity = (id) => {
        setCartItems(prev=> 
            prev.map(item => 
                item.id === id 
                ? {...item,quantity: item.quantity + 1}
                : item
            )
        )
    }

    const removeItem = (id) => { 
        setCartItems(prev=> prev.filter(item=> item.id !== id)
        )
    }


    console.log('Layout context value:', {cartItems, setCartItems});

    const addToCart = (product, quantity=1) => {
        // check if item exists in cart, if so then update quantity
        // add product to cart, with the quantity it has. 
        setCartItems(prev =>  {
            const existing = prev.find(item => item.id === product.id);

            if(existing) { 
                return (
                    prev.map(item => 
                        item.id === product.id 
                        ? {...item,quantity: item.quantity + quantity} 
                        : item)
                        // if there is a match for an existing item, copy other keys from old object and add quantity
                        // otherwise, return the other products as they were. 

                )
                
            }

            return [...prev, {...product,quantity}];
        })
      
    }
         const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
         console.log("the product objects:",cartItems)
        console.log("the total amount of items in cart is", cartQuantity);
    // cartQuantity is present here. 
    return(
        <>
        <NavBar 
        cartQuantity={cartQuantity}/>
        <Outlet context={{cartItems, addToCart, increaseQuantity, decreaseQuantity,removeItem}}/>
        </>
    )
}


export default Layout;
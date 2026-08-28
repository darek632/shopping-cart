import { useState,useEffect } from 'react';
import { useOutletContext } from 'react-router';
import styles from './Cart.module.css'

// const Cart = ()=> { 
//     const {cartItems,setCartItems } = useOutletContext();
//     return(
//         <>
//         <h1>This is your basket</h1>
//         <h2>Here you'll see all items </h2>
//         <div> The current basket contains</div>
//         <div>{cartItems.map(product=> (<div key={product.id}>{product.title} x {product.quantity}</div>))}</div>
//         </>
//     )
// }

// export default Cart;

const Cart = () => {
   
    const {increaseQuantity, decreaseQuantity, cartItems, removeItem } = useOutletContext();


    if (cartItems.length === 0) {
        return (
            <div className={styles.cartContainer}>
                <h1>Your basket is empty</h1>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            <h1>This is your basket</h1>
            <div className={styles.itemList}>
                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartRow}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className={styles.cartImage}
                        />
                        <div className={styles.cartDetails}>
                            <h3 className={styles.cartTitle}>{item.title}</h3>
                            <p className={styles.cartPrice}>£{item.price}</p>
                        </div>
                        <div className={styles.cartQuantity}>
                            <span>Qty:</span>
                            <button className={styles.qtyButton} onClick={()=> decreaseQuantity(item.id)}> - </button>
                             <span className={styles.quantityDisplay}>{item.quantity}</span>
                             <button className={styles.qtyButton} onClick={()=> increaseQuantity(item.id)}> + </button>
                        </div>
                        <div className={styles.cartSubtotal}>
                            £{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button className={styles.deleteButton} onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
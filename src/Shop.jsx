import styles from './Shop.module.css';
import { useState,useEffect } from 'react';
import { useOutletContext } from 'react-router';
//using outletcontext to bridge state in an Outlet component


const ProductCard = ({title,description,price,rating, imageUrl, cartQuantity, setCartQuantity, product,addToCart}) => { 

    // Shop is rendered instead of outlet so shop can get context. Shop > productlist > productCard is a normal component relationship
    // so just need to pass cartQuantity as props.

//issues with OutletContext and passing state to Outlet components > check tomorrow. 

    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity(prev => Math.max(1, prev - 1));
    const increment = () => setQuantity(prev => prev + 1);

        const handleAddToCart = () => {

            //product is an object containing each item's information, from API, passed down during mapping of ProductList. 
            addToCart(product, quantity);
            console.log(`${quantity} of ${title} items have been added to cart`)
            setQuantity(1);
           
        // placeholder to not throw a error
        // what happens when you add to cart: 
        //target ProductCard gets added to cart somewhere.
        // total productCard quantity gets shown in navbar.
        // quantity only, need to store whole ProductCard in state. 

        
    };

  
    return(<>
    <div className={styles.card}>
                        <div>
                            <img className={styles.cardImage} src={imageUrl} alt={title}/>
                        </div>
                        <div className={styles.cardText}>
                            <div>
                                <h4 className={styles.title}>{title}</h4>
                                
                            </div>
                            {/* <p className={styles.description}>{description} </p> */}
                            <div className={styles.productLinks}>
                                <div> {rating} stars </div>
                                <div> {`£${price}`} </div>
                                <div className={styles.quantitySelector}>
                                    <button onClick={decrement}>-</button>
                                    <input 
                                        type="number" 
                                        value={quantity} 
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        min="1"
                                    />
                                    <button onClick={increment}>+</button>

                                </div>
                                <div> <button className={styles.addToCart} onClick={handleAddToCart}>Add to cart </button></div>
                                
                            </div>
                        </div>
                    </div>
    </>)
    
}



const ProductList = ({products,addToCart}) => { 


return(
    <>
    <div className={styles.shopGrid}>
        {/* dynamically create all cards using products from earlier API call */}
        {products.map(product => (
            <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating.rate}
            imageUrl= {product.image}
        
            />

        )
            
        )}

    </div>
    </>
)

}



export const Shop = () => {

    //shop is the component directly rendered instead of outlet so can draw state from Layout. 
    // get everything this page needs - context and API call.
    // pass down as normal props to child components

    const {addToCart} = useOutletContext();
    
    const [products, setProducts] = useState([]);
    // for storing a lsit of fetched products.
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if(response.status >= 400) { 
                throw new Error("server error");
            }
            return response.json(); 
         } )
      
        .then(data => {setProducts(data)})
        .catch((error) => setError(error))
        .finally(()=> setLoading(false));


    },[]);


if(loading) return <p>Loading...</p>
if (error) return(<p>A network error has occurred</p>)

    return ( <ProductList 
        products={products}
        addToCart={addToCart}/>)
}

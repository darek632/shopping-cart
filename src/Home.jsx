import { useState,useEffect } from 'react'
import styles from './Home.module.css'
import bannerImage from './assets/banner-plate.jpg'

//  fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => console.log(data))
   




const FeaturedProduct = () => { 

    const[productList, setProductList] = useState(null);
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
      
        .then(data => {setProductList(data), console.log(data)})
        .catch((error) => setError(error))
        .finally(()=> setLoading(false));


    },[]);


if(loading) return <p>Loading...</p>
if (error) return(<p>A network error has occurred</p>)

return( 

<>

<div className={styles.card}>
                    <div>
                        <img className={styles.cardImage} src={productList[0].image} alt={productList[0].title}/>
                    </div>
                    <div className={styles.cardText}>
                        <div>
                            <h4 className={styles.title}>{productList[0].title}</h4>
                            
                        </div>
                        <p className={styles.description}>{productList[0].description} </p>
                        <div className={styles.productLinks}>
                            <div> {productList[0].rating.rate} stars </div>
                            <div> {`£${productList[0].price}`} </div>
                            
                        </div>
                    </div>
                </div>
</>)

}



export const Home = () => {
    return(
          <div className={`${styles.main} ${styles.about}`}>
             <h1>WAIGHTROUS </h1>

                <div className={styles.heroBanner}>
                    <img className={styles.heroImage} src={bannerImage} alt='banner image plate of food' />
                    <div className={styles.heroText}>
                        <h2>SHOP YOUR FAVOURITES ONLINE</h2>
                    </div>
                </div>
           
            <p>Featured items</p>
            <p> Paragraph 2</p>
            <FeaturedProduct/>

        </div>

    )
        
}



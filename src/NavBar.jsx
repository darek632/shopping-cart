import { Link,NavLink } from 'react-router';
import styles from './NavBar.module.css'
import { Outlet } from "react-router";

export const NavBar = ({cartQuantity}) => { 

    return(
        <>
        <div className={styles.heroTitle}>WAIGHTROUS</div>

        <div className={styles.menuHolder}>
            <Link className={styles.navButton} to="">Home </Link>
            <Link className={styles.navButton} to="shop">Shop</Link>
            <Link className={styles.navButton} to="cart">Cart <span className={styles.cartQuantity}>{cartQuantity}</span></Link>
        </div>
        </> 
    )
    
}
export default NavBar;
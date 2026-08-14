import { Link } from 'react-router';
import styles from './Navbar.module.css'
import { Outlet } from "react-router";

export const NavBar = () => { 
    return(
        <>
        <img src="/" alt="Shop logo" />

        <div className={styles.menuHolder}>
            <Link className={styles.navButton} to="">Home</Link>
            <Link className={styles.navButton} to="shop">Shop</Link>
            <Link className={styles.navButton} to="">Cart</Link>
        </div>

            <Outlet/>
    
            
   
        
        </> 
    )
    
}
export default NavBar;
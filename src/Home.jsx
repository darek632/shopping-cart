import { useState } from 'react'
import styles from './Home.module.css'



export const Home = () => {
    return(
          <div className={styles.main}>
            <h1>Home </h1>
            <h2>Some hero image and info</h2>
            <p>Paragraph</p>
            <p> Paragraph 2</p>
        </div>

    )
        
}


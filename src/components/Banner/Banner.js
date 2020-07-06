import React from 'react';
import styles from './styles.module.css';

export const Banner = ({backgroundImage, title, release_date, genres})=>{
    return <div className={styles.banner}>  
    {/* <div className={styles.img} style={{backgroundImage: backgroundImage}}></div> */}
    <img alt={title} src={backgroundImage} />
    <div className={styles.spanContainer}>
        <span className={styles.movieName}>asdasda{title}</span>
        <span className={styles.movieYear}>asdasdas{release_date}</span>
        <span className={styles.movieGenre}>asdasdas{genres}</span>
    </div>
    
</div>
}
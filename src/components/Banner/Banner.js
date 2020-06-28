import React from 'react';
import styles from './styles.module.css';

export const Banner = ({backgroundImage, title, release_date, genres})=>{
    return <div className={styles.banner}>  
    <div className={styles.img} style={{backgroundImage: backgroundImage}}></div>
    <div className={styles.spanContainer}>
        <span className={styles.movieName}>{title}</span>
        <span className={styles.movieYear}>{release_date}</span>
        <span className={styles.movieGenre}>{genres}</span>
    </div>
    
</div>
}
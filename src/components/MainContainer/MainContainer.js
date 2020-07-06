import React from 'react'
import styles from './styles.module.css'
import { useSelector} from 'react-redux';
import {Banner} from "../index"

export  const MainContainer = ()=>{
    const {
        data
      } = useSelector((state) => state);

return <div className={styles.mainContainer}>
    {/* {data.map((item)=> {
        return (
            <Banner 
            src={item.backgroundImage}
             title={item.title}
             release_date= {item.release_date}
             genres={item.genres} 
             />
             
        )
    })} */}


    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    <Banner backgroundImage="url(https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg)"/>
    Я
    </div>
}
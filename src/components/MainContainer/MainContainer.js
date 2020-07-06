import React from 'react'
import styles from './styles.module.css'
import { useSelector} from 'react-redux';
import {Banner} from "../index"

export  const MainContainer = ({children})=>{
    

return <div className={styles.mainContainer}>
  
    {children}
    </div>
}
import React from 'react'
import styles from './Points.module.css'
import dollar from '../../../styles/Icons/dollar coin green custom 1.svg'

const Points = () => {
  return (
    <div className={styles.points}>
        <div>
            <img src={dollar}/>
        </div>
        <div>
            +50.00
        </div>
    </div>
  )
}

export default Points
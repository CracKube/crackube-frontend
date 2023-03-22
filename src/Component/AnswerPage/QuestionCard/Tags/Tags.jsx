import React from 'react'
import styles from './Tags.module.css'
import { Flag } from '../../../Constants'

const Tags = () => {
  return (
    <div className={styles.tags}>
        <div className={styles.alltags}>
            <div>Maths</div>
            <div>Probability</div>
            <div>Statistics</div>
            <div>Complex</div>
        </div>
        <div className={styles.report}>
            <button>
                <img src={Flag} alt="" />
                <div>Report</div>
            </button>
        </div>
    </div>
  )
}

export default Tags
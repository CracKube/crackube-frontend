import styles from '../NavBar/TopNavBar.module.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';

export default function TopNavBar(){

    const [hoverMe, setHoverMe] = useState(false);

    const onEnterLeave = () => {
        setHoverMe(!hoverMe);
    }
    return(
        <div className={styles.header}>
            <div className={styles.topnavbar}>
                { hoverMe ? 
                    <input type="search" name="search" id="search" className={styles.search}/> :
                    <div className={styles.topmenu}>
                        <div><a href="">Answer</a></div>
                        <div><a href="">Blog</a></div>
                        <div><a href="">Code</a></div>
                    </div>
                }
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className={styles.searchButton}>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
            </div>
        </div>
    );
}
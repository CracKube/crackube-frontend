import styles from '../NavBar/TopNavBar.module.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

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
                        <div><NavLink to= '/Answer'>Answer</NavLink></div>
                        <div><NavLink>Blog</NavLink></div>
                        <div><NavLink>Code</NavLink></div>
                    </div>
                }
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className={styles.searchButton}>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
            </div>
        </div>
    );
}
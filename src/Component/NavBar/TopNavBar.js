import styles from '../NavBar/TopNavBar.module.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function TopNavBar({theme}){
    const [hoverMe, setHoverMe] = useState(false);
    const onEnterLeave = () => {
        setHoverMe(!hoverMe);
    }
    const setCookieBlog = () => {
        Cookies.set("state", "blogs", {
            expires: 7
        });
    };
    const setCookieAnswer = () => {
        Cookies.set("state", "answer", {
            expires: 7
        });
    };
    const setCookieCode = () => {
        Cookies.set("state", "code", {
            expires: 7
        });
    };

    const getCookie = () => {
        alert(Cookies.get("state"));
    }
    return(
        <div className='header'>
            <div className='topnavbar' id = {theme}>
                { hoverMe ? 
                    <input type="search" name="search"  className='searchnav'/> :
                    <div className= 'topmenuBar' id = {theme}>
                        <div onClick={setCookieAnswer}><NavLink to= '/Answer'>Answer</NavLink></div>
                        <div onClick={setCookieBlog}><NavLink>Blog</NavLink></div>
                        <div onClick={setCookieCode}><NavLink>Code</NavLink></div>
                    </div>
                }
                <button onClick={getCookie}></button>
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className={styles.searchButton}>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
            </div>
            </div>
    );
}
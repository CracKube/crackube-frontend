import '../NavBar/TopNavBar.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

<<<<<<< HEAD
export default function TopNavBar({theme}){
    const [hoverMe, setHoverMe] = useState(false);
    const onEnterLeave = () => {
        setHoverMe(!hoverMe);
    }
    return(
        <div className='header'>
            <div className='topnavbar' id = {theme}>
                { hoverMe ? 
                    <input type="search" name="search"  className='searchnav'/> :
                    <div className= 'topmenuBar' id = {theme}>
                        <div><NavLink to= '/Answer'>Answer</NavLink></div>
                        <div><NavLink>Blog</NavLink></div>
                        <div><NavLink>Code</NavLink></div>
                    </div>
                }
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className={styles.searchButton}>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
=======
export default function TopNavBar({ state, setState }) {

    const [show, setShow] = useState(false);

    return (
        <div className="header">
            <div className="topnavbar">
                <div class="island">

                    {show ?
                        <input type="search" name="search" id="search" className="search" />
                        :
                        <div className="topmenu">
                            <div className={`nav-link ${state == "Blog" ? "nav-active" : ""}`} onClick={e => setState("Blog")} >Blog</div>
                            <div className={`nav-link ${state == "Answer" ? "nav-active" : ""}`} onClick={e => setState("Answer")}>Answer</div>
                            <div className={`nav-link ${state == "Code" ? "nav-active" : ""}`} onClick={e => setState("Code")}>Code</div>
                        </div>
                    }
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShow(!show);
                        }}
                        className="searchButton"
                    >
                        <a href=""><img src={searchicon} alt="" /></a>
                    </button>
                </div>
                <div >
                    <div
                        className='nav-link-btn'
                        onClick={e => window.location.href = '/upload'}
                    >☁️Upload </div>
                </div>
                <div
                    className='nav-link-cog'
                    onClick={e => window.location.href = '/settings'}
                >⚙️</div>
>>>>>>> 6add0a2fbe1292d0bc1f7191f8e566c08ac66291
            </div>
        </div>
    );
}
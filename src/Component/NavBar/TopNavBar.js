import '../NavBar/TopNavBar.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

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
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className='searchButton'>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
                </div>
                <div >
              
                </div>
            
        </div>
    );
}
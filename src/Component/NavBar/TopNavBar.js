
import searchicon from '../../styles/Icons/Search 1.svg';
import Noti from '../../Assets/Noti.svg'
import Settings from '../../Assets/Settings.svg'
import PropTop from '../../Assets/ProfileTop.svg'
import { useState } from 'react';
import Upload from '../../Assets/uploadBtn.svg'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import './TopNavBar.css'
import { Link } from 'react-router-dom'
import { configure } from '@testing-library/react';

export default function TopNavBar({theme}){
    const [hoverMe, setHoverMe] = useState(false);
    const [section, setSection] = useState('blogs');
    const [show, setShow] = useState(false);
    const buttonHandler = ('click', () => {
    setShow(!show);
  });
    const onEnterLeave = () => {
        setHoverMe(!hoverMe);
    }
    const setCookieBlog = () => {
        setSection('blogs');
        Cookies.set("state", "blogs", {
            expires: 30
        });
    };
    const setCookieAnswer = () => {
        setSection('answer');
        Cookies.set("state", "answer", {
            expires: 30
        });
    };
    const setCookieCode = () => {
        setSection('code');
        Cookies.set("state", "code", {
            expires: 30
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
                        <div onClick={setCookieAnswer} className={`btn-${section}`} ><NavLink to= '/Answer'>Answer</NavLink></div>
                        <div onClick={setCookieBlog} className={`btn-${section}`}><NavLink to = '/home'>Blog</NavLink></div>
                        <div onClick={setCookieCode} className={`btn-${section}`}><NavLink to = '/home'>Code</NavLink></div>
                    </div>
                }
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className='searchButton'>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
            </div>
            <div className='nav-btn'>
                <div className='upload-nav-btn'><Link to = '/upload'><button><img src= {Upload} alt="" />Upload</button></Link></div>
                <img src={Noti} alt="" />
                <img src= {Settings} alt="" />
                <div className='drop-flex'>
                <img className='prof-pic-nav' onClick={buttonHandler} src= {PropTop} alt="" />
                 
                 {show && (
                    <div className="dropDown">
                    <ul>
                        <div className='pad'>
                            <div className='icon-style'>Answer a Question</div>
                            <div className='icon-style'>Post a Blog</div>
                           <Link to = '/profile'><div className='icon-style'>Profile</div> </Link>  
                        </div>
                    </ul>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}
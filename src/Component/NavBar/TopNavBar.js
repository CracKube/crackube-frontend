
import searchicon from '../../styles/Icons/Search 1.svg';
import Noti from '../../Assets/Noti.svg'
import Settings from '../../Assets/Settings.svg'

import { useState } from 'react';

import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import './TopNavBar.css'
import Dropdown from '../DropDown/DropDown';
import UploadDropdown from '../DropDown/UploadDropDown';
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
    const options = [
        { value: 'option1', label: 'Settings', route : '/settings' },
        { value: 'option2', label: 'Help' },
        { value: 'option3', label: 'Logout' },
      ];
    const uploadOption = [
        { value: 'option1', label: 'write a blog', route : '/uploadblogs'},
        { value: 'option2', label: 'Answer a question', route : '/uploadanswer' },
        { value: 'option3', label: 'Code', route : '/uploadcode' },
      ];
        
    return(
        <div className='header'>
            <div className='topnavbar' id = {theme}>
                { hoverMe ? 
                    <input type="search" name="search"  className='searchnav'/> :
                    <div className= 'topmenuBar' id = {theme}>
                        <div onClick={setCookieAnswer} className= 'button-nav'><NavLink to= '/answer'>Answer</NavLink></div>
                        <div onClick={setCookieBlog} className= 'button-nav'><NavLink to = '/home'>Blog</NavLink></div>
                        <div onClick={setCookieCode} className= 'button-nav'><NavLink to = '/code'>Code</NavLink></div>
                    </div>
                }
                <button onClick={(e)=> {e.preventDefault(); onEnterLeave()}} className='searchButton'>
                    <a href=""><img src={searchicon} alt="" /></a>
                </button>
            </div>
            <div className='nav-btn'>
                <div className='upload-nav-btn'>
                <UploadDropdown options={uploadOption} />
                </div>
                
                <img src={Noti} alt="" />
                <img src= {Settings} alt="" />
                <div className='drop-flex'>
                
                
                </div>
                <div>
                <Dropdown options={options} />
                </div>
            </div>
        </div>
    );
}
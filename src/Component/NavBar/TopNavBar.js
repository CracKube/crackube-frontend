import '../NavBar/TopNavBar.css'
import searchicon from '../../styles/Icons/Search 1.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

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
            </div>
        </div>
    );
}
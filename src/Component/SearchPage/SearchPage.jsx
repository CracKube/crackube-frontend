import React, {useState} from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'
function SearchPage = () => {
  const [input, setInput ] = useState("");
  return (

    <div className='home'>
      <MenuBar>
          <div className="menu-bar-link">
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Home</p></Link>
            <Link to='/search' className="menu-btn"><img src={homeIcon} alt=""/><p>Explore</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>CK Originals</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Bookmarks</p></Link>
            <Link to='/' className="menu-btn"><img src={homeIcon} alt=""/><p>Your Content</p></Link>
          </div>
        </MenuBar>
   
        
       
        <div className='home-container'>
        <TopNavBar className= "search-change" ></TopNavBar>
        <div className='SearchPage'>
        <div className='Comp-Name' >
            <p>CracKube</p>      
            
        </div>
        <div className='Search'>
        <img src= {Search} alt="img" />    
        <input className='search-bar' 
        type="text"
        placeholder='Search for anything'/>
        <button className='search-button'>Search</button>
    
        </div>
        <div className='coverUp'>
        <div ><p>Discover</p></div>
        <div className='Discover'>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
            <div className='Dbox'></div>
        </div>
        </div>
        </div>
        
       
    </div>
    </div>
  )
}

export default SearchPage
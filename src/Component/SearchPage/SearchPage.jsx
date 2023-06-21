import React, { useEffect, useState } from 'react'
import Search from '../../Assets/search.svg'
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar'
import { MainBar, TopNavBar } from '../Constants'
import homeIcon from '../../Assets/homeIcon.svg'

const SearchResultsList = ({ results }) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
          return <div key={id}>{result}</div>
        })
      }
    </div>
  )
}

function SearchPage() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [blogs, setBlogs] = useState([])
  const [questions, setQuestions] = useState([])
  const [users, setUsers] = useState([])


  const getData = async () => {
    const response1 = await fetch('https://crackube-backend-test.onrender.com/blogs/getAll');
    const data1 = await response1.json();
    setBlogs(data1)

    const response2 = await fetch('https://crackube-backend-test.onrender.com/questions/get');
    const data2 = await response2.json();
    setQuestions(data2)

    const response3 = await fetch('https://crackube-backend-test.onrender.com/users/getUsers');
    const data3 = await response3.json();
    setUsers(data3)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (value) => {
    setInput(value)
    if (value == "") {
      setResults([])
      return
    }

    let newResult = []

    blogs.forEach(blog => {
      if (blog.blogTitle.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(blog.blogTitle)
      }
    })

    questions.forEach(question => {
      if (question.questionBody.toLowerCase().includes(value.toLowerCase())) {
        newResult.push(question.questionBody)
      }
    })

    // users.forEach(user => {
    //   if (user.firstName.toLowerCase().includes(value.toLowerCase())) {
    //     newResult.push(user.firstName)
    //   }
    // })

    setResults(newResult)
  }

  return (
    <div className='home'>
      <MenuBar>
        <div className="menu-bar-link">
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Home</p></Link>
          <Link to='/search' className="menu-btn"><img src={homeIcon} alt="" /><p>Explore</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>CK Originals</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Bookmarks</p></Link>
          <Link to='/' className="menu-btn"><img src={homeIcon} alt="" /><p>Your Content</p></Link>
        </div>
      </MenuBar>



      <div className='home-container'>
        <TopNavBar className="search-change" ></TopNavBar>
        <div className='SearchPage'>
          <div className='Comp-Name' >
            <p>CracKube</p>

          </div>
          <div className='Search'>
            <img src={Search} alt="img" />
            <input className='search-bar'
              type="text"
              placeholder='Search for anything'
              value={input}
              onChange={e => handleChange(e.target.value)}
            />
            <button className='search-button'>Search</button>
            <SearchResultsList results={results} />
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
import React, {useEffect, useState} from 'react'
import Search from '../../../Assets/search.svg'

const SearchBarDiv = ({handleChange})=>{
    const [input, setInput ] = useState("");

    return(
        <div className='Search'>
            <img src= {Search} alt="img" />    
            <input className='search-bar' 
            type="text" value={input} onChange={(e) => {setInput(e.target.value);handleChange(e.target.value)}}
            placeholder='Search for anything'/>
            <button className='search-button'>Search</button>

        </div>

    )
    }
      


const SearchResultsList =({results, prop}) => {
    return(
      <div className={`results-list-${prop}`}>
        {
          results.map((result,id)=>{
            return <SearchResult result={result} key={id}/>
          })
        }
      </div>
    )
  }
  
  const SearchResult =({result})=> {
    return (
    <div className='search-result'>
      
      <img className='search-list-icon'src= {Search} alt="img" />
      {result}</div>
    )
  
  }
  

function SearchBar ({prop}) {
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

  
      setResults(newResult)
    }
    return (

        <div>

            <SearchBarDiv handleChange={handleChange}/>
            <SearchResultsList results={results} prop = {prop}/>
        </div>
         
    )
}
export default SearchBar
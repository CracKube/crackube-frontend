import React from 'react'
import style from './results.module.css'
import Search from '../../Assets/search.svg'
function SearchBarResults({press, setPress}) {
  return (
    <div className={style.container}>
        <div className={style.searchcontainer}>
            <input type="text" className={style.input} />
            <div className={style.searchicon}><img src={Search} alt="" /></div>
        </div>
        <div className={style.filters}>
            <div className={style.leftfilters}>
                <button className={style.button} onClick={(e) => setPress('Answer')}>Answer</button>
                <button className={style.button} onClick={(e) => setPress('Blog')}>Blog</button>
                <button className={style.button} onClick={(e) => setPress('Code')}>Code</button>
                <button className={style.button} onClick={(e) => setPress('People')}>People</button>
            </div>
            <div className={style.rightfilters}>
                <button className={style.button}>Filter</button>
            </div>
        </div>
    </div>
  )
}

export default SearchBarResults
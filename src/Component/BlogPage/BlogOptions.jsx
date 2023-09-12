import React from 'react'
import styles from './BlogAuthor.module.css';
const BlogOptions = ({img, note}) => {
  return (
    <div className= {styles.blogOp}>
        <div>
        <img src = {img} alt="" />
        </div>
        <div>
        <p>{note}</p>
        </div>
        
    </div>
  )
}

export default BlogOptions
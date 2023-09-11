import React from 'react'
import { CardImage1, CardTitle1, CardAuthor1 } from '../Constants';
import moment from 'moment/moment';
import './Card.css'
function Card(props) {
  return (
    <div className="card__container" style={{ cursor: 'pointer' }}
    onClick={() => { window.location.href = `/blog/${props.id}`; }}>
        <div className="img__container">
            <div className='tags-container'>{props.tags}</div>
            <img src= {props.thumbnail} alt="" className='thumbnailBlog'/>
            
        </div>
        <div>
        <CardTitle1 className='titleContainer' title={props.title} />
        </div>
        <div className="card__details">
            
            <CardAuthor1 authorImage = {props.authorImage} author={props.author} modified={moment(props.modified).fromNow()} />
        </div>
        
    </div>
  )
}

export default Card
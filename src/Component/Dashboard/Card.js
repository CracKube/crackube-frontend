import React from 'react'
import { CardImage1, CardTitle1, CardAuthor1 } from '../Constants';
import moment from 'moment/moment';
import './Card.css'
function Card(props) {
  return (
    <div className="card__container" style={{ cursor: 'pointer' }}
    onClick={() => { window.location.href = `/blog/${props.id}`; }}>
        <div className="img__container">
            <img src= {props.thumbnail} alt="" className='thumbnail' />
        </div>
        <div className="card__details">
            <CardTitle1 classname='titleContainer' title={props.title} />
            <CardAuthor1 authorImage = {props.authorImage} author={props.author} modified={moment(props.modified).fromNow()} />
        </div>
        
    </div>
  )
}

export default Card
import React from 'react'
import style from './results.module.css'
import Author from './Author'
import Heart from '../../Assets/Heart.png';
import Share from '../../Assets/Share.png';
import Options from '../../Assets/Options.png';


import { QuestionAuthor } from '../Constants'
function ResultCards(prop) {
  return (
    <div className={style.cardsCover}>
        <div className={style.blogPic}>

        </div>
        <div className={style.blogDetails}>
            <div className={style.title}>
                <div>
                <p>{prop.title}</p>
                </div>
                <div className= {style.menu}>
                <img src={Heart} alt="" />
                <img src={Share} alt="" />
                <img src= {Options} alt="" />
                </div>
                
            </div>
            <div className={style.Author}>
                 <Author/>
            </div>

            <div className={style.content}>
                <p>{prop.content}</p>
            </div>
        </div>
    </div>
  )
}

export default ResultCards
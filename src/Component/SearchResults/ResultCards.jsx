import React from 'react'
import style from './results.module.css'
import Author from './Author'
import Heart from '../../Assets/Heart.png';
import Share from '../../Assets/Share.png';
import Options from '../../Assets/Options.png';

import { QuestionAuthor } from '../Constants'
function ResultCards(prop) {
    if(prop.press === "Blog") {
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
    else if(prop.press === "Answer") {
        return (
            <div>Answer</div>
        )
    }else if (prop.press === "Code") {
        return (
            <div>Code</div>
        )
    }else if (prop.press === "People") {
        return (
            <div>People</div>
        )
    }
}

export default ResultCards
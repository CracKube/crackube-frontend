import React, { useState } from 'react'
import { Card2, thumbnailUrl, authorUrl2 } from '../Constants'
import style from './Answerlist.module.css'


function AnswerList() {
    const [noAnswer, setNoAnswer] = useState(20) 
    let card = []
    for(let i = 0; i<noAnswer; i++){
        card.push(<Card2 key={i} thumbnail={thumbnailUrl} authorImage={authorUrl2}/>)
    }
    return (
        <>
            <div className={`${style['answer-list']}`}>
                {card}
            </div>
        </>
    )
}

export default AnswerList
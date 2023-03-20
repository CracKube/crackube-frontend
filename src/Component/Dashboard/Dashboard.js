import { Card1, Card2, thumbnailUrl, authorUrl, authorUrl2  } from '../Constants'
import styles from './Dashboard.module.css'
import { useState } from 'react';

export default function Dashboard(props){
    const cards = [];
    let classname = 'dashboard1';
    if(props.type === 'card1'){
        classname = 'dashboard1';
        for(let i=0;i<8;i++){
            cards.push(<Card1 key={i} thumbnail={thumbnailUrl} authorImage={authorUrl}/>);
        }
    }
    else{
        classname = 'dashboard2';
        for(let i=0;i<4;i++){
            cards.push(<Card2 key={i} thumbnail={thumbnailUrl} authorImage={authorUrl2}/>);
        }
    }

    const [card, setCard] = useState(cards);
    return(
        <div className={`${styles[classname]}`}>
            {card}
        </div>
    );
}
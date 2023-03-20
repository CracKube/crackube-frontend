import Card1 from '../Card/Card1/Card1'
import Card2 from '../Card/Card2/Card2'
import styles from './Dashboard.module.css'
import thumbnailUrl from '../../styles/Sample-Blog-Thumbnail.svg'
import authorUrl from '../../styles/Sample-Author.svg'
import authorUrl2 from '../../styles/Sample-Author 2.svg'
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
import styles from './Card2.module.css'
import { CardFlex, CardTitle1, CardAuthor1 } from '../../Constants';
import moment from 'moment';


export default function Card2(props) {
    return (
        <div className={styles.card2}>
            <CardFlex tags={props.tags} likes={props.likes} dislikes={props.dislikes} />
            <CardTitle1 title={props.title} classname='titleContainer2' />
            <CardAuthor1 author={props.author} modified={moment(props.modified).fromNow()} url={props.authorImage} />
        </div>
    );
}
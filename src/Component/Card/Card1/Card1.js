import styles from './Card1.module.css';
import { CardImage1, CardAuthor1, CardTitle1 } from '../../Constants'
import moment from 'moment/moment';


function Card1(props) {
    return (
        <div
            className={styles.card1}
            style={{ cursor: 'pointer' }}
            onClick={() => { window.location.href = `/blog/${props.id}`; }}>
            <CardImage1 image={props.thumbnail} />
            <CardTitle1 classname='titleContainer' title={props.title} />
            <CardAuthor1 authorImage = {props.authorImage} author={props.author} modified={moment(props.modified).fromNow()} />
        </div>
    )
}

export default Card1;
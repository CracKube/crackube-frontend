import styles from './Card1.module.css';
import { CardImage1, CardAuthor1, CardTitle1 } from '../../Constants'
import moment from 'moment/moment';


function Card1(props) {

    return (
        <div
            className={styles.card1}
            onClick={() => { window.location.href = `/blog/${props.id}`; }}
        >
            <CardImage1 image={props.thumbnail} />
            <CardTitle1 classname='titleContainer' title={props.title} />
            <CardAuthor1 author={props.author} modified={moment(props.modified).fromNow()} url={props.authorImage} />
        </div>
    )
}

export default Card1;
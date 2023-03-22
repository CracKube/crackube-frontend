import styles from './QuestionAuthor.module.css';
import { bookmarkUrl } from '../../../Constants';

export default function QuestionAuthor(props){
    return(
        <div className={styles.authorContainer}>
            <div className={styles.image}>
                <a href=""><img src={props.url} alt="" /></a>
            </div>
            <div className={styles.title}>
                <div><a href="">{props.author}</a></div>
                <div style={{fontWeight: '100', fontSize: '12px', lineHeight: '5px', color: '#5F5F5F'}}>{props.modified}</div>
            </div>
            <div className={styles.follow}>
                <button>Follow</button>
            </div>
            <div className={styles.bookmark}>
                <img src={bookmarkUrl} alt="" />
            </div>
            <div className={styles.emojis}>
                <div></div>
            </div>
        </div>
    );
}
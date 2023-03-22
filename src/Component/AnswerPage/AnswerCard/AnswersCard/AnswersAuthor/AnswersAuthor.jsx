import styles from './AnswersAuthor.module.css';
import { BestAnswer} from '../../../../Constants';

export default function AnswersAuthor(props){
    return(
        <div className={styles.authorContainer}>
            <div className={styles.authordetails}>
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
            </div>
            <div className={styles.bestanswer}>
                <div>
                    <img src={BestAnswer} alt="" />
                    <div>BEST ANSWER</div>
                </div>
            </div>
        </div>
    );
}
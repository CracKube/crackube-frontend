import styles from './CardAuthor1.module.css';
import { bookmarkUrl } from '../../Constants';
import BlogShare from '../../../Assets/BlogShare.svg'
import BlogOptions from '../../../Assets/BlogOption.svg'
import BlogLike from '../../../Assets/BlogLike.svg'
export default function CardAuthor1(props){
    const ques = props.author.length;
    const val = props.author.slice(0,25);
    return(
        <div className={styles.authorContainer}>
            <div className={styles.image}>
               <a href=""><img src={props.authorImage} alt="" /></a> 
            </div>
            <div className={styles.title}>
                <div><a href="">
                { ques < 25 ? (<>
                <div>{props.author}</div>
                </>): 
                <>
                <div>
                    {val}...
                </div>
                </>}</a></div>
                <div style={{fontWeight: '50'}}>{props.modified}</div>
            </div>
            <div className={styles.bookmark}>
                <a href=""><img src= {BlogLike} alt="" /></a>
                <a href=""><img src= {BlogShare} alt="" /></a>
                <a href=""><img src={BlogOptions} alt="" /></a>
            </div>
        </div>
    );
}
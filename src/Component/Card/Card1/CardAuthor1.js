import styles from './CardAuthor1.module.css';
import { bookmarkUrl } from '../../Constants';
import BlogShare from '../../../Assets/BlogShare.svg'
import BlogOptions from '../../../Assets/BlogOption.svg'
import BlogLike from '../../../Assets/BlogLike.svg'
export default function CardAuthor1(props){
    const ques = props.author && props.author.length;
    const val = ques && props.author.slice(0,10);
    return(
        <div className={styles.authorContainer}>
            <div className={styles.image}>
               <a href=""><img src={props.authorImage} alt="" /></a> 
            </div>
            <div className={styles.title}>
                <div><a href="">
                { ques < 10 ? (<>
                <div className='auth-name'>{props.author}</div>
                </>): 
                <>
                <div className='auth-name'>
                    {val}...
                </div>
                </>}</a></div>
                <div className='modi'>posted {props.modified}</div>
            </div>
            <div className={styles.bookmark}>
                <a href=""><img src= {BlogLike} alt="" /></a>
                <a href=""><img src= {BlogShare} alt="" /></a>
                <a href=""><img src={BlogOptions} alt="" /></a>
            </div>
        </div>
    );
}
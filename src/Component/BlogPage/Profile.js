import styles from './BlogAuthor.module.css';
import BlogOptions from './BlogOptions';
import Like from '../../Assets/Heart.svg';
import Share from '../../Assets/Share.svg';
import Flag from '../../Assets/Flag.svg';
import Options from '../../Assets/Option.svg';
import Save from '../../Assets/BK_BLOG.svg'
export default function Profile(props){
    return(
        <div className={styles.authorContainer}>
            <div className= {styles.authorContainer}>
            <div className={styles.image}>
                <a href=""><img className= {styles.img} src={props.url} alt="" /></a>
            </div>
            <div className={styles.cover} >
                <div className={styles.title}><a href="">{props.author}</a></div>
                <div className={styles.modified} style={{fontWeight: '100'}}>{props.modified}</div>
                
            </div>
            <div className={styles.followbtn}>
            <button  className={styles.follow}>Follow</button>
            </div>
            </div>
            
            <div className= {styles.blogopalign}>
                <BlogOptions img = {Like} note = "Like" /> 
                <BlogOptions img = {Share} note = "Share" />
                <BlogOptions  img = {Save} note = "Save" />
                <BlogOptions img = {Flag} note = "Report" />
                <BlogOptions img = {Options} note = "" />
            </div>
            
        
        </div>
    );
}
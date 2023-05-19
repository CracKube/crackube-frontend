import styles from './BlogAuthor.module.css';
export default function Profile(props){
    return(
        <div className={styles.authorContainer}>
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
    );
}
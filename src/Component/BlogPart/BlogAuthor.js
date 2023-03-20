import styles from './BlogAuthor.module.css'

export default function BlogAuthor(props){
    return(
        <div className={styles.authorContainer}>
            <div className={styles.image}>
                <a href=""><img src={props.url} alt="" /></a>
            </div>
            <div className={styles.title}>
                <div>
                    <a href="">{props.author}</a>
                    <button>Follow</button>
                </div>
                <div style={{fontWeight: '50'}}>{props.modified}</div>
            </div>
            <div className={styles.bookmark}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
import styles from './CardFlex.module.css'

export default function CardFlex({ tags, likes, dislikes }) {
    return (
        <div className={styles.cardflex}>
            <div className={styles.subject}>
                {tags?.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
            <div className={styles.points}>
                <p>{likes?.length || 0}👍</p>
                <p>{dislikes?.length || 0}👎</p>
            </div>
        </div>
    );
}
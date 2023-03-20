import styles from './CardFlex.module.css'

export default function CardFlex(){
    return(
        <div className={styles.cardflex}>
            <div className={styles.subject}>
                <p>Physics</p>
            </div>
            <div className={styles.points}>
                <p>+50.00</p>
            </div>
        </div>
    );
}
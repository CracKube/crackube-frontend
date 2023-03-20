import styles from './CardImage1.module.css';

export default function CardImage1(props)  {
    return(
        <div className={styles.cardImage}>
            <img src={props.image} alt={props.alt}/>
        </div>
    )
};
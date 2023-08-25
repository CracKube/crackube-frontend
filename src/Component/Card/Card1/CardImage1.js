import styles from './CardImage1.module.css';

export default function CardImage1(props) {
    return (
        <div className={styles.cardImage}>
            {/* <img src={`data:image/png;base64,${props.image}`} alt={props.alt} /> */}
            <a href="" className='img__poster'>
            <img 
                 key = {props.id}
                 src={props.image} />
            </a>
                 
            </div>
    
    )
};
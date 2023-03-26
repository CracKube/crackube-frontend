import styles from './Heading.module.css';

export default function Heading(props){
    return(
        <>
        <div>
            <p  className={styles.heading}>
                <a href="">{props.text}</a>
            </p>
        </div>
        </>
    );
}
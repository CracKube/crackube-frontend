import styles from './Heading.module.css';

export default function Heading(props){
    return(
        <>
            <h1 className={styles.heading}>
                <a href="">{props.text}</a>
            </h1>
        </>
    );
}
import styles from './Heading.module.css';
import {Link} from 'react-router-dom'

export default function Heading(props){
    return(
        <>
        <div>
            <p  className={styles.heading}>
                <Link to=""><p>{props.text}</p></Link>
            </p>
        </div>
        </>
    );
}
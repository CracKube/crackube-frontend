import styles from './Heading.module.css';
import {Link} from 'react-router-dom'

export default function Heading({text,theme}){
    return(
        <>
        <div>
            <p  className='heading' id = {theme}>
                {text}
            </p>
        </div>
        </>
    );
}
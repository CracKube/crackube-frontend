import styles from './AddButton.module.css';
import { addbutton } from '../Constants';

export default function AddButton(){
    return(
        <>
            <button className={styles.addbutton}>
                <img src={addbutton} alt="" />
            </button>
        </>
    );
}
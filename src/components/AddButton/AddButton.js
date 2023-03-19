import styles from './AddButton.module.css';
import url from '../../styles/Icons/PlusIcon 1.svg'

export default function AddButton(){
    return(
        <>
            <button className={styles.addbutton}>
                <img src={url} alt="" />
            </button>
        </>
    );
}
import styles from './gpt.module.css';
import { authorUrl as url, Diamond as url1 } from '../Constants'

export default function GPTProfile({details, time, setIsModalOpen}) {
    console.log(details.name)
    return (
        <div className={styles.profile}>
            
            <div className={styles.pfcardcontainer}>
                <div className= {styles.gptDetails}>
                    <h6>REMAINING</h6>
                    <p>1,000 Credits</p>
                    <h5>750 Words</h5>
                    <button onClick={setIsModalOpen(true)}><p>Buy Credits</p></button>

                </div>
            </div>

        </div>
    );
}
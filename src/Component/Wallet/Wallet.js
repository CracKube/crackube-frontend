import styles from './Wallet.module.css';
import url from '../../styles/Icons/dollar coin green custom 1.svg';

export default function Wallet(){
    return(
        <div className={styles.wallet}>
            <div className={styles.walletAmount}>
                <img src={url} alt="" />
                <p></p>
            </div>
            <div className={styles.walletTitle}>
                <p>Wallet</p>
            </div>
        </div>
    );
}
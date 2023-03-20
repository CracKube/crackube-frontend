import styles from './LogoBar.module.css';
import url from '../../../styles/Icons/MenubarIcon 1.svg'
import url1 from '../../../styles/Icons/Logo Icon.svg'

export default function LogoBar(){
    return(
        <div className={styles.logobar}>
            <div className={styles.menubaricon}>
                <img src={url} alt="" />
            </div>
            <div className={styles.logo}>
                <img src={url1} alt="" />
            </div>
            <div className={styles.logotext}>
                <p>Crackube</p>
            </div>
        </div>
    );
}
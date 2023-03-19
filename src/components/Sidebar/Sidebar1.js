import styles from '../Sidebar/Sidebar1.module.css';
import LogoBar from './LogoBar/LogoBar';
import Profile from './Profile/Profile';

export default function Sidebar1(){
    return(
        <div className={styles.sidebarleft}>
            <LogoBar />
            <Profile />
        </div>
    );
}
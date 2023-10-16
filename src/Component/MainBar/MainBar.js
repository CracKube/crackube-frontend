import styles from '../MainBar/MainBar.module.css'
import TopNavBar from '../NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import Infinite from '../InfinitePart/Infinite';
import { Card1 } from '../Constants';
import Wand from '../../Assets/magicWand.svg';
import Follow from '../../Assets/userFollower.svg';
import { ThemeContext } from '../Pages/Home';

export default function MainBar({theme}) {
    return (
        <ThemeContext.Provider >
        <div className={styles.mainbar}>
            <div className="home-options">
                <div>
                    <img src= {Wand} alt="" />
                    <p>Magic Recommendation</p>
                </div>
                <div>
                    <img src= {Follow} alt="" />
                    <p>Following</p>
                </div>
            </div>
            <Dashboard type='card1' theme = {theme} />
        </div>
        </ThemeContext.Provider>
    );
}
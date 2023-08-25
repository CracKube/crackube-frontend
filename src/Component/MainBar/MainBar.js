import styles from '../MainBar/MainBar.module.css'
import TopNavBar from '../NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import BlogPart from '../BlogPart/BlogPart';
import Infinite from '../InfinitePart/Infinite';
import { Card1 } from '../Constants';
import { ThemeContext } from '../Pages/Home';

export default function MainBar({theme}) {
    return (
        <ThemeContext.Provider >
        <div className={styles.mainbar}>
            <Heading text='Top Blogs to Read📚' theme = {theme} />
            <Dashboard type='card1' />
        </div>
        </ThemeContext.Provider>
    );
}
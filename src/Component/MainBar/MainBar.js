import styles from '../MainBar/MainBar.module.css'
import TopNavBar from '../NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import BlogPart from '../BlogPart/BlogPart';
import Infinite from '../InfinitePart/Infinite';
import { Card1 } from '../Constants';
import { ThemeContext } from '../Pages/Home';

export default function MainBar() {
    return (
        <div className={styles.mainbar}>
            <Heading text='Top Blogs to Read📚' />
            <Dashboard type='card1' />
            <Heading text='Answer it! Earn it!💰' />
            <Dashboard type='card2' />
            <Infinite />
            <Dashboard type='card1' />
            {/* <BlogPart /> */}
        </div>
    );
}
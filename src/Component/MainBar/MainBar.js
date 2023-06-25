import styles from '../MainBar/MainBar.module.css'
import TopNavBar from '../NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import BlogPart from '../BlogPart/BlogPart';
import Infinite from '../InfinitePart/Infinite';
import { Card1 } from '../Constants';

export default function MainBar({ state }) {
    return (
        <div className={styles.mainbar}>
            {
                state == "Blog" &&
                <>
                    <Heading text='Top Blogs to Read📚' />
                    <Dashboard type='card1' />
                </>
            }
            {
                state == "Answer" &&
                <>
                    <Heading text='Answer it! Earn it!💰' />
                    <Dashboard type='card2' />
                </>
            }
            {
                state == "Code" &&
                <div style={{ textAlign: 'center' }}>
                    <h1>Coming soon...</h1>
                </div>
            }
            {/* <Infinite />
            <Dashboard type='card1' />
            <BlogPart /> */}
        </div>
    );
}   
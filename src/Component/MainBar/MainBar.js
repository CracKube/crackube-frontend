import styles from '../MainBar/MainBar.module.css'
import TopNavBar from './NavBar/TopNavBar';
import Dashboard from '../Dashboard/Dashboard';
import Heading from './Heading/Heading';
import BlogPart from '../BlogPart/BlogPart';

export default function MainBar(){
    return (
        <div className={styles.mainbar}>
            <TopNavBar />
            <Heading text='Top Blogs to Read📚' />
            <Dashboard type='card1'/>
            <Heading text='Answer it! Earn it!💰'/>
            <Dashboard type='card2' />
            <Heading text='Code Hard, Make Money, Have Fun!🧑‍💻' />
            {/* <BlogPart /> */}
        </div>
    );
}
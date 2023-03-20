import styles from './Card2.module.css'
import CardFlex from './CardFlex';
import CardTitle1 from '../Card1/CardTitle1';
import CardAuthor1 from '../Card1/CardAuthor1';
import url from '../../../styles/Sample-Author 2.svg';

export default function Card2(props){
    const title = 'Assume the random variable X has a binomial distribution with the given probability of obtaining a success. Find the following probability of the...';
    return(
        <div className={styles.card2}>
            <CardFlex />
            <CardTitle1 title={title} classname='titleContainer2' />
            <CardAuthor1 author='Jay Mittal' modified='posted 8 hours ago' url={props.authorImage} />
        </div>
    );
}
import styles from './Card1.module.css'
import CardImage1 from './CardImage1';
import CardTitle1 from './CardTitle1';
import CardAuthor1 from './CardAuthor1';


function Card1(props){
    return (
        <div className={styles.card1}>
            <CardImage1 image={props.thumbnail}/>
            <CardTitle1 classname='titleContainer' title='Airpods Pro 2 vs Airpods Pro 2 of the world?'/>
            <CardAuthor1 author='Jennifer Margarette' modified='posted 8 hours ago' url={props.authorImage}/>
        </div>
    )
}

export default Card1;
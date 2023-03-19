import styles from './CardTitle1.module.css'

export default function CardTitle1(props){
    return(
        <div className={`${styles[props.classname]}`}>
            <a href="">{props.title}</a>
        </div>
    );
}
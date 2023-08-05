import styles from './CardTitle1.module.css'

export default function CardTitle1(props) {
    const ques = props.title.length;
    const val = props.title.slice(0,50);
    return (
        
        <div className={`${styles[props.classname]}`}>
            
            {
            ques < 50 ? (
                <>
                <div>{val}</div>
                </> 
            ): (
                <>
                <div>{val}...</div>
                </>
            )
        }
               
        </div>
    );
}
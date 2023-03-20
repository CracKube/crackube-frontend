import styles from './BannerImage.module.css'

export default function BannerImage(props){
    return(
        <div className={styles.banner}>
            <img src={props.url} alt="" />
        </div>
    );
}
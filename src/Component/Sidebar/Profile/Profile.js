import styles from './Profile.module.css';
import url from '../../../styles/Sample-Author.svg'
import url1 from '../../../styles/Icons/Diamond Logo 1.svg'

export default function Profile(){
    return(
        <div className={styles.profile}>
            <div className={styles.pfp}>
                <img src={url} alt="" className={styles.pfpimage} />
            </div>
            <div className={styles.pfcardcontainer}>
                <div className={styles.pfcard}>
                    <div className={styles.name}>Sophia Margrete</div>
                    <div className={styles.id}>@sophiamargrete7</div>
                    <div className={styles.league}>
                        <img src={url1} alt="" className={styles.leagueimage}/>
                        <div className={styles.leaguetitle}>Diamond</div>
                    </div>
                    <div className={styles.peoplecount}>
                        <div className={styles.following}>
                            <div className={styles.followingcount}>55,000</div>
                            <div>FOLLOWING</div>
                        </div>
                        <div className={styles.followers}>
                            <div className={styles.followerscount}>55,000</div>
                            <div>FOLLOWERS</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
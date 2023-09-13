import styles from './Profile.module.css';
import { authorUrl as url, Diamond as url1 } from '../Constants'

export default function Profile({details}) {
    return (
        <div className={styles.profile}>
            <div className={styles.pfp}>
                <img src={details.profilePicUrl} alt="" className={styles.pfpimage} />
            </div>
            <div className={styles.pfcardcontainer}>
                <div className={styles.pfcard}>
                    <div className={styles.name}>{details.firstName} </div>
                    <div className={styles.id}>@{details.username}</div>
                    <div className={styles.league}>
                        <div className={styles.leaguetitle}>Diamond</div>
                    </div>
                    <div className={styles.peoplecount}>
                        <div className={styles.following}>
                            <div className={styles.followingcount}>55,000</div>
                            <div>FOLLOWING</div>
                        </div>
                        <div className='prof-card-line'></div>
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
import styles from './Profile.module.css';
import { authorUrl as url, Diamond as url1 } from '../Constants'

export default function Profile({details, time}) {
    console.log(details.name)
    return (
        <div className={styles.profile}>
            <div className={styles.pfp}>
                <img src={details.profilePicUrl} alt="" className={styles.pfpimage} />
            </div>
            
            <div className={styles.pfcardcontainer}>
                <div className={styles.pfcard}>

                    <div className={styles.name}>{details.name} </div>
                    <div className={styles.id}>@{details.username}</div>
                    <div className={styles.league}>
                        <div className={styles.leaguetitle}>Diamond</div>
                    </div>
                    <div className={styles.peoplecount}>
                        <div className={styles.following}>
                            <div className={styles.followingcount}>{details.following && details.following.length}</div>
                            <div>FOLLOWING</div>
                        </div>
                        <div className='prof-card-line'></div>
                        <div className={styles.followers}>
                            <div className={styles.followerscount}>{details.followers && details.followers.length}</div>
                            <div>FOLLOWERS</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
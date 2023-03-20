import styles from './SideMenuBar.css'

export default function SideMenuBar(){
    return(
        <div className={styles.sidemenubar}>
            <div>Home</div>
            <div>Explore</div>
            <div>Originals</div>
            <div>Bookmarks</div>
            <div>Your Content</div>
        </div>
    );
}
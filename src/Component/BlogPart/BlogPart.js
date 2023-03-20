import styles from './BlogPart.module.css';
import {BlogContent, BlogAuthor, BannerImage} from '../Constants'
import url from '../../styles/Rectangle 120.svg'
import url1 from '../../styles/Sample-Author 2.svg'

export default function BlogPart(){
    return (
        <div className={styles.blogpart}>
            <BannerImage url={url}/>
            <div className={styles.heading}>
            7 DISASTER THAT IS CAUSED BY CLIMATE CHANGE THAT WILL LEAVE YOU SHOCKED
            </div>
            <BlogAuthor author='Jennifer Margarette' modified='posted 8 hours ago' url={url1} />
            <BlogContent />
        </div>
    );
}
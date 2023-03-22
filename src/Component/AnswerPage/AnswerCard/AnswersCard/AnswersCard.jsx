import React from 'react'
import styles from './AnswersCard.module.css'
import { AnswersAuthor, authorUrl, Like, Dislike, Flag} from '../../../Constants';

const AnswersCard = () => {
    return (
        <div className={styles.answerscard}>
            <div className={styles.answerauthor}>
                <AnswersAuthor author='Jennifer Margarette' modified='@jennifermargreed' url={authorUrl}/>
            </div>
            <div className={styles.image}>
                <img src="" alt="" />
            </div>
            <div className={styles.answersheading}>
                <div style={{
                    fontWeight: '250'
                }}>Possible Data Inconsistencies:</div>
            </div>
            <div className={styles.answerscontent}>
                <div style={{fontWeight: '100', lineHeight: '25px'}}>
                    In this scenario, two persons are simultaneously performing reservation and cancellation without synchronization. This may result in the following data inconsistencies: <br></br>
                    <span style={{
                        display: 'block',
                        margin: 'auto',
                        width: '90%',
                    }}>Race condition: There can be a situation where both Mr. Amal and Ms. Githal try to book/cancel the same ticket simultaneously, and the result of the operation depends on which operation finishes first. This can lead to incorrect booking/cancellation status of the ticket.</span>
                </div>
            </div>
            <div className={styles.feedback}>
                <div className={styles.like}>
                    <div>
                        <div>
                            <img src={Like} alt="" />
                            <div>4k</div>
                        </div>
                        <div>
                            <img src={Dislike} alt="" />
                            <div>1k</div>
                        </div>
                    </div>
                </div>
                <div className={styles.reply}>
                    <div>
                        Reply
                    </div>
                    <div>
                        <img src={Flag} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswersCard
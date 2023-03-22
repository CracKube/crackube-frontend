import React from 'react'
import styles from './QuestionCard.module.css';
import {Points, questiontext, QuestionAuthor, authorUrl, Tags} from '../../Constants'


const QuestionCard = () => {
  return (
    <div className={styles.questioncard}>
        <div className={styles.headerpoints}>
            <p style={{fontSize: '1.5rem'}}>Question</p>
            <Points />
        </div>
        <div className={styles.questionpart}>
            <p>
                {questiontext}
            </p>
        </div>
        <div className={styles.questionauthor}>
            <QuestionAuthor author='Jennifer Margarette' modified='@jennifermargreed' url={authorUrl}/>
        </div>
        <Tags />
    </div>
  )
}

export default QuestionCard
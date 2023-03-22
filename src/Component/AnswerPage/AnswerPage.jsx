import React from 'react'
import styles from './AnswerPage.module.css';
import { QuestionCard, AnswerCard } from '../Constants';

const AnswerPage = () => {
  return (
    <div className={styles.answerpage}>
        <QuestionCard />
        <AnswerCard />
    </div>
  )
}

export default AnswerPage